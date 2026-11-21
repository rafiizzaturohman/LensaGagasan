# Lensa Gagasan

Publikasi esai editorial berbasis web bertema *Tiga Cara Menyalakan Harapan* untuk showcase **IQ-STEAM** di **SMP Plus Insan Qinthara**, menampilkan kisah dan refleksi tiga tokoh inspiratif: **B.J. Habibie**, **Ibn Al-Haitsam (Alhazen)**, dan **Susi Pudjiastuti**.

## Fitur Utama

- **Header Artikel & Tipografi Editorial**: Menampilkan kategori/edisi, judul utama, ringkasan, serta informasi penulis dan tanggal terbit.
- **Bilangan Scroll Progress (Desktop)**: Indikator progres membaca tipis di bagian bawah navbar saat halaman di-scroll pada tampilan desktop (`md` ke atas).
- **Menu Navigasi Tengah (`#middle-link-menu`)**: Pintasan cepat ke tiap bagian tokoh (`01. B.J. Habibie`, `02. Ibn Al-Haitsam`, `03. Susi Pudjiastuti`) yang di-render dinamis via JavaScript.
- **Sticky Table of Contents (`#toc-list`)**: Daftar isi *"Dalam Tulisan Ini"* yang menempel saat di-scroll di desktop dan menyesuaikan tampilan di layar kecil.
- **Konten Biografi & Refleksi Dinamis**: Bagian tokoh, kutipan, kartu *"Pelajari Kunci"*, serta bagian simpulan (*"Tiga jejak, satu arah"*) di-render dari struktur data array agar mudah diperbarui tanpa mengulang markup HTML.
- **Footer Responsif**: Tata letak adaptif yang menumpuk rapi di layar kecil dan sejajar horizontal di layar yang lebih lebar.

## Struktur Proyek

```text
.
├── img/
│   ├── icon.png
│   └── tokoh/
│       ├── BJ Habibie.jpg
│       ├── Ibn_al-Haytham.png
│       └── SUSI-PUDJIASTUTI.jpg
├── src/
│   ├── input.css
│   └── output.css
├── index.html
├── package.json
├── .gitignore
└── README.md