# 🕌 Blog Islam - Dynamic Web Application

## 📖 Deskripsi

Blog Islam adalah aplikasi web dinamis yang memungkinkan pengguna untuk membuat, membaca, mengupdate, dan menghapus konten berbasis tema Islam. Aplikasi ini dilengkapi dengan API yang dapat diintegrasikan dengan proyek lain dan interface yang responsif serta user-friendly.

## ✨ Fitur Utama

### 🎯 Fitur Web Interface
- **CRUD Operations** - Create, Read, Update, Delete postingan
- **Kategori Konten** - Akidah, Ibadah, Akhlak, Sejarah Islam, Tafsir, Hadits, Fiqh, Inspirasi
- **Interface Responsif** - Mendukung desktop dan mobile
- **Modal View** - Tampilan detail postingan dalam pop-up
- **Real-time Updates** - Perubahan langsung tanpa refresh halaman
- **Islamic Design** - Tema dan warna yang sesuai dengan nuansa Islami

### 🔌 API Features
- **RESTful API** - Standard REST endpoints
- **JSON Response** - Format data yang mudah diintegrasikan
- **Error Handling** - Penanganan error yang proper
- **CORS Ready** - Siap untuk integrasi lintas domain

## 🚀 Teknologi yang Digunakan

- **HTML5** - Struktur aplikasi
- **CSS3** - Styling dengan gradient dan backdrop-filter modern
- **JavaScript ES6+** - Logika aplikasi dan API simulation
- **Font Awesome** - Icon library
- **Responsive Design** - CSS Grid dan Flexbox

## 📦 Instalasi dan Setup

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, dll.)
- Web server lokal (optional: Live Server extension untuk VS Code)

### Langkah Instalasi

1. **Clone atau Download**
   ```bash
   # Jika menggunakan Git
   git clone https://github.com/Bangkah/islamic-blog.git
   
   ```

2. **Buka File**
   ```bash
   # Buka file index.html di browser
   # Atau gunakan live server untuk development
   ```

3. **Ready to Use!**
   - Aplikasi sudah siap digunakan tanpa konfigurasi tambahan
   - Data tersimpan dalam memory browser (untuk demo)

## 🎮 Cara Penggunaan

### Menambah Postingan Baru
1. Isi form "Tambah Konten Baru"
2. Pilih kategori yang sesuai
3. Tulis judul dan konten
4. Klik tombol "Simpan"

### Mengedit Postingan
1. Klik tombol "Edit" pada postingan yang ingin diubah
2. Form akan terisi otomatis dengan data postingan
3. Lakukan perubahan yang diinginkan
4. Klik "Update" atau "Batal" untuk membatalkan

### Melihat Detail Postingan
1. Klik tombol "Lihat" pada postingan
2. Modal akan terbuka menampilkan konten lengkap
3. Klik "X" atau area luar modal untuk menutup

### Menghapus Postingan
1. Klik tombol "Hapus" pada postingan
2. Konfirmasi penghapusan
3. Postingan akan dihapus secara permanen

## 🔗 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### 1. Get All Posts
```http
GET /api/posts
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Judul Postingan",
    "category": "Akidah",
    "content": "Konten postingan...",
    "date": "2024-01-01T00:00:00.000Z",
    "author": "Admin"
  }
]
```

#### 2. Get Post by ID
```http
GET /api/posts/:id
```

**Response:**
```json
{
  "id": 1,
  "title": "Judul Postingan",
  "category": "Akidah", 
  "content": "Konten postingan...",
  "date": "2024-01-01T00:00:00.000Z",
  "author": "Admin"
}
```

#### 3. Create New Post
```http
POST /api/posts
Content-Type: application/json

{
  "title": "Judul Baru",
  "category": "Ibadah",
  "content": "Konten postingan baru...",
  "author": "User"
}
```

**Response:**
```json
{
  "id": 3,
  "title": "Judul Baru",
  "category": "Ibadah",
  "content": "Konten postingan baru...",
  "date": "2024-01-01T00:00:00.000Z",
  "author": "User"
}
```

#### 4. Update Post
```http
PUT /api/posts/:id
Content-Type: application/json

{
  "title": "Judul Updated",
  "category": "Akhlak",
  "content": "Konten yang sudah diupdate..."
}
```

#### 5. Delete Post
```http
DELETE /api/posts/:id
```

**Response:**
```json
{
  "message": "Post deleted successfully",
  "deletedPost": {
    "id": 1,
    "title": "Judul Postingan"
  }
}
```

### Error Responses
```json
{
  "error": "Post not found",
  "status": 404
}
```

## 📱 Responsive Design

Aplikasi ini fully responsive dan mendukung:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎨 Kustomisasi

### Mengubah Warna Tema
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f39c12;
  --text-color: #2c3e50;
}
```

### Menambah Kategori Baru
```html
<option value="Doa">Doa-Doa</option>
<option value="Zakat">Zakat</option>
```

### Mengubah Quote Islam
```javascript
<div class="islamic-quote">
    "Quote Islam baru di sini..." - Sumber
</div>
```

## 🔄 Integrasi dengan Backend

Sesuaikan api.js atau koneksi dengan backend nyata jika ingin data persisten

Pastikan endpoint API sesuai dokumentasi

Bisa digunakan untuk membuat mobile app atau aplikasi lain yang memerlukan konten Islami

## Demo

https://islamic-blog-nine.vercel.app/

## 🤝 Kontribusi

    Fork repository

    Buat branch fitur (git checkout -b fitur-baru)

    Commit perubahan (git commit -m 'Tambahkan fitur')

    Push ke branch (git push origin fitur-baru)

    Buat Pull Request

