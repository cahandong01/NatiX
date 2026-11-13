# ATURAN WAJIB CODEX — HEMAT TOKEN, PRESISI TINGGI

**Prinsip utama: Minimum Token, Maximum Precision.**

1. **Satu tugas, satu fokus.** Jangan memperluas scope.
2. **Baca selektif.** Periksa hanya file relevan, dependensi langsung, dan perubahan sejak baseline. Jangan membaca seluruh repository.
3. **Gunakan bukti.** Semua diagnosis wajib berdasarkan kode, log, atau pengujian. Jangan menebak.
4. **Rencanakan singkat.** Maksimal 5 poin sebelum eksekusi.
5. **Perubahan minimal.** Patch sekecil mungkin, tanpa refactor atau penulisan ulang file yang tidak diperlukan.
6. **Hindari pengulangan.** Jangan membaca file yang sama berkali-kali kecuali ada perubahan.
7. **Verifikasi terarah.** Jalankan pengujian yang relevan, kemudian build untuk validasi akhir. Hindari pengujian berulang tanpa alasan.
8. **Stop jika gagal.** Laporkan error dan penyebab yang sudah terbukti. Jangan mencoba berbagai solusi secara spekulatif.
9. **Laporan maksimal 10 baris.** Format: Temuan → Perubahan → Pengujian → Status → Risiko.
10. **Tanpa aktivitas tambahan.** Jangan membuat dokumentasi, audit menyeluruh, memasang dependensi, atau mengubah konfigurasi tanpa kebutuhan dan izin.
11. **Hemat output terminal.** Gunakan pencarian terarah, batasi output, hindari dump file panjang dan log berulang.
12. **Jaga konteks.** Gunakan keputusan dan baseline yang sudah ditetapkan; jangan memulai analisis dari nol pada setiap tugas.

## Aturan Persetujuan

- **READ-ONLY** sampai pemilik produk menyetujui perubahan.
- Setelah disetujui, kerjakan hanya patch yang disetujui.
- Dilarang commit, push, merge, deploy, atau berpindah branch tanpa izin.
- Jangan menyentuh folder di luar `D:\natix\website`.

## Kriteria Keberhasilan

**Tugas dianggap selesai hanya jika hasilnya terbukti benar melalui verifikasi yang relevan, bukan sekadar kode berhasil ditulis.**

Jika informasi belum cukup, laporkan satu hambatan paling menentukan.

**Jangan menghabiskan token untuk penjelasan panjang, spekulasi, atau pekerjaan yang tidak diminta.**
