# Handoff Website NatiX — lanjut halaman Solusi

Tanggal: 12 November 2026. Bahasa komunikasi: Indonesia, singkat, konkret.

## Tujuan sesi berikutnya

User ingin mulai halaman Solusi, setelah menyelesaikan halaman Platform dan perapian footer global. Diskusikan konsep/struktur Solusi dahulu, lalu implementasikan per section sesuai persetujuan. Jangan menganggap pembukaan sesi sebagai izin mengubah seluruh situs.

## Lokasi dan sumber wajib

- Repo website: D:\natix\website
- Branch kerja: website-v2. Jangan berpindah branch atau menyentuh main.
- Baca D:\natix\website\dokumentasi\AGENTS.MD.
- Baca D:\natix\website\dokumentasi\Pedoman NatiX Website, Konten, dan Merek.md.
- Referensi Solusi yang tersedia saat handoff: D:\natix\website\dokumentasi\halamansolusi.png. Lihat gambarnya, jangan sekadar membaca nama file.
- Referensi lain: beranda.png, halaman platform.png, halaman natix family.png, halamanlayanan.png, halamantentang.png dalam folder yang sama.
- Instruksi lintas sesi: C:\Users\T470s\Documents\Codex\AGENTS.md.
- Frontend produk: D:\natix\frontend. Baca terarah bila diperlukan untuk memahami proses; jangan mengubahnya.
- Halaman Solusi saat handoff: src/pages/Solusi.tsx, masih kerangka PageHero singkat dengan CTA Minta Demo.

## Cara bekerja yang sudah diputuskan

1. Satu section dikerjakan dan direview dahulu sebelum berikutnya. User boleh meminta diskusi tanpa coding; hormati itu.
2. Satu komponen TSX dan satu CSS per section di src/components. File halaman hanya merangkai komponen. Ikuti pola Beranda/Platform; jangan gabungkan semua section dalam satu file besar.
3. User melarang test dan build oleh Codex; user yang menjalankannya. Jangan menjalankan server lokal. Pembacaan kode/aset secara terarah boleh. Jangan mengklaim verifikasi visual atau fungsional jika belum dilakukan.
4. User menjalankan semua commit/push sendiri melalui PowerShell. Codex menyiapkan kelompok file dan perintah bila diminta. Jangan commit/push/merge/deploy/berpindah branch sendiri.
5. Pesan commit dan ringkasan berbahasa Indonesia; prefix teknis tetap, misalnya feat(platform): atau style(footer):.
6. Website, platform, dan mobile dikerjakan paralel. User meminta memahami alur/arah produk dan menganggap cakupan yang disepakati selesai untuk penulisan website. Jangan membatasi narasi hanya karena implementasi berjalan paralel. Tetap jangan mengarang alur atau kemampuan tanpa dasar.
7. Jangan mengubah section yang sudah diterima tanpa alasan spesifik dan izin. Jangan berganti-ganti rekomendasi atau memaksakan revisi ketika substansi sudah cukup.
8. Dokumen pedoman/agen/handoff tidak masuk GitHub. Jangan git add . atau membersihkan file untracked tanpa instruksi.

## Identitas visual yang terkunci

- Fraunces untuk heading; Inter untuk isi. Heading section desktop 2rem, layar <=991px 1.75rem; hero mengikuti ukuran hero Beranda.
- Eyebrow kapital, 0.875rem, weight 600, line-height 1.4, letter-spacing 0.08em; tanpa garis dekoratif.
- Warna dari token yang ada: biru #0056b3, aksen #2563eb, navy #0b1f3a. Jangan membuat identitas visual baru.
- Konten maksimum 1240px. Gutter horizontal clamp(20px, 3vw, 40px), section biasa padding-block 60px, gap kolom desktop 48px. CTA penutup pengecualian: padding 32px.
- Tidak ada garis pemisah antarsection. Border panel internal boleh bila diminta.
- Komponen Reveal dan transisi Platform 0.8s, translateY 30px, menghormati prefers-reduced-motion.
- User menolak perombakan semua aset ke 3D. Jangan melanjutkan percobaan tersebut. Ikuti aset/layout yang sudah diterima; ilustrasi gedung di section modul adalah pengecualian spesifik yang disetujui.
- Jangan mengartikan enterprise/premium sebagai banyak efek, kartu generik, glow/neon, atau ilustrasi dashboard berulang.
- Gambar harus menyatu dengan latar, tidak menyisakan huruf hasil crop atau bidang persegi. Pakai transparansi bila perlu. Gambar raster AVIF/WebP responsif, dimensi tetap, lazy kecuali layar pertama. Pertahankan asset versioning.
- Referensi adalah dasar komposisi, bukan izin membuat alur desain sendiri. Pola dan styling NatiX mengatasi dekorasi dari referensi.

## Peran masing-masing halaman

- Beranda: pengenalan, manfaat, alasan memakai NatiX.
- Platform: pengenalan dan kemampuan produk. Tidak semua section harus menjabarkan fitur; peta cakupan juga sah sebagai product knowledge.
- Solusi: kebutuhan dan kasus penggunaan konkret menurut jenis lembaga; bukan mengulang konsep keterhubungan atau katalog modul Platform.
- Kerangka Solusi dari pedoman: Sekolah; Pesantren & Boarding; Yayasan multi lembaga; penutup/CTA.
- Untuk Solusi, mulai dari pekerjaan/masalah lapangan, tunjukkan bagaimana alur dan modul NatiX menanganinya. Konfirmasi hubungan alur melalui kode/arah user bila perlu, tanpa menciptakan aturan bisnis.
- Jangan langsung menggunakan semua naskah pada ilustrasi sebagai konten final. Ilustrasi menjadi referensi visual; pedoman dan produk menjadi dasar substansi.

## Platform: keadaan akhir yang diterima

Urutan pada src/pages/Platform.tsx:
1. PlatformHero.tsx + CSS: heading "Kelola yayasan, sekolah, dan pesantren" dengan aksen "dalam satu sistem". Subheading menyebut 14 modul. Diagram rantai nilai dan CTA dipertahankan.
2. PlatformModules.tsx + CSS: heading/eyebrow/pengantar di tengah. 14 ikon dan nama tanpa deskripsi di kiri (7 kolom x 2 baris desktop), gedung NatiX saja di kanan. Gedung dibesarkan 10%, kartu ikon min-height 104px. Ringkasan integrasi di bawah. User menolak percobaan 14 kartu deskripsi penuh; sudah direstore. Jangan mengulang usulan itu.
3. PlatformExecutive.tsx + CSS: heading "Dashboard pimpinan untuk seluruh lembaga". Narasi pilihan yayasan/satu lembaga, empat poin data pendidikan/keuangan/operasional/perbandingan. Ilustrasi dashboard3-tight tetap.
4. PlatformInsights.tsx + CSS: narasi kehadiran, nilai, pembinaan, kitab, tahfidz, pola dan tindak lanjut dipertahankan sesuai keputusan user. Aset education-insights-transparent-v3; jangan dipersempit menjadi akademik dan kehadiran saja.
5. PlatformMobile.tsx + CSS: dua ponsel kiri, narasi kanan. Pengantar terbaru: catatan kehadiran, hasil belajar, pembinaan, tagihan terhubung ke NatiX Family; wali memantau perkembangan dan kewajiban sesuai hak akses. CTA /family.
6. PlatformFoundation.tsx + CSS: eyebrow/heading/pengantar center di atas, diagram kiri dan empat poin kanan dalam dua panel ber-border berlapis, gradasi lembut, shadow tipis. Bukan tiga kolom lagi.
7. PlatformClosing.tsx + CSS: CTA Minta Demo, warna biru mengikuti Beranda, padding 32px, margin heading 8px, gap layar kecil 20px.
- src/pages/Platform.css hanya animasi bersama, bukan CSS semua section.

## Empat belas modul dan batas proses

1. WhatsApp: kampanye, pesan manual, template, riwayat; penerima dari data wali/siswa/santri/pegawai.
2. PPDB: gelombang, pendaftaran online/operator, dokumen, seleksi, keputusan, daftar ulang, resmi menjadi siswa/santri. Terhubung ke data peserta didik dan tagihan.
3. Akademik: siswa, tahun ajaran, kelas/rombel, jadwal, kehadiran, nilai/rapor, mutasi, alumni.
4. Pesantren: santri/ustadz, program/jenjang/kurikulum, kelas diniyah, halaqah kitab, tahfidz, capaian/penilaian/rapor.
5. Ketertiban: izin, pelanggaran, ta’zir, rekap.
6. Keuangan: anggaran, BOS, dana kelas, tagihan, pembayaran, pemasukan/pengeluaran, rekening/kas, laporan.
7. SDM: pegawai, penugasan mengajar, kehadiran, cuti/izin, penggajian, kinerja.
8. Inventaris dan Aset: barang/stok, stock opname, aset, perpindahan/peminjaman/kondisi, penyusutan, laporan.
9. Asrama: gedung/kamar/kapasitas, hunian/perpindahan, biaya.
10. Dapur dan Makan: menu, regu/kelompok dengan anggota santri/staf, jadwal/sesi, estimasi porsi. Jangan otomatis menganggap seluruh anggota regu sebagai juru masak.
11. Perpustakaan: koleksi/eksemplar, anggota, peminjaman, perpanjangan/pengembalian, kondisi buku.
12. Transportasi: kendaraan, sopir dari data SDM, rute, penumpang, biaya, tagihan, laporan.
13. Koperasi: kasir, produk/stok, pembelian, transaksi, kas/setoran, laporan.
14. Payment Gateway: kanal pembayaran online dan status transaksi terkait tagihan. Jangan disamakan dengan seluruh administrasi Keuangan.
- Jangan mengikuti pengelompokan enam domain lama sebagai jumlah modul. LMS tidak ditampilkan.
- Sumber pembacaan: src/components/layout/sidebar/menu-manifest.ts, halaman/komponen PPDB, komunikasi, kontrak tipe inventory/library/makan/asrama/transportasi/finance dan dashboard pada D:\natix\frontend. Tidak membaca seluruh frontend atau menjalankan audit fungsional.

## Footer dan CTA Beranda

- Footer.tsx + Footer.css adalah komponen global yang baru dipoles. Aturan footer lama dipindahkan dari src/styles/components.css; section lainnya di file itu dipertahankan.
- Navy solid, logo putih monokrom tanpa kotak, empat kolom: merek, Produk, Perusahaan, Hubungi NatiX.
- Narasi persis: "Platform ERP Enterprise terintegrasi untuk pengelolaan sekolah, pesantren, dan lembaga pendidikan lainnya."
- SEMUA ikon sosial tetap terlihat meski href kosong. Saat kosong berupa placeholder; otomatis menjadi tautan ketika URL di SITE.socials dalam src/site.ts diisi. User secara khusus melarang menyembunyikan ikon kosong.
- Kontak WhatsApp dan Sleman, Yogyakarta; akses demo memakai SITE.demoUrl. Jangan mengarang email/akun/alamat.
- Footer terakhir dirapatkan: padding 40px 20px, logo 176px, spacing vertikal lebih kecil.
- CTA Beranda dirampingkan melalui override src/styles/HomePolish.css: padding 32px, margin heading 8px, gap layar kecil 20px. Jangan hanya mengubah HomeClosing.css karena ditimpa override.

## Status Git dan file sisa

- User sudah commit dan push sendiri ke origin/website-v2. Bukti output user: 658aaac..923071a, website-v2 -> website-v2.
- Tiga kelompok yang disiapkan: halaman Platform; footer global; CTA Beranda. Commit/push dilaporkan berhasil oleh user; tidak perlu mengulang.
- git status user sesudah push menyisakan ?? dokumentasi/, aset percobaan dashboard3 non-tight, education-insights-reference, SVG percobaan v1/v2, campus lama/satin/icons 3D, serta FoundationBenefits.tsx/.css.
- File sisa itu sengaja tidak dimasukkan. Jangan dianggap perubahan Solusi, jangan dihapus/commit otomatis. FoundationBenefits sudah untracked sebelum pekerjaan sesi ini.
- Aset aktif Platform yang telah disertakan: dashboard3-tight AVIF/WebP; education-insights-transparent-v3 AVIF/WebP; platform-modules-building-v1 AVIF/WebP; aset gbrmoobile1 sudah tracked sebelumnya.
- Tidak ada test/build akhir yang dijalankan sesuai instruksi user. Jangan mengklaim semua pemeriksaan lulus.

## Langkah awal sesi Solusi

Baca handoff dan sumber wajib, lihat halamansolusi.png, baca Solusi.tsx serta pola komponen Beranda/Platform yang relevan. Sajikan usulan section Solusi yang spesifik terhadap kebutuhan lembaga. Diskusikan dulu sebelum patch pertama; jangan merombak Platform/footer yang sudah diterima.
