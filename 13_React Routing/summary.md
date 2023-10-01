Kesimpulan

Router merupakan modul dalam React yang berfungsi untuk melakukan navigasi pada SPA (Single page Aplication).
MPA (Multi page Aplication) adalah jenis aplilasi website dimana perlu mbuat ulang seluruh halaman setiap kali membuat perintah baru.
SPA (Single page Aplication) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang
terjadi dalam aplikasi tersebut

Parameter URL adalah suatu parameter yang nilainya ditetepakan dinamis di URL halaman.

Hook Routing Pada React
1.useHistory memberikan kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi.
Contohnya yaitu length, go, goBack, goForward, Push.
2.useParams mengambalikan objek pasangan kunci/nilai parameter URL.Digunakan untuk mengakses match.params dari <Route> saat ini.
3.useRouteMatch mecoba mencocokan URL saat ini dengan cara yang sama seperti <Route>.Digunakan untuk mendapatkan akses data kecocokan tanpa benar-benar merender.
