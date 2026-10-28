# Planingin — Static Preview

**Planingin** adalah preview statis interaktif dari aplikasi manajemen tugas dan proyek. Paket ini mempertahankan arah visual yang sudah direvisi: logo Planingin, landing page mint/ivory, sidebar sage yang dapat di-scroll secara mandiri, workspace responsif, serta mode terang dan gelap.

> **Catatan penting:** paket ini dibuat untuk preview UI/UX dan publikasi statis melalui GitHub Pages. Ini bukan pengganti backend CodeIgniter 4. Login dan registrasi hanya simulasi browser; tidak ada akun yang benar-benar dibuat, tidak ada autentikasi server, dan tidak ada database.

## 1. Isi paket

```text
Planingin-static-preview/
├── index.html                 # Landing page, layar masuk/daftar, dan workspace
├── styles.css                 # Seluruh styling, responsive layout, light/dark mode
├── app.js                     # Interaksi dan data demo di browser
├── favicon.png                # Favicon Planingin
├── assets/
│   └── planningin-mark.png    # Logo/emblem Planingin
├── .nojekyll                  # Menonaktifkan pemrosesan Jekyll untuk paket statis
├── README.md                  # Panduan ini
└── REVIEW-CHECKLIST.md        # Daftar pemeriksaan UI/UX
```

Tidak diperlukan Node.js, npm, PHP, Composer, MySQL, build step, maupun API eksternal.

## 2. Menjalankan secara lokal

### Cara paling sederhana

1. Ekstrak ZIP.
2. Buka folder `Planingin-static-preview`.
3. Klik dua kali `index.html` atau buka file tersebut lewat Chrome, Edge, Firefox, atau Safari.
4. Klik **Masuk** atau **Buat akun demo** untuk melihat alur autentikasi tiruan. Klik **Jelajahi workspace** untuk langsung membuka dashboard contoh.

Jika browser membatasi fitur tertentu saat file dibuka langsung, jalankan server statis lokal. Apabila Python sudah terpasang, buka terminal pada folder tersebut dan jalankan:

```bash
python -m http.server 8000
```

Lalu buka <http://localhost:8000/>. Hentikan server dengan `Ctrl+C`.

## 3. Deploy ke GitHub Pages

### A. Buat repository

1. Login ke <https://github.com>.
2. Buka <https://github.com/new>.
3. Isi **Repository name**, contoh `planingin-preview`.
4. Pilih **Public** jika ingin website dapat diakses siapa pun lewat tautan GitHub Pages.
5. Klik **Create repository**.

Repository publik berarti file website juga dapat dilihat publik. Jangan menambahkan password, token, data pribadi, atau kredensial aplikasi ke paket ini.

### B. Unggah file ke root repository

1. Unduh dan ekstrak paket `Planingin-static-preview.zip` di komputer.
2. Buka folder hasil ekstrak `Planingin-static-preview`.
3. Di repository GitHub, pilih **Add file → Upload files**.
4. Unggah **isi folder** tadi, bukan ZIP dan bukan folder induk `Planingin-static-preview`.
5. Pastikan `index.html` terlihat di halaman utama repository. Jangan meletakkannya di subfolder tambahan.
6. Isi pesan commit, misalnya `Publish Planingin static preview`, lalu klik **Commit changes**.

Struktur root repository yang benar kurang lebih seperti ini:

```text
repository root/
├── index.html
├── styles.css
├── app.js
├── favicon.png
├── .nojekyll
├── assets/
│   └── planningin-mark.png
├── README.md
└── REVIEW-CHECKLIST.md
```

### C. Aktifkan GitHub Pages

1. Buka repository, lalu pilih **Settings**.
2. Pada menu kiri, buka **Pages** di bagian **Code and automation**.
3. Di **Build and deployment**, atur **Source** ke `Deploy from a branch`.
4. Pilih branch `main` dan folder `/(root)`.
5. Klik **Save**.
6. Tunggu proses publikasi selesai. Setelah itu, alamat website akan ditampilkan pada halaman **Settings → Pages**.

Untuk repository bernama `planingin-preview`, URL biasanya berbentuk:

```text
https://NAMA-USER.github.io/planingin-preview/
```

Ganti `NAMA-USER` dengan username GitHub Anda. Jika nama repository adalah `NAMA-USER.github.io`, URL-nya berada pada root domain `https://NAMA-USER.github.io/`.

Dokumentasi resmi GitHub:

- Membuat situs GitHub Pages: <https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>
- Mengatur sumber publikasi: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

### D. Memperbarui website setelah perubahan

1. Edit `index.html`, `styles.css`, atau `app.js` pada salinan lokal.
2. Unggah file yang berubah ke repository dengan **Add file → Upload files**, atau edit file melalui antarmuka GitHub.
3. Commit perubahan pada branch yang dipakai GitHub Pages.
4. Tunggu sampai proses deployment selesai, lalu refresh halaman website. Jika versi lama masih terlihat, coba hard refresh atau bersihkan cache browser.

## 4. Fitur yang tersedia dalam preview

- Landing page Planingin dengan logo dan slogan **Rencanakan • Kerjakan • Capai**.
- Layar masuk dan daftar demo, validasi form di browser, konfirmasi kata sandi saat pendaftaran, dan pesan reset kata sandi demo.
- Workspace dashboard dengan ringkasan tugas, proyek, prioritas, dan aktivitas contoh.
- Menambah, mengedit, menyelesaikan, menyaring, mencari, serta memindahkan tugas ke Trash dan memulihkannya.
- Tampilan daftar dan Kanban; kartu Kanban dapat dipindahkan dengan drag-and-drop.
- Halaman Hari Ini, Upcoming, kalender bulanan, tugas selesai, Trash, proyek, insight, dan pengaturan.
- Tema terang, gelap, dan ikuti preferensi sistem. Preferensi tema disimpan di `localStorage` jika browser mengizinkannya.
- Sidebar dengan area scroll mandiri agar scroll navigasi tidak ikut menggeser konten utama.
- Layout responsif untuk desktop, tablet, dan layar ponsel; pencarian cepat (`Ctrl/Cmd + K`) serta shortcut tambah tugas (`N`) ketika workspace terbuka.

## 5. Batasan preview statis

| Fitur | Perilaku di preview |
|---|---|
| Login/registrasi | Hanya mensimulasikan alur UI. Tidak memverifikasi akun dan tidak membuat akun sungguhan. |
| Kata sandi | Tidak disimpan atau dikirim ke server; form hanya untuk demonstrasi alur. |
| Reset kata sandi/email | Tidak mengirim email. Tombol hanya menampilkan penjelasan. |
| Tugas dan proyek | Data contoh berada di memori halaman; perubahan biasanya kembali ke data awal setelah halaman dimuat ulang. |
| Tema | Preferensi tema dapat tersimpan pada browser melalui `localStorage`. |
| Statistik/aktivitas | Sebagian angka merupakan data contoh, bukan laporan backend. |
| Akses multi-pengguna | Tidak tersedia; setiap pengunjung membuka preview yang berjalan di browser masing-masing. |
| Proteksi data | Tidak ada sesi server, otorisasi, database, maupun penyimpanan aman. Jangan gunakan untuk data pekerjaan sungguhan. |

Untuk login, registrasi, pemulihan kata sandi, sinkronisasi data, dan keamanan akun yang benar-benar berfungsi, gunakan aplikasi CodeIgniter 4 beserta database MySQL/MariaDB. GitHub Pages hanya melayani aset statis; ia tidak menjalankan PHP atau database.

## 6. Troubleshooting GitHub Pages

- **Halaman 404:** pastikan GitHub Pages sudah aktif, branch/folder publikasi benar, dan `index.html` berada langsung di root sumber publikasi.
- **Halaman tampil tanpa styling:** pastikan `styles.css` berada satu tingkat dengan `index.html` dan kapitalisasi nama file persis sama.
- **Logo hilang:** pastikan `assets/planingin-mark.png` ikut diunggah dengan struktur folder yang sama.
- **Perubahan belum tampil:** periksa status deployment di tab **Actions** atau halaman **Settings → Pages**, kemudian refresh tanpa cache.
- **Tautan tidak cocok dengan backend:** preview statis tidak memanggil route `/login` atau `/register` dari CI4. Form autentikasi berada di dalam `index.html`, sehingga dapat dipakai pada URL subpath GitHub Pages.

## 7. Checklist sebelum publikasi

- Buka `index.html` lokal dan coba seluruh CTA landing page.
- Uji pergantian tab Masuk/Daftar, validasi form, dan jalur masuk ke workspace demo.
- Uji navigasi sidebar, tambah/edit/selesaikan/hapus/pulihkan tugas, Kanban, kalender, dan pembuatan proyek.
- Uji light mode serta dark mode.
- Uji lebar ponsel sekitar 360–390 px dan desktop.
- Pastikan file logo, favicon, `styles.css`, dan `app.js` tersedia di root atau path masing-masing.
- Baca `REVIEW-CHECKLIST.md` untuk pemeriksaan tambahan.
