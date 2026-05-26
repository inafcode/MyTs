"use strict";
class BrankasAset {
    koleksi = [];
    tambahAset(aset) {
        this.koleksi.push(aset);
    }
    tampilkanKoleksi() {
        return this.koleksi;
    }
}
const brankasUI = new BrankasAset();
const brankasPeta = new BrankasAset();
brankasUI.tambahAset({ namaPanel: "Menu Utama", resolusi: "1920x1080" });
brankasUI.tambahAset({ namaPanel: "Aset Lingkungan", resolusi: "1920x1080" });
console.log(brankasUI.tampilkanKoleksi());
console.log("===============================================================");
brankasPeta.tambahAset({ namaObjek: "Pohon", ukuranSkala: "1:100" });
brankasPeta.tambahAset({ namaObjek: "Rumah", ukuranSkala: "1:50" });
console.log(brankasPeta.tampilkanKoleksi());
console.log("===============================================================");
