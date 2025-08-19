// Islamic Blog Frontend - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const searchInput = document.getElementById('searchInput');
    const filterInfo = document.getElementById('filterInfo');
    const articleCount = document.getElementById('articleCount');
    const articlesGrid = document.getElementById('articlesGrid');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const noResults = document.getElementById('noResults');
    const articleModal = document.getElementById('articleModal');
    const closeModal = document.getElementById('closeModal');
    const modalBody = document.getElementById('modalBody');

    // State
    let currentCategory = 'all';
    let currentSearchTerm = '';
    let currentPage = 1;
    let isLoading = false;

    // Initialize
    init();

    function init() {
        setupEventListeners();
        loadArticles();
        setupInfiniteScroll();
    }

    function setupEventListeners() {
        // Mobile navigation
        navToggle.addEventListener('click', toggleMobileNav);
        
        // Navigation category links
        document.querySelectorAll('.nav-link[data-category]').forEach(link => {
            link.addEventListener('click', handleCategoryClick);
        });

        // Footer category links
        document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
            link.addEventListener('click', handleCategoryClick);
        });

        // Search functionality
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        
        // Modal controls
        closeModal.addEventListener('click', closeArticleModal);
        articleModal.addEventListener('click', (e) => {
            if (e.target === articleModal) {
                closeArticleModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });
    }

    function toggleMobileNav() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navToggle.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    }

    function handleCategoryClick(e) {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        
        if (category === currentCategory) return;
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // Update state and reload articles
        currentCategory = category;
        currentPage = 1;
        loadArticles(true);
        
        // Close mobile nav
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        // Reset hamburger bars
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });

        // Smooth scroll to articles
        document.querySelector('.main-content').scrollIntoView({
            behavior: 'smooth'
        });
    }

    function handleSearch(e) {
        const searchTerm = e.target.value.trim().toLowerCase();
        if (searchTerm === currentSearchTerm) return;
        
        currentSearchTerm = searchTerm;
        currentPage = 1;
        loadArticles(true);
    }

    function loadArticles(reset = false) {
        if (isLoading) return;
        
        isLoading = true;
        showLoading(reset);

        // Simulate API call delay for better UX
        setTimeout(() => {
            const params = {
                category: currentCategory,
                search: currentSearchTerm,
                page: currentPage,
                limit: 12,
                sortBy: 'date',
                sortOrder: 'desc'
            };

            const response = window.BlogAPI.getAllPosts(params);
            
            if (response.success) {
                displayArticles(response.data.posts, reset);
                updateFilterInfo(response.data);
                hideLoading();
                
                if (response.data.posts.length === 0 && currentPage === 1) {
                    showNoResults();
                }
            } else {
                console.error('Failed to load articles:', response.message);
                showError('Gagal memuat artikel. Silakan coba lagi.');
                hideLoading();
            }
            
            isLoading = false;
        }, 300);
    }

    function displayArticles(articles, reset = false) {
        if (reset) {
            articlesGrid.innerHTML = '';
            noResults.style.display = 'none';
        }

        if (articles.length === 0) {
            if (reset) showNoResults();
            return;
        }

        const articlesHTML = articles.map((article, index) => 
            createArticleCard(article, index)
        ).join('');

        if (reset) {
            articlesGrid.innerHTML = articlesHTML;
        } else {
            articlesGrid.insertAdjacentHTML('beforeend', articlesHTML);
        }

        // Add click listeners to new article cards
        const newCards = articlesGrid.querySelectorAll('.article-card:not([data-listener])');
        newCards.forEach(card => {
            card.setAttribute('data-listener', 'true');
            card.addEventListener('click', () => {
                const articleId = parseInt(card.getAttribute('data-id'));
                openArticleModal(articleId);
            });
        });

        // Animate new cards
        setTimeout(() => {
            newCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('fade-in');
            });
        }, 50);
    }

    function createArticleCard(article, index) {
        const formattedDate = formatDate(article.date);