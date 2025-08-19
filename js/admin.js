// js/admin.js

// --- State ---
let posts = [];
let editingPostId = null;
let deleteId = null;

// --- DOM Elements ---
const postForm = document.getElementById("postForm");
const cancelBtn = document.getElementById("cancelBtn");
const postsTableBody = document.querySelector("#postsTable tbody");
const postsSearch = document.getElementById("postsSearch");
const categoryFilter = document.getElementById("categoryFilter");
const totalPostsEl = document.getElementById("totalPosts");
const totalViewsEl = document.getElementById("totalViews");
const totalLikesEl = document.getElementById("totalLikes");
const totalCategoriesEl = document.getElementById("totalCategories");
const recentPostsList = document.getElementById("recentPostsList");
const popularPostsList = document.getElementById("popularPostsList");
const previewModal = document.getElementById("previewModal");
const previewContent = document.getElementById("previewContent");
const confirmModal = document.getElementById("confirmModal");
const confirmDeleteBtn = document.getElementById("confirmDelete");

// --- Utility Functions ---
function formatDate(date) {
    return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function resetForm() {
    postForm.reset();
    editingPostId = null;
    cancelBtn.style.display = "none";
    document.getElementById("pageTitle").innerText = "Buat Artikel";
}

// --- Sidebar Navigation ---
document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const section = link.dataset.section;

        document.querySelectorAll(".menu-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
        document.getElementById(section + "-section").classList.add("active");

        document.getElementById("pageTitle").innerText = link.innerText;
    });
});

// --- Load & Render Posts ---
async function loadPosts() {
    try {
        const response = await window.BlogAPI.getAllPosts({ page: 1, limit: 1000 });
        if (response.success) {
            posts = response.data.posts;
            renderPostsTable();
            renderDashboardStats();
            renderRecentPopular();
        } else {
            alert("Gagal memuat artikel: " + response.message);
        }
    } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan saat memuat data.");
    }
}

function renderPostsTable() {
    postsTableBody.innerHTML = "";
    const searchTerm = postsSearch.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredPosts = posts.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    filteredPosts.forEach(post => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.category}</td>
            <td>${post.author || "-"}</td>
            <td>${formatDate(post.date)}</td>
            <td>${post.views}</td>
            <td>${post.likes}</td>
            <td>
                <button onclick="editPost(${post.id})" class="btn btn-small"><i class="fas fa-edit"></i></button>
                <button onclick="showDeleteConfirm(${post.id})" class="btn btn-small btn-danger"><i class="fas fa-trash"></i></button>
            </td>
        `;
        postsTableBody.appendChild(tr);
    });
}

// --- Dashboard Stats ---
function renderDashboardStats() {
    totalPostsEl.innerText = posts.length;
    totalViewsEl.innerText = posts.reduce((sum, p) => sum + p.views, 0);
    totalLikesEl.innerText = posts.reduce((sum, p) => sum + p.likes, 0);
    totalCategoriesEl.innerText = [...new Set(posts.map(p => p.category))].length;
}

function renderRecentPopular() {
    recentPostsList.innerHTML = "";
    popularPostsList.innerHTML = "";

    const recentPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    const popularPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 5);

    recentPosts.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("post-item");
        div.innerHTML = `<strong>${p.title}</strong> - ${formatDate(p.date)}`;
        recentPostsList.appendChild(div);
    });

    popularPosts.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("post-item");
        div.innerHTML = `<strong>${p.title}</strong> - ${p.views} views`;
        popularPostsList.appendChild(div);
    });
}

// --- Create/Edit Post ---
postForm.addEventListener("submit", async e => {
    e.preventDefault();

    const title = document.getElementById("postTitle").value.trim();
    const category = document.getElementById("postCategory").value;
    const author = document.getElementById("postAuthor").value.trim();
    const tags = document.getElementById("postTags").value.split(",").map(t => t.trim()).filter(t => t);
    const content = document.getElementById("postContent").value.trim();

    if (!title || !category || !content) {
        alert("Judul, kategori, dan konten wajib diisi!");
        return;
    }

    try {
        let response;
        if (editingPostId) {
            response = await window.BlogAPI.updatePost(editingPostId, { title, category, author, tags, content });
        } else {
            response = await window.BlogAPI.createPost({ title, category, author, tags, content });
        }

        if (response.success) {
            alert("Artikel berhasil disimpan!");
            resetForm();
            await loadPosts();
        } else {
            alert("Gagal menyimpan artikel: " + response.message);
        }
    } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan saat menyimpan artikel.");
    }
});

function editPost(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    document.getElementById("postTitle").value = post.title;
    document.getElementById("postCategory").value = post.category;
    document.getElementById("postAuthor").value = post.author;
    document.getElementById("postTags").value = post.tags.join(",");
    document.getElementById("postContent").value = post.content;

    editingPostId = id;
    cancelBtn.style.display = "inline-block";
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById("create-section").classList.add("active");
    document.getElementById("pageTitle").innerText = "Edit Artikel";
}

// --- Cancel Edit ---
cancelBtn.addEventListener("click", resetForm);

// --- Delete Post ---
function showDeleteConfirm(id) {
    deleteId = id;
    confirmModal.style.display = "block";
}

confirmDeleteBtn.addEventListener("click", async () => {
    try {
        const response = await window.BlogAPI.deletePost(deleteId);
        if (response.success) {
            alert("Artikel berhasil dihapus!");
            await loadPosts();
        } else {
            alert("Gagal menghapus artikel: " + response.message);
        }
    } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan saat menghapus artikel.");
    } finally {
        closeConfirmModal();
    }
});

function closeConfirmModal() {
    confirmModal.style.display = "none";
    deleteId = null;
}

// --- Preview Post ---
document.getElementById("previewBtn").addEventListener("click", () => {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    previewContent.innerHTML = `<h2>${title}</h2><p>${content.replace(/\n/g, "<br>")}</p>`;
    previewModal.style.display = "block";
});

function closePreview() {
    previewModal.style.display = "none";
}

// --- Search & Filter ---
postsSearch.addEventListener("input", renderPostsTable);
categoryFilter.addEventListener("change", renderPostsTable);

// --- Initialize ---
loadPosts();
