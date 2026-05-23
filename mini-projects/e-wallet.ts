class dompetDigital{
    private pemilik: string;
    private saldo: number;

    constructor(pemilikInput: string, saldoAwal: number){
        this.pemilik = pemilikInput;
        this.saldo = saldoAwal;
    }

    cekSaldo(){
        return `Dompet milik : ${this.pemilik}, Memiliki saldo sebesar : Rp.${this.saldo}`;
    }

    isiSaldo(jumlahTopup: number){
        this.saldo += jumlahTopup;
        console.log(`✅ Berhasil isi saldo sebesar Rp.${jumlahTopup}!`);
    }
}

const myWallet = new dompetDigital("Ilham", 50000);
console.log(myWallet.cekSaldo());

myWallet.isiSaldo(25000);
console.log(myWallet.cekSaldo());