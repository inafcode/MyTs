"use strict";
class AsetVirtual {
    namaKarya;
    harga;
    totalTerjual;
    constructor(namaInput, hargaInput) {
        this.namaKarya = namaInput;
        this.harga = hargaInput;
        this.totalTerjual = 0;
    }
    cekInfo() {
        return `Karya ${this.namaKarya} dijual seharga Rp.${this.harga}. Saat ini sudah terjual sebanyak ${this.totalTerjual} kali.`;
    }
    catatPenjualan(jumlahBeli) {
        this.totalTerjual += jumlahBeli;
    }
}
const karyaPertama = new AsetVirtual("Peta Gunung", 150);
console.log(karyaPertama.cekInfo());
karyaPertama.catatPenjualan(3);
karyaPertama.catatPenjualan(2);
console.log(karyaPertama.cekInfo());
