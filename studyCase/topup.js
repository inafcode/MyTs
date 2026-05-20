"use strict";
function hitungBonus(saldoAwal, jumlahTopup, bonus) {
    return saldoAwal + jumlahTopup + bonus;
}
function hitungBonusTopup(jumlahTopup) {
    if (jumlahTopup >= 100000) {
        return 20000;
    }
    else if (jumlahTopup > 50000) {
        return 10000;
    }
    else {
        return 0;
    }
}
const saldoAwal = 200000;
const jumlahTopup = 100000;
const bonus = hitungBonusTopup(jumlahTopup);
const hasil = hitungBonus(saldoAwal, jumlahTopup, bonus);
const saldoAkhir = hasil;
console.log(`Saldo awal: ${saldoAwal}`);
console.log(`Jumlah topup: ${jumlahTopup}`);
console.log(`Bonus: ${bonus}`);
console.log(`Hasil: ${hasil}`);
console.log(`Saldo akhir: ${saldoAkhir}`);
