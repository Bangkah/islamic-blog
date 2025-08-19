// Islamic Blog API Provider
// This file simulates a backend API for the Islamic Blog platform

class IslamicBlogAPI {
    constructor() {
        this.posts = [
            {
                id: 1,
                title: "Keutamaan Menuntut Ilmu dalam Islam",
                category: "Akidah",
                content: "Islam sangat menekankan pentingnya menuntut ilmu. Rasulullah SAW bersabda: 'Tuntutlah ilmu dari buaian hingga liang lahat'. Hal ini menunjukkan bahwa belajar adalah kewajiban setiap Muslim, baik laki-laki maupun perempuan, sepanjang hayat.\n\nIlmu yang bermanfaat akan menjadi amal jariyah yang pahalanya terus mengalir meskipun kita telah meninggal dunia. Oleh karena itu, setiap Muslim hendaknya senantiasa berusaha menambah ilmu pengetahuan, baik ilmu agama maupun ilmu dunia yang bermanfaat.\n\nDalam Al-Quran, Allah SWT juga berfirman: 'Dan katakanlah: Ya Tuhanku, tambahkanlah kepadaku ilmu pengetahuan.' (QS. Taha: 114). Ayat ini menunjukkan betapa pentingnya ilmu dalam pandangan Islam.",
                excerpt: "Islam sangat menekankan pentingnya menuntut ilmu. Rasulullah SAW bersabda: 'Tuntutlah ilmu dari buaian hingga liang lahat'...",
                author: "Dr. Ahmad Mahmud",
                date: new Date('2024-01-15').toISOString(),
                views: 1250,
                likes: 89,
                tags: ["ilmu", "pendidikan", "akidah", "hadits"]
            },
            {
                id: 2,
                title: "Adab Bermuamalah dalam Islam",
                category: "Akhlak",
                content: "Dalam Islam, bermuamalah atau berinteraksi dengan sesama manusia memiliki adab yang harus dijaga. Di antara adab tersebut adalah berlaku jujur, menepati janji, tidak merugikan orang lain, dan selalu menjaga amanah.\n\nRasulullah SAW adalah teladan terbaik dalam hal ini. Beliau dikenal dengan gelar Al-Amin (yang terpercaya) bahkan sebelum diangkat menjadi Rasul. Ini menunjukkan betapa pentingnya sifat amanah dan kejujuran dalam bermuamalah.\n\nIslam mengajarkan kita untuk selalu berlaku adil dalam berbisnis, tidak menipu, tidak berbohong, dan tidak mengambil keuntungan yang berlebihan. Allah SWT berfirman: 'Hai orang-orang yang beriman, janganlah kamu saling memakan harta sesamamu dengan jalan yang batil.' (QS. An-Nisa: 29)",
                excerpt: "Dalam Islam, bermuamalah atau berinteraksi dengan sesama manusia memiliki adab yang harus dijaga...",
                author: "Ustadz Muhammad Hasan",
                date: new Date('2024-01-12').toISOString(),
                views: 980,
                likes: 67,
                tags: ["akhlak", "muamalah", "bisnis", "kejujuran"]
            },
            {
                id: 3,
                title: "Keutamaan Shalat Berjamaah",
                category: "Ibadah",
                content: "Shalat berjamaah memiliki keutamaan yang sangat besar dalam Islam. Rasulullah SAW bersabda: 'Shalat berjamaah lebih utama daripada shalat sendirian dengan 27 derajat.' (HR. Bukhari Muslim)\n\nKeutamaan shalat berjamaah tidak hanya dari segi pahala, tetapi juga dari segi sosial. Shalat berjamaah dapat mempererat tali persaudaraan antar sesama Muslim, mengajarkan kedisiplinan, dan menumbuhkan rasa kebersamaan.\n\nSelain itu, shalat berjamaah juga mengajarkan kita tentang pentingnya keseragaman dan kesatuan dalam beribadah kepada Allah SWT. Semua jamaah menghadap ke satu kiblat, melakukan gerakan yang sama, dan dipimpin oleh satu imam.",
                excerpt: "Shalat berjamaah memiliki keutamaan yang sangat besar dalam Islam. Rasulullah SAW bersabda: 'Shalat berjamaah lebih utama...",
                author: "Ustadz Abdul Rahman",
                date: new Date('2024-01-10').toISOString(),
                views: 1450,
                likes: 102,
                tags: ["shalat", "jamaah", "ibadah", "masjid"]
            },
            {
                id: 4,
                title: "Sejarah Masjid Nabawi dan Perkembangannya",
                category: "Sejarah",
                content: "Masjid Nabawi adalah masjid kedua yang dibangun oleh Rasulullah SAW setelah Masjid Quba. Masjid ini tidak hanya berfungsi sebagai tempat ibadah, tetapi juga sebagai pusat pemerintahan, pendidikan, dan sosial masyarakat Muslim pada masa itu.\n\nPada awalnya, Masjid Nabawi dibangun dengan sangat sederhana. Dindingnya terbuat dari batu bata yang tidak dibakar, atapnya dari pelepah kurma, dan lantainya masih berupa tanah. Namun, kesederhanaan ini tidak mengurangi kemuliaan dan keberkahan masjid tersebut.\n\nSeiring berjalannya waktu, Masjid Nabawi mengalami beberapa kali perluasan, baik pada masa Khulafaur Rasyidin, Dinasti Umayyah, Abbasiyah, hingga pemerintahan modern Arab Saudi saat ini.",
                excerpt: "Masjid Nabawi adalah masjid kedua yang dibangun oleh Rasulullah SAW setelah Masjid Quba...",
                author: "Dr. Fatimah Zahra",
                date: new Date('2024-01-08').toISOString(),
                views: 2100,
                likes: 156,
                tags: ["sejarah", "masjid", "nabawi", "madinah"]
            },
            {
                id: 5,
                title: "Tafsir Surah Al-Fatihah: Makna dan Hikmah",
                category: "Tafsir",
                content: "Surah Al-Fatihah adalah surah pertama dalam Al-Quran dan merupakan surah yang paling sering dibaca oleh umat Islam. Surah ini terdiri dari 7 ayat dan memiliki makna yang sangat mendalam.\n\nAl-Fatihah bermakna 'pembuka' karena surah ini membuka mushaf Al-Quran. Surah ini juga disebut Ummul Kitab (induk kitab) karena mengandung intisari dari seluruh isi Al-Quran.\n\nDalam surah ini terdapat pujian kepada Allah, pengakuan akan keesaan-Nya, permohonan petunjuk ke jalan yang lurus, dan doa agar dijauhkan dari jalan orang-orang yang dimurkai dan sesat. Setiap ayat mengandung makna yang sangat mendalam dan dapat menjadi pedoman hidup bagi setiap Muslim.",
                excerpt: "Surah Al-Fatihah adalah surah pertama dalam Al-Quran dan merupakan surah yang paling sering dibaca...",
                author: "Prof. Dr. Ibrahim Al-Makki",
                date: new Date('2024-01-05').toISOString(),
                views: 1800,
                likes: 134,
                tags: ["tafsir", "al-fatihah", "quran", "makna"]
            },
            {
                id: 6,
                title: "Hadits Tentang Berbakti Kepada Orang Tua",
                category: "Hadits",
                content: "Rasulullah SAW sangat menekankan pentingnya berbakti kepada orang tua. Dalam sebuah hadits yang diriwayatkan oleh Abu Hurairah RA, Rasulullah SAW bersabda: 'Ridha Allah tergantung pada ridha orang tua, dan murka Allah tergantung pada murka orang tua.' (HR. Tirmidzi)\n\nHadits ini menunjukkan betapa tingginya kedudukan orang tua dalam Islam. Berbakti kepada orang tua bukan hanya kewajiban moral, tetapi juga kewajiban agama yang sangat ditekankan dalam Islam.\n\nAl-Quran juga menyebutkan: 'Dan Tuhanmu telah memerintahkan agar kamu jangan menyembah selain Dia dan hendaklah berbuat baik kepada ibu bapakmu.' (QS. Al-Isra: 23). Ayat ini menunjukkan bahwa perintah berbakti kepada orang tua disebutkan langsung setelah perintah menyembah Allah.",
                excerpt: "Rasulullah SAW sangat menekankan pentingnya berbakti kepada orang tua dalam sebuah hadits...",
                author: "Ustadzah Aisyah Nur",
                date: new Date('2024-01-03').toISOString(),
                views: 1650,
                likes: 198,
                tags: ["hadits", "orang tua", "birrul walidain", "akhlak"]
            }
        ];
        this.nextId = 7;
        this.apiKey = 'islamicblog_' + Date.now().toString(36);
        this.rateLimits = new Map();
        this.maxRequestsPerHour = 100;
    }

    // Rate limiting
    checkRateLimit(clientId = 'default') {
        const now = Date.now();
        const hourAgo = now - 3600000; // 1 hour in milliseconds

        if (!this.rateLimits.has(clientId)) {
            this.rateLimits.set(clientId, []);
        }

        const requests = this.rateLimits.get(clientId);
        // Remove old requests
        const recentRequests = requests.filter(time => time > hourAgo);
        this.rateLimits.set(clientId, recentRequests);

        if (recentRequests.length >= this.maxRequestsPerHour) {
            return false;
        }

        recentRequests.push(now);
        return true;
    }

    // Simulate API response structure
    createResponse(data, success = true, message = '', statusCode = 200) {
        return {
            success,
            statusCode,
            message,
            data,
            timestamp: new Date().toISOString(),
            api_version: '1.0.0'
        };
    }

    // GET /api/posts - Get all posts with optional filtering and pagination
    getAllPosts(params = {}) {
        if (!this.checkRateLimit(params.clientId)) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        let filteredPosts = [...this.posts];

        // Filter by category
        if (params.category && params.category !== 'all') {
            filteredPosts = filteredPosts.filter(post => 
                post.category.toLowerCase() === params.category.toLowerCase()
            );
        }

        // Search in title and content
        if (params.search) {
            const searchTerm = params.search.toLowerCase();
            filteredPosts = filteredPosts.filter(post => 
                post.title.toLowerCase().includes(searchTerm) ||
                post.content.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }

        // Filter by author
        if (params.author) {
            filteredPosts = filteredPosts.filter(post => 
                post.author.toLowerCase().includes(params.author.toLowerCase())
            );
        }

        // Sort options
        const sortBy = params.sortBy || 'date';
        const sortOrder = params.sortOrder || 'desc';
        
        filteredPosts.sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];
            
            if (sortBy === 'date') {
                aValue = new Date(aValue);
                bValue = new Date(bValue);
            }
            
            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        // Pagination
        const page = parseInt(params.page) || 1;
        const limit = parseInt(params.limit) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        
        const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
        
        const totalPosts = filteredPosts.length;
        const totalPages = Math.ceil(totalPosts / limit);

        return this.createResponse({
            posts: paginatedPosts,
            pagination: {
                currentPage: page,
                totalPages,
                totalPosts,
                postsPerPage: limit,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            },
            filters: {
                category: params.category || 'all',
                search: params.search || '',
                sortBy,
                sortOrder
            }
        });
    }

    // GET /api/posts/:id - Get single post by ID
    getPostById(id) {
        if (!this.checkRateLimit()) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        const post = this.posts.find(p => p.id === parseInt(id));
        
        if (!post) {
            return this.createResponse(null, false, `Post with ID ${id} not found.`, 404);
        }

        // Increment view count
        post.views++;

        return this.createResponse(post);
    }

    // POST /api/posts - Create new post
    createPost(postData, clientId = 'default') {
        if (!this.checkRateLimit(clientId)) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        // Validate required fields
        const requiredFields = ['title', 'category', 'content'];
        const missingFields = requiredFields.filter(field => !postData[field] || postData[field].trim() === '');
        
        if (missingFields.length > 0) {
            return this.createResponse(null, false, `Missing required fields: ${missingFields.join(', ')}`, 400);
        }

        // Validate category
        const validCategories = ['Akidah', 'Ibadah', 'Akhlak', 'Sejarah', 'Tafsir', 'Hadits', 'Fiqh', 'Inspirasi'];
        if (!validCategories.includes(postData.category)) {
            return this.createResponse(null, false, `Invalid category. Valid categories: ${validCategories.join(', ')}`, 400);
        }

        // Create new post
        const newPost = {
            id: this.nextId++,
            title: postData.title.trim(),
            category: postData.category,
            content: postData.content.trim(),
            excerpt: this.generateExcerpt(postData.content),
            author: postData.author || 'Anonymous',
            date: new Date().toISOString(),
            views: 0,
            likes: 0,
            tags: postData.tags || []
        };

        this.posts.unshift(newPost);
        
        return this.createResponse(newPost, true, 'Post created successfully.', 201);
    }

    // PUT /api/posts/:id - Update existing post
    updatePost(id, updateData, clientId = 'default') {
        if (!this.checkRateLimit(clientId)) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        const postIndex = this.posts.findIndex(p => p.id === parseInt(id));
        
        if (postIndex === -1) {
            return this.createResponse(null, false, `Post with ID ${id} not found.`, 404);
        }

        const post = this.posts[postIndex];
        
        // Validate category if provided
        if (updateData.category) {
            const validCategories = ['Akidah', 'Ibadah', 'Akhlak', 'Sejarah', 'Tafsir', 'Hadits', 'Fiqh', 'Inspirasi'];
            if (!validCategories.includes(updateData.category)) {
                return this.createResponse(null, false, `Invalid category. Valid categories: ${validCategories.join(', ')}`, 400);
            }
        }

        // Update post fields
        const updatedPost = {
            ...post,
            ...updateData,
            id: post.id, // Ensure ID cannot be changed
            date: post.date, // Preserve original date
            views: post.views, // Preserve view count
            likes: post.likes // Preserve like count
        };

        // Regenerate excerpt if content was updated
        if (updateData.content) {
            updatedPost.excerpt = this.generateExcerpt(updateData.content);
        }

        this.posts[postIndex] = updatedPost;
        
        return this.createResponse(updatedPost, true, 'Post updated successfully.');
    }

    // DELETE /api/posts/:id - Delete post
    deletePost(id, clientId = 'default') {
        if (!this.checkRateLimit(clientId)) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        const postIndex = this.posts.findIndex(p => p.id === parseInt(id));
        
        if (postIndex === -1) {
            return this.createResponse(null, false, `Post with ID ${id} not found.`, 404);
        }

        const deletedPost = this.posts.splice(postIndex, 1)[0];
        
        return this.createResponse(deletedPost, true, 'Post deleted successfully.');
    }

    // GET /api/categories - Get all categories with post counts
    getCategories() {
        if (!this.checkRateLimit()) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        const categories = {};
        this.posts.forEach(post => {
            if (!categories[post.category]) {
                categories[post.category] = 0;
            }
            categories[post.category]++;
        });

        const categoryList = Object.entries(categories).map(([name, count]) => ({
            name,
            count,
            slug: name.toLowerCase()
        }));

        return this.createResponse(categoryList);
    }

    // GET /api/stats - Get blog statistics
    getStats() {
        if (!this.checkRateLimit()) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        const totalPosts = this.posts.length;
        const totalViews = this.posts.reduce((sum, post) => sum + post.views, 0);
        const totalLikes = this.posts.reduce((sum, post) => sum + post.likes, 0);
        
        const categoryCounts = {};
        this.posts.forEach(post => {
            categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
        });

        const mostPopularPost = this.posts.reduce((max, post) => 
            post.views > max.views ? post : max, this.posts[0]);

        const recentPosts = this.posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);

        return this.createResponse({
            totalPosts,
            totalViews,
            totalLikes,
            categoryCounts,
            mostPopularPost,
            recentPosts,
            apiVersion: '1.0.0',
            lastUpdated: new Date().toISOString()
        });
    }

    // POST /api/posts/:id/like - Like a post
    likePost(id) {
        if (!this.checkRateLimit()) {
            return this.createResponse(null, false, 'Rate limit exceeded. Maximum 100 requests per hour.', 429);
        }

        const post = this.posts.find(p => p.id === parseInt(id));
        
        if (!post) {
            return this.createResponse(null, false, `Post with ID ${id} not found.`, 404);
        }

        post.likes++;
        
        return this.createResponse({ 
            postId: post.id, 
            likes: post.likes 
        }, true, 'Post liked successfully.');
    }

    // Utility function to generate excerpt
    generateExcerpt(content, maxLength = 150) {
        if (content.length <= maxLength) {
            return content;
        }
        return content.substring(0, maxLength).trim() + '...';
    }

    // Get API documentation
    getAPIDocumentation() {
        return {
            title: "Islamic Blog API Documentation",
            version: "1.0.0",
            baseURL: window.location.origin + "/api",
            authentication: "API Key required for write operations",
            rateLimit: "100 requests per hour",
            endpoints: {
                "GET /api/posts": {
                    description: "Get all posts with optional filtering",
                    parameters: {
                        page: "Page number (default: 1)",
                        limit: "Posts per page (default: 10)",
                        category: "Filter by category",
                        search: "Search in title and content",
                        author: "Filter by author",
                        sortBy: "Sort by field (date, title, views, likes)",
                        sortOrder: "asc or desc (default: desc)"
                    }
                },
                "GET /api/posts/:id": {
                    description: "Get single post by ID",
                    parameters: {
                        id: "Post ID"
                    }
                },
                "POST /api/posts": {
                    description: "Create new post",
                    requiredFields: ["title", "category", "content"],
                    optionalFields: ["author", "tags"]
                },
                "PUT /api/posts/:id": {
                    description: "Update existing post",
                    parameters: {
                        id: "Post ID"
                    }
                },
                "DELETE /api/posts/:id": {
                    description: "Delete post",
                    parameters: {
                        id: "Post ID"
                    }
                },
                "GET /api/categories": {
                    description: "Get all categories with post counts"
                },
                "GET /api/stats": {
                    description: "Get blog statistics"
                },
                "POST /api/posts/:id/like": {
                    description: "Like a post",
                    parameters: {
                        id: "Post ID"
                    }
                }
            }
        };
    }

    // Generate API key (for demo purposes)
    generateAPIKey() {
        return 'islamicblog_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
    }
}

// Initialize API instance
window.IslamicBlogAPI = new IslamicBlogAPI();

// Expose API methods for external use
window.BlogAPI = {
    // Public methods that can be used by other applications
    getAllPosts: (params = {}) => window.IslamicBlogAPI.getAllPosts(params),
    getPostById: (id) => window.IslamicBlogAPI.getPostById(id),
    createPost: (postData, apiKey) => {
        // In a real implementation, you'd validate the API key here
        return window.IslamicBlogAPI.createPost(postData, apiKey);
    },
    updatePost: (id, updateData, apiKey) => {
        return window.IslamicBlogAPI.updatePost(id, updateData, apiKey);
    },
    deletePost: (id, apiKey) => {
        return window.IslamicBlogAPI.deletePost(id, apiKey);
    },
    getCategories: () => window.IslamicBlogAPI.getCategories(),
    getStats: () => window.IslamicBlogAPI.getStats(),
    likePost: (id) => window.IslamicBlogAPI.likePost(id),
    getDocumentation: () => window.IslamicBlogAPI.getAPIDocumentation(),
    generateAPIKey: () => window.IslamicBlogAPI.generateAPIKey()
};

console.log('🕌 Islamic Blog API v1.0.0 loaded successfully!');
console.log('📚 Access API documentation with: BlogAPI.getDocumentation()');
console.log('🔑 Generate API key with: BlogAPI.generateAPIKey()');

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IslamicBlogAPI;
}