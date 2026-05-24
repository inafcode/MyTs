"use strict";
class ItemATK {
    kodeBarang;
    nama;
    stok;
    constructor(kodeBarang, nama, stok) {
        this.kodeBarang = kodeBarang;
        this.nama = nama;
        this.stok = stok;
    }
    cekStok() {
        return `Stok ${this.nama} (Kode barang : ${this.kodeBarang}). Saat ini tersedia ${this.stok} unit.`;
    }
}
class AlatTulis extends ItemATK {
    hargaPerPack;
    constructor(kodeBarang, nama, stok, hargaPerPack) {
        super(kodeBarang, nama, stok);
        this.hargaPerPack = hargaPerPack;
    }
    hitungNilaiAset() {
        return this.stok * this.hargaPerPack;
    }
}
class MesinKantor extends ItemATK {
    hargaPerPack;
    lamaGaransiBulan;
    constructor(kodeBarang, nama, stok, hargaPerPack, lamaGaransiBulan) {
        super(kodeBarang, nama, stok);
        this.hargaPerPack = hargaPerPack;
        this.lamaGaransiBulan = lamaGaransiBulan;
    }
    hitungNilaiAset() {
        return this.stok * this.hargaPerPack;
    }
    klaimGaransi() {
        return `Garansi untuk ${this.nama} (Kode barang : ${this.kodeBarang}) berlaku selama ${this.lamaGaransiBulan} bulan.`;
    }
}
const isAlatTulis = new AlatTulis("ATK001", "Pulpen", 100, 5000);
const isMesinKantor = new MesinKantor("MK001", "Printer", 10, 1500000, 24);
console.log(isAlatTulis.cekStok());
console.log("Total nilai aset Pulpen: Rp." + isAlatTulis.hitungNilaiAset());
console.log("=====================================");
console.log(isMesinKantor.cekStok());
console.log("Total nilai aset Mesin Kantor: Rp." + isMesinKantor.hitungNilaiAset());
console.log(isMesinKantor.klaimGaransi());
