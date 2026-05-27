import { useState } from 'react';
import './App.css'; 

// 1. Kontrak Data Produk (Tetap sama)
interface Produk {
    id: number;
    nama: string;
    harga: number;
    kategori: string;
}

const daftarProduk: Produk[] = [
    { id: 1, nama: "👕 Kemeja Dark Elegant", harga: 50, kategori: "Pakaian" },
    { id: 2, nama: "🎭 Topeng Evil Clown", harga: 120, kategori: "Aksesori" },
    { id: 3, nama: "⛰️ Map Gunung Ascent", harga: 800, kategori: "Lingkungan" },
    { id: 4, nama: "🖼️ UI Cartoon Hangout", harga: 300, kategori: "Desain" }
];

// 2. Kontrak Baru untuk Props Kartu!
// Sekarang Kartu wajib menerima data 'item' DAN alat komunikasi 'onTambah'
interface KartuProps {
    item: Produk;
    onTambah: () => void; // Ini adalah tipe data untuk sebuah Fungsi kosong
}

// 3. Komponen Anak (Kartu Satuan)
function KartuProduk(props: KartuProps) {
    const [jumlahBeli, setJumlahBeli] = useState(0);

    // Fungsi baru untuk menangani 2 tugas sekaligus
    function handleKlikBeli() {
        setJumlahBeli(jumlahBeli + 1); // Tugas 1: Tambah angka lokal di kartu
        props.onTambah();              // Tugas 2: Lapor ke App (Komandan)!
    }

    return (
        <div style={{ border: "1px solid #646cff", padding: "15px", borderRadius: "8px", backgroundColor: "#1a1a1a", width: "220px", textAlign: "left" }}>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>{props.item.nama}</h3>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "gray" }}>Kategori: {props.item.kategori}</p>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>{props.item.harga} Robux</p>
            
            <hr style={{ borderColor: "#333", margin: "10px 0" }} />
            
            <p style={{ fontSize: "14px" }}>Di keranjang: {jumlahBeli}</p>
            {/* Tombol sekarang memanggil fungsi gabungan */}
            <button onClick={handleKlikBeli} style={{ cursor: "pointer", width: "100%" }}>
                🛒 Tambah
            </button>
        </div>
    );
}

// 4. Komponen Induk (Komandan)
function App() {
    const [totalGlobal, setTotalGlobal] = useState(0);
    
    // STATE BARU: Brankas untuk menyimpan teks pencarian
    const [kataKunci, setKataKunci] = useState(""); 

    function hitungTotalGlobal() {
        setTotalGlobal(totalGlobal + 1);
    }

    // LOGIKA FILTER: Menyaring produk berdasarkan kata kunci
    // toLowerCase() digunakan agar pencarian tidak peduli huruf besar/kecil
    const produkYangDitampilkan = daftarProduk.filter((produk) => {
        return produk.nama.toLowerCase().includes(kataKunci.toLowerCase());
    });

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            
            {/* Bagian Navigasi Atas (Header) */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #333", paddingBottom: "15px" }}>
                <h2 style={{ margin: 0 }}>CodeMatrixLabs</h2>
                
                <div style={{ backgroundColor: "#646cff", padding: "10px 20px", borderRadius: "20px", fontWeight: "bold" }}>
                    🛒 Total Keranjang: {totalGlobal}
                </div>
            </div>

            {/* BARU: Kolom Pencarian */}
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <input 
                    type="text"
                    placeholder="🔍 Cari aset digital (contoh: Map, Kemeja)..."
                    value={kataKunci}
                    onChange={(event) => setKataKunci(event.target.value)}
                    style={{ padding: "10px", width: "100%", maxWidth: "400px", borderRadius: "8px", border: "1px solid #555", backgroundColor: "#222", color: "white" }}
                />
            </div>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
                {/* UBAH DI SINI: Kita map() dari hasil filter, BUKAN dari daftarProduk awal */}
                {produkYangDitampilkan.map((produk) => (
                    <KartuProduk 
                        key={produk.id} 
                        item={produk} 
                        onTambah={hitungTotalGlobal} 
                    />
                ))}
                
                {/* Pesan ramah jika barang tidak ditemukan */}
                {produkYangDitampilkan.length === 0 && (
                    <p style={{ color: "gray", marginTop: "20px" }}>Aset yang kamu cari tidak ditemukan...</p>
                )}
            </div>
        </div>
    );
}

export default App;