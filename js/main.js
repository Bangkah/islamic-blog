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
    let totalPages = 1;

    // Initialize
    init();

    function init() {
        setupEventListeners();
        loadArticles(true);
        setupInfiniteScroll();
    }

    function setupEventListeners() {
        // Mobile navigation toggle
        navToggle.addEventListener('click', toggleMobileNav);

        // Navigation category links
        document.querySelectorAll('.nav-link[data-category]').forEach(link => {
            link.addEventListener('click', handleCategoryClick);
        });

        // Footer category links
        document.querySelectorAll('.footer-section a[data-category]').forEach(link => {
            link.addEventListener('click', handleCategoryClick);
        });

        // Search input with debounce
        searchInput.addEventListener('input', debounce(handleSearch, 300));

        // Modal controls
        closeModal.addEventListener('click', closeArticleModal);
        articleModal.addEventListener('click', e => {
            if (e.target === articleModal) closeArticleModal();
        });

        // Keyboard navigation (ESC to close modal)
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeArticleModal();
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });
    }

    function toggleMobileNav() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navToggle.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px,5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px,-6px)';
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

        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');

        currentCategory = category;
        currentPage = 1;
        loadArticles(true);

        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        toggleMobileNavBarsReset();

        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
    }

    function toggleMobileNavBarsReset() {
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
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
        if (isLoading || currentPage > totalPages) return;
        isLoading = true;
        showLoading(reset);

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
                totalPages = response.data.pagination.totalPages;
                displayArticles(response.data.posts, reset);
                updateFilterInfo(response.data);
                hideLoading();
                if (response.data.posts.length === 0 && currentPage === 1) showNoResults();
            } else {
                console.error('Load articles failed:', response.message);
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

        if (!articles.length) {
            if (reset) showNoResults();
            return;
        }

        const html = articles.map(createArticleCard).join('');
        if (reset) articlesGrid.innerHTML = html;
        else articlesGrid.insertAdjacentHTML('beforeend', html);

        // Attach click listeners
        articlesGrid.querySelectorAll('.article-card:not([data-listener])').forEach(card => {
            card.setAttribute('data-listener', 'true');
            card.addEventListener('click', () => {
                openArticleModal(parseInt(card.dataset.id));
            });
        });

        // Animate cards
        setTimeout(() => {
            articlesGrid.querySelectorAll('.article-card').forEach((card, i) => {
                card.style.animationDelay = `${i * 0.1}s`;
                card.classList.add('fade-in');
            });
        }, 50);
    }

    function createArticleCard(article) {
        const date = formatDate(article.date);
        return `
            <div class="article-card" data-id="${article.id}">
                <h3>${article.title}</h3>
                <p class="excerpt">${article.excerpt}</p>
                <div class="meta">
                    <span>${date}</span> | 
                    <span>${article.author}</span> |
                    <span>${article.views} views</span> |
                    <span class="like-btn" data-id="${article.id}">❤️ ${article.likes}</span>
                </div>
            </div>
        `;
    }

    function openArticleModal(id) {
        const response = window.BlogAPI.getPostById(id);
        if (!response.success) return showError(response.message);

        const article = response.data;
        modalBody.innerHTML = `
            <h2>${article.title}</h2>
            <p class="meta">${formatDate(article.date)} | ${article.author} | ${article.views} views | ❤️ ${article.likes}</p>
            <div class="content">${article.content.replace(/\n/g, '<br>')}</div>
        `;
        articleModal.style.display = 'flex';
    }

    function closeArticleModal() {
        articleModal.style.display = 'none';
        modalBody.innerHTML = '';
    }

    function setupInfiniteScroll() {
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
                if (!isLoading && currentPage < totalPages) {
                    currentPage++;
                    loadArticles();
                }
            }
        });
    }

    function updateFilterInfo(data) {
        filterInfo.textContent = `Showing ${data.posts.length} of ${data.pagination.totalPosts} articles`;
        articleCount.textContent = data.pagination.totalPosts;
    }

    function showLoading(reset = false) {
        if (reset) articlesGrid.innerHTML = '';
        loadingSpinner.style.display = 'block';
        noResults.style.display = 'none';
    }

    function hideLoading() {
        loadingSpinner.style.display = 'none';
    }

    function showNoResults() {
        noResults.style.display = 'block';
    }

    function showError(msg) {
        alert(msg);
    }

    function debounce(fn, delay) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    function formatDate(iso) {
        const d = new Date(iso);
        return `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;
    }

    function handleSmoothScroll(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
});
    