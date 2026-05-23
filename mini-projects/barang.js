"use strict";
class Barang {
    nama;
    harga;
    constructor(namaInput, hargaInput) {
        this.nama = namaInput;
        this.harga = hargaInput;
    }
    dapatkanInfo() {
        return `Nama Barang : ${this.nama}, Harga Barang : Rp.${this.harga}`;
    }
    ubahHarga(hargaBaru) {
        this.harga = hargaBaru;
    }
}
const barangPertama = new Barang("Laptop", 150000);
barangPertama.ubahHarga(120000);
console.log(barangPertama.dapatkanInfo());
// barangPertama.harga = 5000;
