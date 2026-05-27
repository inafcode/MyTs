import {useState} from 'react';

function TemplateBaju(){
    const [jumlahBeli, setJumlahBeli] = useState(0);

function tambahKeranjang(){
    setJumlahBeli(jumlahBeli + 1);
}

return (
        <div className="kartu-baju">
            <h2>👕 Template Kemeja Dark Elegant</h2>
            <p>Harga: 50 Robux</p>
            
            {/* Tampilkan angka state di sini */}
            <p>Di keranjang: {jumlahBeli} item</p>
            
            {/* Pasang event onClick di tombol ini */}
            <button onClick={tambahKeranjang}>
                🛒 Masukkan ke Keranjang
            </button>
        </div>
    );
}
