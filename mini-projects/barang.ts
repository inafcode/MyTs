class Barang {
    private nama: string;
    private harga: number;

    constructor(namaInput: string, hargaInput: number) {
        this.nama = namaInput;
        this.harga = hargaInput;
    }

    dapatkanInfo() {
        return `Nama Barang : ${this.nama}, Harga Barang : Rp.${this.harga}`;
    }

    ubahHarga(hargaBaru: number) {
        this.harga = hargaBaru;
    }
}


const barangPertama = new Barang("Laptop", 150000);

console.log(barangPertama.dapatkanInfo()); 

// barangPertama.harga = 5000;