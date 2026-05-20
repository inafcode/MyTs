function hargaBarang(harga: number, jumlah: number) {
    return harga * jumlah;
}

function hitungDiskon(subTotal: number) {
    return subTotal * 0.1;
}

function hitungTotalBayar(subTotal: number, diskon: number) {
    return subTotal - diskon;
}

const subTotal = hargaBarang(15000, 4);
const diskon = hitungDiskon(subTotal);
const totalBayar = hitungTotalBayar(subTotal, diskon);

console.log(`Harga Barang : ${subTotal}`);
console.log(`Diskon : ${diskon}`);
console.log(`Total Bayar : ${totalBayar}`);

// note :
// harga barang = 15000
// jumlah = 4