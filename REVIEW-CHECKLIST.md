# Planingin — Review Checklist

Gunakan checklist ini untuk mencatat gap desain dan UX sebelum diterapkan ke aplikasi CI4. Tandai status sebagai `OK`, `Perlu revisi`, atau `Belum diputuskan`.

## 1. Landing page

- [ ] Headline dan deskripsi menjelaskan kegunaan Planingin dalam beberapa detik.
- [ ] CTA utama cukup jelas dan tidak bersaing dengan CTA sekunder.
- [ ] Preview dashboard cukup representatif terhadap aplikasi sebenarnya.
- [ ] Urutan section menjawab kebutuhan calon pengguna, bukan sekadar dekorasi.
- [ ] Teks, navigasi, footer, dan link kebijakan sudah final.
- [ ] Tampilan light/dark mode tetap memiliki kontras yang baik.
- [ ] Palet landing page terasa cerah, tenang, dan tetap memiliki hierarki visual.
- [ ] Section CTA yang berwarna mint tetap nyaman dibaca dan tombolnya mudah dikenali.

Catatan:

> Isi temuan di sini.

## 2. Navigasi dan struktur aplikasi

- [ ] Nama menu mudah dimengerti.
- [ ] Pengguna selalu tahu sedang berada di halaman mana.
- [ ] Mobile sidebar mudah dibuka dan ditutup.
- [ ] Pada desktop, kursor di atas sidebar membuat scroll wheel/trackpad menggulir navigasi sidebar, bukan konten utama.
- [ ] Saat isi sidebar melebihi tinggi layar, item paling bawah seperti Pengaturan dan profil tetap bisa dijangkau.
- [ ] Warna sidebar berbeda secara jelas namun harmonis dengan area konten utama.
- [ ] Quick-add task mudah ditemukan.
- [ ] Jumlah/badge tidak menimbulkan interpretasi yang salah.

Catatan:

> Isi temuan di sini.

## 3. Task workflow

- [ ] Menambah tugas membutuhkan field sesedikit mungkin.
- [ ] Mengedit tugas mudah ditemukan dan tidak menghilangkan data.
- [ ] Toggle selesai memberikan feedback yang tepat.
- [ ] Prioritas dan status mudah dibedakan tanpa bergantung hanya pada warna.
- [ ] Deadline tanpa tanggal, hari ini, mendatang, dan overdue ditampilkan dengan jelas.
- [ ] Filter dan pencarian dapat digunakan bersamaan secara masuk akal.
- [ ] Kanban dan List menyajikan informasi yang tepat pada layar kecil.
- [ ] Hapus/restore memiliki konfirmasi dan affordance yang jelas.
- [ ] Empty state memberi langkah berikutnya yang sesuai.

Catatan:

> Isi temuan di sini.

## 4. Project dan calendar

- [ ] Arti progres proyek mudah dipahami.
- [ ] Proyek tanpa tugas memiliki state yang tepat.
- [ ] Aturan ketika proyek dihapus sudah ditentukan.
- [ ] Kalender cukup mudah dibaca pada mobile.
- [ ] Memilih tanggal memperlihatkan agenda untuk tanggal tersebut.
- [ ] Timezone tidak menggeser due date.

Catatan:

> Isi temuan di sini.

## 5. Insights dan data

- [ ] Definisi completion rate jelas.
- [ ] Periode statistik ditunjukkan secara konsisten.
- [ ] Task selesai tidak terhitung dua kali.
- [ ] Grafik memiliki ringkasan atau label tekstual.
- [ ] Data demo tidak dikira sebagai data nyata.

Catatan:

> Isi temuan di sini.

## 6. Tema, responsive, dan aksesibilitas

- [ ] Semua komponen konsisten pada light dan dark mode.
- [ ] Fokus keyboard terlihat.
- [ ] Form mempunyai label dan validasi yang jelas.
- [ ] Modal mempertahankan alur keyboard dan dapat ditutup dengan Escape.
- [ ] Reduced-motion preference dihormati.
- [ ] Tidak ada horizontal overflow di 320–375 px, 390 px, tablet, dan desktop.
- [ ] Ukuran target sentuh nyaman digunakan.
- [ ] Warna status memiliki teks/ikon pendamping.

Catatan:

> Isi temuan di sini.

## 7. Perilaku yang belum ada / perlu diputuskan

- [ ] Apakah task mendukung label, subtask, komentar, lampiran, dan reminder?
- [ ] Apakah proyek memiliki halaman detail terpisah?
- [ ] Apakah task dapat diulang (recurring task)?
- [ ] Apakah pengguna membutuhkan sinkronisasi antar perangkat?
- [ ] Perilaku task tanpa deadline sudah disepakati?
- [ ] Kebijakan arsip, Trash, restore, dan penghapusan permanen ditentukan?
- [ ] Apakah perlu notifikasi email/browser?
- [ ] Apakah ada kebutuhan kolaborasi/multi-user di luar personal workspace?

Catatan:

> Isi temuan di sini.

## 8. Ringkasan keputusan review

**Prioritas P0 — menghambat penggunaan:**

> Isi di sini.

**Prioritas P1 — penting sebelum rilis:**

> Isi di sini.

**Prioritas P2 — penyempurnaan:**

> Isi di sini.

**Keputusan yang perlu disepakati:**

> Isi di sini.

## Tambahan: Autentikasi demo dan GitHub Pages

- [ ] Klik **Masuk** di navbar dan pastikan layar masuk terbuka tanpa navigasi ke `/login`.
- [ ] Klik **Buat akun demo**, pastikan layar daftar terbuka di halaman statis tanpa `/register`.
- [ ] Coba konfirmasi kata sandi yang berbeda; pesan validasi harus muncul.
- [ ] Coba pendaftaran demo yang valid; preview harus membuka workspace dan menampilkan nama demo.
- [ ] Pastikan form menginformasikan bahwa autentikasi bukan server sungguhan dan kata sandi tidak disimpan.
- [ ] Uji file setelah dipublikasikan di alamat GitHub Pages yang memakai subpath repository.
- [ ] Pastikan `index.html`, `styles.css`, `app.js`, `favicon.png`, dan `assets/planingin-mark.png` diunggah pada struktur direktori yang dijelaskan dalam README.
