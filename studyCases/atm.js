"use strict";
function tarikUang(saldo, jumlahTarik) {
    if (jumlahTarik <= saldo) {
        return `Penarikan sebesar ${jumlahTarik} berhasil. Sisa saldo: ${saldo - jumlahTarik}`;
    }
    return "Saldo tidak cukup";
}
const saldoAwal = 1000000;
const jumlahTarik = 250000;
const hasil = tarikUang(saldoAwal, jumlahTarik);
console.log(`Saldo awal: ${saldoAwal}`);
console.log(`Jumlah penarikan: ${jumlahTarik}`);
console.log(`Hasil: ${hasil}`);
