"use strict";
class KomoditasEkspor {
    namaBarang;
    beratKg;
    constructor(namaBarang, beratKg) {
        this.namaBarang = namaBarang;
        this.beratKg = beratKg;
    }
    cekResi() {
        return `Barang : ${this.namaBarang}, Berat : ${this.beratKg} kg`;
    }
}
class SayurSegar extends KomoditasEkspor {
    tingkatKelembaban;
    constructor(namaBarang, beratKg, tingkatKelembaban) {
        super(namaBarang, beratKg);
        this.tingkatKelembaban = tingkatKelembaban;
    }
    estimasiBiayaKirim() {
        return this.beratKg * 15000;
    }
    cekSuhu() {
        return `Selada dan sayur segar aman di suhu 4°C dengan kelembaban ${this.tingkatKelembaban}.`;
    }
}
class SayurBeku extends KomoditasEkspor {
    suhuTarget;
    constructor(namaBarang, beratKg, suhuTarget) {
        super(namaBarang, beratKg);
        this.suhuTarget = suhuTarget;
    }
    estimasiBiayaKirim() {
        return this.beratKg * 25000;
    }
    cekSuhu() {
        return `Frozen vegetables dijaga ketat pada suhu ${this.suhuTarget}°C.`;
    }
}
// Sistem Manajemen Kontainer (Generics)
class KontainerEkspor {
    daftarMuatan = [];
    masukkanMuatan(muatan) {
        this.daftarMuatan.push(muatan);
    }
    cekIsiKontainer() {
        return this.daftarMuatan;
    }
}
const seladaPremium = new SayurSegar("Selada Hijau Kalbar", 500, "Tinggi");
const mixVeggies = new SayurBeku("Sayuran Beku Campur", 1000, -18);
console.log(seladaPremium.estimasiBiayaKirim());
console.log(seladaPremium.cekSuhu());
console.log("===============================================================");
console.log(mixVeggies.estimasiBiayaKirim());
console.log(mixVeggies.cekSuhu());
console.log("===============================================================");
const kontainerSegar = new KontainerEkspor();
kontainerSegar.masukkanMuatan(seladaPremium);
const kontainerBeku = new KontainerEkspor();
kontainerBeku.masukkanMuatan(mixVeggies);
console.log(kontainerSegar.cekIsiKontainer());
console.log("===============================================================");
console.log(kontainerBeku.cekIsiKontainer());
