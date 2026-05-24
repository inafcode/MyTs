interface PromoGerobak{
    terapkanDiskonVIP(persen: number): void;
}

abstract class MenuSateBalap {
    protected namaMenu: string;
    protected harga: number;

    constructor(namaMenu: string, harga: number) {
        this.namaMenu = namaMenu;
        this.harga = harga;
    }

    cekHarga() {
        return `Harga Menu ${this.namaMenu} adalah Rp.${this.harga}`;
    }

    abstract cetakStruk(): string;
}

class MenuSate extends MenuSateBalap implements PromoGerobak {
    private levelPedas: string;

    constructor(namaMenu: string, harga: number, levelPedas: string) {
        super(namaMenu, harga);
        this.levelPedas = levelPedas;
    }

    terapkanDiskonVIP(persen: number): void {
        this.harga = this.harga - (this.harga * (persen / 100));

        console.log(`Diskon VIP sebesar ${persen}% telah diterapkan. Harga baru: Rp.${this.harga}`);
    }

    cetakStruk(): string {
        return `Struk Pembelian: ${this.namaMenu} (Level Pedas: ${this.levelPedas}) - Rp.${this.harga}`;
    }
}

class Minuman extends MenuSateBalap {
    private ukuranGelas: string;

    constructor(namaMenu: string, harga: number, ukuranGelas: string) {
        super(namaMenu, harga);
        this.ukuranGelas = ukuranGelas;
    }

    cetakStruk(): string {
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