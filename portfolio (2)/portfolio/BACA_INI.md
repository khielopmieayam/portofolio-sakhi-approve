# Portofolio — Muhammad Sakhi Tholabi

Website portofolio simple & elegan dengan navbar melayang di bawah (dock style),
terinspirasi dari animasi story pada video contoh (foto miring ala polaroid yang
scroll otomatis).

## Struktur folder

```
portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── profile.jpg              ← foto profil (bagian Profil)
    ├── story/
    │   ├── story-1.jpg  ... story-15.jpg   ← 15 foto story
    └── sertifikat/
        ├── sert-1.jpg ... sert-6.jpg       ← 6 foto sertifikat/prestasi
```

Semua gambar saat ini masih **placeholder** (kotak gradasi bertuliskan nama file).
Tinggal timpa (replace) file dengan nama yang **sama persis** memakai fotomu sendiri.

**Formatnya sudah PNG** (disesuaikan karena kebanyakan foto dari HP/WA itu PNG),
jadi kamu tinggal simpan foto asli kamu lalu kasih nama yang sama persis —
**tidak perlu convert atau rename ke .jpg lagi.**

## Cara mengganti foto

1. Simpan / download foto kamu dari WA (klik kanan foto → Save As, atau
   klik ikon download) ke folder di komputer, jangan copy-paste ke VS Code.
2. Foto profil → ganti `assets/profile.png` (disarankan rasio potret ~4:5).
3. Foto story → ganti `assets/story/story-1.png` sampai `story-15.png`
   (disarankan rasio potret ~3:4, foto candid/bebas — makin variatif makin bagus
   karena akan tampil miring seperti polaroid).
4. Foto sertifikat → ganti `assets/sertifikat/sert-1.png` sampai `sert-6.png`
   (disarankan rasio landscape ~4:3, hasil scan/foto sertifikat).
5. Pindahkan/drag foto yang sudah di-rename ke folder `assets` lewat
   **File Explorer / Finder** (bukan lewat VS Code), pilih **Replace**
   saat diminta timpa file lama.

Tidak perlu edit kode sama sekali — cukup timpa filenya dengan nama yang sama.

> Kalau fotomu kebetulan `.jpg`, tetap bisa dipakai — cukup ganti akhiran
> namanya jadi `.png` juga (isi filenya tidak masalah beda dari nama,
> browser tetap bisa membacanya).

## Mengganti data pribadi (kontak)

Website ini sudah **selesai 100%** — kamu hanya perlu dua hal:
1. Timpa foto di folder `assets/` (lihat di atas).
2. Isi 4 kontak di bagian Contact (karena saya belum tahu akun asli kamu).

Caranya gampang: buka `index.html` dengan Notepad / text editor apa saja,
tekan **Ctrl+F** (cari), lalu cari kata **`GANTI_`** satu per satu dan
timpa dengan data aslimu. Ada 4 titik yang perlu diganti:

| Cari kata ini | Ganti dengan | Contoh |
|---|---|---|
| `GANTI_USERNAME_IG` (muncul 2x) | username Instagram kamu | `sakhi.tholabi` |
| `GANTI_EMAIL@gmail.com` (muncul 2x) | alamat Gmail kamu | `sakhi.tholabi@gmail.com` |
| `GANTI_NOMOR_WA` (muncul 2x) | nomor WA tanpa angka 0 di depan | `81234567890` |
| `GANTI-NOMOR-WA` (teks tampilan, 1x, boleh format bebas) | nomor WA yang tampil di layar | `812-3456-7890` |
| `GANTI_USERNAME_TIKTOK` (muncul 2x) | username TikTok kamu | `sakhi.tholabi` |

Setelah semua `GANTI_` sudah ditimpa, tinggal simpan filenya — selesai,
tidak ada lagi yang perlu diedit.

- **Skill level** (panjang progress bar, opsional): cari `data-level="90"` dst di
  bagian `<!-- ============ SKILLS ============ -->`, angka 0–100 mewakili
  persentase penguasaan. Boleh dibiarkan seperti sekarang.

## Cara membuka / meng-online-kan

- **Coba lokal**: klik dua kali `index.html`, langsung terbuka di browser.
- **Publikasikan gratis**: upload seluruh folder ini ke
  [Netlify Drop](https://app.netlify.com/drop), [Vercel](https://vercel.com),
  atau [GitHub Pages](https://pages.github.com) — situs langsung online.

## Fitur yang sudah ada

- Navbar bawah melayang (dock) dengan indikator aktif yang bergerak mulus
  mengikuti section yang sedang dilihat.
- Section **Story**: galeri foto auto-scroll horizontal tak berhenti,
  tiap foto miring acak seperti polaroid, berhenti sejenak saat kursor
  diarahkan ke atasnya (hover).
- Animasi *reveal* saat scroll (elemen muncul halus dari bawah).
- Progress bar skill yang mengisi otomatis saat terlihat di layar.
- Lightbox: klik foto sertifikat untuk melihat versi besar.
- Latar belakang gradasi ambient yang bergerak pelan.
- Sepenuhnya responsif untuk HP, tablet, dan desktop.
- Menghormati pengaturan "reduced motion" di perangkat (animasi otomatis
  dikurangi untuk pengguna yang sensitif terhadap gerakan).

Selamat pakai! 🎓
