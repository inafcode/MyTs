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
        setJumlahBeli(jumlahBeli + 1);
        props.onTambah();   
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
    
    // Brankas 1: Teks Pencarian
    const [kataKunci, setKataKunci] = useState(""); 
    
    // Brankas 2 (BARU!): Kategori yang sedang aktif
    const [kategoriAktif, setKategoriAktif] = useState("Semua");

    function hitungTotalGlobal() {
        setTotalGlobal(totalGlobal + 1);
    }

    // LOGIKA FILTER GANDA: Lolos teks DAN lolos kategori
    const produkYangDitampilkan = daftarProduk.filter((produk) => {
        // Cek Teks (Gerbang 1)
        const lolosTeks = produk.nama.toLowerCase().includes(kataKunci.toLowerCase());
        
        // Cek Kategori (Gerbang 2)
        // Kalau tab "Semua" dipilih, otomatis lolos. Kalau tidak, kategorinya harus sama persis.
        const lolosKategori = kategoriAktif === "Semua" || produk.kategori === kategoriAktif;

        // Harus lolos dua-duanya! (&& artinya AND)
        return lolosTeks && lolosKategori;
    });

    // Daftar tombol kategori yang ingin kita buat
    const daftarTab = ["Semua", "Pakaian", "Aksesori", "Lingkungan", "Desain"];

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            
            {/* Navigasi Atas */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #333", paddingBottom: "15px" }}>
                <h2 style={{ margin: 0 }}>CodeMatrixLabs</h2>
                <div style={{ backgroundColor: "#646cff", padding: "10px 20px", borderRadius: "20px", fontWeight: "bold" }}>
                    🛒 Total Keranjang: {totalGlobal}
                </div>
            </div>

            {/* Kolom Pencarian */}
            <div style={{ marginBottom: "15px", textAlign: "center" }}>
                <input 
                    type="text"
                    placeholder="🔍 Cari aset digital..."
                    value={kataKunci}
                    onChange={(event) => setKataKunci(event.target.value)}
                    style={{ padding: "10px", width: "100%", maxWidth: "400px", borderRadius: "8px", border: "1px solid #555", backgroundColor: "#222", color: "white" }}
                />
            </div>

            {/* BARU: Deretan Tombol Kategori */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                {daftarTab.map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setKategoriAktif(tab)}
                        // Logika visual: Jika tombol ini sedang aktif, warnanya biru. Jika tidak, warnanya abu-abu.
                        style={{ 
                            backgroundColor: kategoriAktif === tab ? "#646cff" : "#444",
                            color: "white", padding: "8px 15px", border: "none", borderRadius: "20px", cursor: "pointer"
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
            {/* Area Tampil Kartu */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
                {produkYangDitampilkan.map((produk) => (
                    <KartuProduk key={produk.id} item={produk} onTambah={hitungTotalGlobal} />
                ))}
                
                {produkYangDitampilkan.length === 0 && (
                    <p style={{ color: "gray", marginTop: "20px" }}>Aset tidak ditemukan...</p>
                )}
            </div>
        </div>
    );
}

export default App;