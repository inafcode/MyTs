"use strict";
class dompetDigital {
    pemilik;
    saldo;
    constructor(pemilikInput, saldoAwal) {
        this.pemilik = pemilikInput;
        this.saldo = saldoAwal;
    }
    cekSaldo() {
        return `Dompet milik : ${this.pemilik}, Memiliki saldo sebesar : Rp.${this.saldo}`;
    }
    isiSaldo(jumlahTopup) {
        this.saldo += jumlahTopup;
        console.log(`✅ Berhasil isi saldo sebesar Rp.${jumlahTopup}!`);
    }
}
const myWallet = new dompetDigital("Ilham", 50000);
console.log(myWallet.cekSaldo());
myWallet.isiSaldo(25000);
console.log(myWallet.cekSaldo());
