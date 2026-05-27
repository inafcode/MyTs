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
class TemplateBaju extends AsetVirtual {
    tema;
    constructor(namaInput, hargaInput, temaInput) {
        super(namaInput, hargaInput);
        this.tema = temaInput;
    }
    terapkanDiskon(persen) {
        this.harga = this.harga - (this.harga * (persen / 100));
    }
    // Method khusus untuk class anak
    cekDetailBaju() {
        // Kita bisa memanggil this.namaKarya karena sekarang statusnya "protected"
        return `Baju virtual ${this.namaKarya} ini memiliki tema ${this.tema}.`;
    }
    cekInfo() {
        return `${this.namaKarya} (Tema: ${this.tema}) dijual seharga Rp.${this.harga}. Terjual: ${this.totalTerjual} kali.`;
    }
}
class Peta3D extends AsetVirtual {
    constructor(namaInput, hargaInput) {
        super(namaInput, hargaInput);
    }
}
const karyaPertama = new Peta3D("Peta 3D", 150);
karyaPertama.catatPenjualan(3);
karyaPertama.catatPenjualan(2);
console.log(karyaPertama.cekInfo());
const bajuBaru = new TemplateBaju("Kemeja Kasual", 500, "Dark Elegant");
bajuBaru.terapkanDiskon(50);
bajuBaru.catatPenjualan(8);
console.log(bajuBaru.cekInfo());
console.log(bajuBaru.cekDetailBaju());
