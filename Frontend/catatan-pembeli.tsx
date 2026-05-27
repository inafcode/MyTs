import { useState } from 'react';

function FormCatatan() {
    // 1. Siapkan State berupa string kosong ("") sebagai nilai awal catatan
    const [catatan, setCatatan] = useState("");

    // 2. Fungsi untuk menangkap setiap ketikan pengguna
    // Parameter 'event' otomatis dikirim oleh browser saat ada aktivitas ketik
    function handleKetikCatatan(event: any) {
        // event.target.value adalah mantra untuk mengambil teks yang sedang diketik di kotak
        setCatatan(event.target.value);
    }

    return (
        <div style={{ padding: "20px", maxWidth: "400px" }}>
            <h2>🛒 Detail Pemesanan</h2>
            
            <label style={{ display: "block", marginBottom: "8px" }}>
                Tambahkan Catatan Pembeli:
            </label>

            {/* 3. Kotak Input Teks Besar (Textarea) */}
            <textarea
                rows={4}
                placeholder="Contoh: Kirim sebelum jam 5 sore, ya..."
                value={catatan} // Mengunci isi kotak agar selalu sama dengan nilai State
                onChange={handleKetikCatatan} // Setiap ada ketikan, jalankan fungsi di atas
                style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            />

            {/* 4. Pratinjau Otomatis */}
            <div style={{ marginTop: "15px", background: "#f0f0f0", padding: "10px" }}>
                <h4>📋 Pratinjau Catatan Anda:</h4>
                {/* Jika catatan kosong, tampilkan teks bantuan */}
                <p>{catatan || "Belum ada catatan yang ditulis..."}</p>
            </div>
        </div>
    );
}