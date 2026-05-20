function transferUang(saldo: number, jumlahTransfer: number, tax: number) {
    if (jumlahTransfer + tax <= saldo) {
        return saldo - jumlahTransfer - tax;
    }
    return "Saldo tidak cukup";
}


function hitungTax(jumlahTransfer: number) {
    if (jumlahTransfer > 100000) {
        return 30000;
    } else if (jumlahTransfer > 50000) {
        return 20000;
    } else {
        return 10000;
    }
}

const saldoAwal = 100000;
const jumlahTransfer = 5000;
const tax = hitungTax(jumlahTransfer);
const hasil = transferUang(saldoAwal, jumlahTransfer, tax);
console.log(`Saldo awal: ${saldoAwal}`);
console.log(`Jumlah transfer: ${jumlahTransfer}`);
console.log(`Tax: ${tax}`);
console.log(`Hasil: ${hasil}`);