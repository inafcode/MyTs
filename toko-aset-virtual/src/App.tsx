import { useState } from 'react';
import './App.css'; 

// 1. Kontrak Data (Interface)
interface Produk {
    id: number;
    nama: string;
    harga: number;
    kategori: string;
}

// 2. Data Master (Array)
// Mirip dengan BrankasAset yang kamu buat kemarin!
const daftarProduk: Produk[] = [
    { id: 1, nama: "👕 Kemeja Dark Elegant", harga: 50, kategori: "Pakaian" },
    { id: 2, nama: "🎭 Topeng Evil Clown", harga: 120, kategori: "Aksesori" },
    { id: 3, nama: "⛰️ Map Gunung Ascent", harga: 800, kategori: "Lingkungan" },
    { id: 4, nama: "🖼️ UI Cartoon Hangout", harga: 300, kategori: "Desain" }
];

// 3. Komponen Anak (Kartu Satuan)
// Komponen ini HANYA mencetak 1 kartu, menerima data lewat "Props"
function KartuProduk(props: { item: Produk }) {
    const [jumlahBeli, setJumlahBeli] = useState(0);

    return (
        <div style={{ border: "1px solid #646cff", padding: "15px", borderRadius: "8px", backgroundColor: "#1a1a1a", width: "220px", textAlign: "left" }}>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>{props.item.nama}</h3>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "gray" }}>Kategori: {props.item.kategori}</p>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>{props.item.harga} Robux</p>
            
            <hr style={{ borderColor: "#333", margin: "10px 0" }} />
            
            <p style={{ fontSize: "14px" }}>Di keranjang: {jumlahBeli}</p>
            <button onClick={() => setJumlahBeli(jumlahBeli + 1)} style={{ cursor: "pointer", width: "100%" }}>
                🛒 Tambah
            </button>
        </div>
    );
}

// 4. Komponen Induk (Halaman Utama)
function App() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Katalog CodeMatrixLabs</h2>
            
            {/* Wadah fleksibel untuk menjejerkan kartu */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
                
                {/* Di sinilah KEAJAIBAN Looping terjadi! */}
                {daftarProduk.map((produk) => (
                    <KartuProduk key={produk.id} item={produk} />
                ))}

            </div>
        </div>
    );
}

export default App;