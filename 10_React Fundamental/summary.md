Kesimpulan

JSX adalah singkatan dari javascript XML atau extensi pada javascript.
Komponen React adalah bagian kode yang dapat digunakan kembali untuk menampilkan tampilan, behavior, dan state sebagian UI.
Props adalah :
1.Singkatan dari properties, membuat kita dapat memberikan argumen / data pada componenr.
2.Props membantu untuk membuat komponen menjadi lebih dinamis.
3.Props dioper ke component sama seperti memberikan atribut pada tag HTML.
4.Props pada component adalah read-only dan tidak dapat diubah.

Ada dua kompisisi komponen yaitu kontainmen dan spesialisasi.

Lifecycle method yang umum
1.render()
-Fungsi yang paling sering dipakai
-Required pada class component
-Pure function. Tidak boleh ada setState()
2.componentDidMount()
-Dipanggil ketika component sudah di render untuk pertama kali
-Tempat yang tepat untuk pemanggilan API
-Boleh ada setState()
3.componentDidUpdate()
-Dipanggil ketika terjadi update (props atau state berubah)
4.componentWillUnmount()
-Dipanggil ketika component akan dihancurkan
-Cocok untuk clean up actions

Render bersyarat pada react kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi yang kita buat dengan menggunakan if. inline if dengan operator &&. inline if-Else dengan ternary conditional operator dan mencegah komponen untuk rendering.

Render List kita dapat membangun koleksi dari beberapa elemen dan menyertakan dalam JSX menggunakn tanda kurung urawal {}.

Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.
