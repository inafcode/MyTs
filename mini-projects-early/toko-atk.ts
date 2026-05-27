interface LayananGaransi {
    klaimGaransi(): string;
}

abstract class ItemATK {
    protected kodeBarang: string;
    protected nama: string;
    protected stok: number;

    constructor(kodeBarang: string, nama: string, stok: number) {
        this.kodeBarang = kodeBarang;
        this.nama = nama;
        this.stok = stok;
    }

    cekStok() {
        return `Stok ${this.nama} (Kode barang : ${this.kodeBarang}). Saat ini tersedia ${this.stok} unit.`;
    }

    abstract hitungNilaiAset(): number;
}

class AlatTulis extends ItemATK {
    private hargaPerPack: number;

    constructor(kodeBarang: string, nama: string, stok: number, hargaPerPack: number) {
        super(kodeBarang, nama, stok);
        this.hargaPerPack = hargaPerPack;
    }

    hitungNilaiAset(): number {
        return this.stok * this.hargaPerPack;
    }
}

class MesinKantor extends ItemATK implements LayananGaransi {
    private hargaPerPack: number;
    private lamaGaransiBulan: number;

    constructor(kodeBarang: string, nama: string, stok: number, hargaPerPack: number, lamaGaransiBulan: number) {
        super(kodeBarang, nama, stok);
        this.hargaPerPack = hargaPerPack;
        this.lamaGaransiBulan = lamaGaransiBulan;
    }

    hitungNilaiAset(): number {
        return this.stok * this.hargaPerPack;
    }

    klaimGaransi(): string {
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