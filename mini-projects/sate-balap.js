"use strict";
class MenuSateBalap {
    namaMenu;
    harga;
    constructor(namaMenu, harga) {
        this.namaMenu = namaMenu;
        this.harga = harga;
    }
    cekHarga() {
        return `Harga Menu ${this.namaMenu} adalah Rp.${this.harga}`;
    }
}
class MenuSate extends MenuSateBalap {
    levelPedas;
    constructor(namaMenu, harga, levelPedas) {
        super(namaMenu, harga);
        this.levelPedas = levelPedas;
    }
    terapkanDiskonVIP(persen) {
        this.harga = this.harga - (this.harga * (persen / 100));
        console.log(`Diskon VIP sebesar ${persen}% telah diterapkan. Harga baru: Rp.${this.harga}`);
    }
    cetakStruk() {
        return `Struk Pembelian: ${this.namaMenu} (Level Pedas: ${this.levelPedas}) - Rp.${this.harga}`;
    }
}
class Minuman extends MenuSateBalap {
    ukuranGelas;
    constructor(namaMenu, harga, ukuranGelas) {
        super(namaMenu, harga);
        this.ukuranGelas = ukuranGelas;
    }
    cetakStruk() {
        return `Struk Pembelian: ${this.namaMenu} (Ukuran Gelas: ${this.ukuranGelas}) - Rp.${this.harga}`;
    }
}
const customer = new MenuSate("Sate Ayam", 20000, "Pedas");
const costumerBiasa = new MenuSate("Sate Kambing", 25000, "Tidak Pedas");
console.log(costumerBiasa.cekHarga());
console.log(costumerBiasa.cetakStruk());
console.log("=====================================");
customer.terapkanDiskonVIP(10);
console.log(customer.cekHarga());
console.log(customer.cetakStruk());
console.log("=====================================");
const minuman = new Minuman("Es Teh", 5000, "Besar");
console.log(minuman.cekHarga());
console.log(minuman.cetakStruk());
