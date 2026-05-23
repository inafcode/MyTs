class AsetVirtual {
    private namaKarya: string;
    private harga: number;
    private totalTerjual: number;

    constructor(namaInput: string, hargaInput: number) {
        this.namaKarya = namaInput;
        this.harga = hargaInput;
        this.totalTerjual = 0;
    }

    cekInfo() {
        return `Karya ${this.namaKarya} dijual seharga Rp.${this.harga}. Saat ini sudah terjual sebanyak ${this.totalTerjual} kali.`;
    }

    catatPenjualan(jumlahBeli: number) {
        this.totalTerjual += jumlahBeli;
    }
}

const karyaPertama = new AsetVirtual("Peta Gunung", 150);

console.log(karyaPertama.cekInfo());
karyaPertama.catatPenjualan(3);
karyaPertama.catatPenjualan(2);
console.log(karyaPertama.cekInfo());