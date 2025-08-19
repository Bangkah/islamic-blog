// js/admin.js

// --- Variabel Global ---
let posts = JSON.parse(localStorage.getItem("posts")) || [];
let editingPostId = null;

// --- Utility ---
function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

function formatDate(date) {
    return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit", month: "short", year: "numeric"
    });
}

// --- Navigasi Sidebar ---
document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        let section = link.dataset.section;

        document.querySelectorAll(".menu-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
        document.getElementById(section + "-section").classList.add("active");

        document.getElementById("pageTitle").innerText = link.innerText;
    });
});

// --- Render Posts Table ---
function renderPosts() {
    const tbody = document.querySelector("#postsTable tbody");
    tbody.innerHTML = "";

    posts.forEach(post => {
        let tr = document.createElement("tr");
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
        tbody.appendChild(tr);
    });

    document.getElementById("totalPosts").innerText = posts.length;
}
renderPosts();

// --- Tambah/Edit Post ---
document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("postTitle").value;
    const category = document.getElementById("postCategory").value;
    const author = document.getElementById("postAuthor").value;
    const tags = document.getElementById("postTags").value.split(",");
    const content = document.getElementById("postContent").value;

    if (!title || !category || !content) {
        alert("Judul, kategori, dan konten wajib diisi!");
        return;
    }

    if (editingPostId) {
        // update
        let post = posts.find(p => p.id === editingPostId);
        post.title = title;
        post.category = category;
        post.author = author;
        post.tags = tags;
        post.content = content;
    } else {
        // create baru
        let newPost = {
            id: Date.now(),
            title,
            category,
            author,
            tags,
            content,
            date: new Date(),
            views: 0,
            likes: 0
        };
        posts.unshift(newPost);
    }

    savePosts();
    renderPosts();
    this.reset();
    editingPostId = null;
    document.getElementById("cancelBtn").style.display = "none";
    alert("Artikel berhasil disimpan!");
});

// --- Edit Post ---
function editPost(id) {
    let post = posts.find(p => p.id === id);
    if (!post) return;

    document.getElementById("postTitle").value = post.title;
    document.getElementById("postCategory").value = post.category;
    document.getElementById("postAuthor").value = post.author;
    document.getElementById("postTags").value = post.tags.join(",");
    document.getElementById("postContent").value = post.content;

    editingPostId = id;
    document.getElementById("cancelBtn").style.display = "inline-block";

    // pindah ke form create
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById("create-section").classList.add("active");
    document.getElementById("pageTitle").innerText = "Edit Artikel";
}

// --- Cancel Edit ---
document.getElementById("cancelBtn").addEventListener("click", () => {
    document.getElementById("postForm").reset();
    editingPostId = null;
    document.getElementById("cancelBtn").style.display = "none";
});

// --- Delete Post ---
let deleteId = null;
function showDeleteConfirm(id) {
    deleteId = id;
    document.getElementById("confirmModal").style.display = "block";
}

document.getElementById("confirmDelete").addEventListener("click", () => {
    posts = posts.filter(p => p.id !== deleteId);
    savePosts();
    renderPosts();
    closeConfirmModal();
});

function closeConfirmModal() {
    document.getElementById("confirmModal").style.display = "none";
    deleteId = null;
}

// --- Preview Artikel ---
document.getElementById("previewBtn").addEventListener("click", () => {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    document.getElementById("previewContent").innerHTML = `
        <h2>${title}</h2>
        <p>${content.replace(/\n/g, "<br>")}</p>
    `;
    document.getElementById("previewModal").style.display = "block";
});

function closePreview() {
    document.getElementById("previewModal").style.display = "none";
}
