"use strict";
function hitungSubtotal(harga, jumlah) {
    return harga * jumlah;
}
function hitungDiskon(subtotal) {
    return subtotal * 0.1;
}
function hitungTotalBayar(subtotal, diskon) {
    return subtotal - diskon;
}
const subtotal = hitungSubtotal(10000, 5);
const diskon = hitungDiskon(subtotal);
const totalBayar = hitungTotalBayar(subtotal, diskon);
console.log(`Subtotal: ${subtotal}`);
console.log(`Diskon: ${diskon}`);
console.log(`Total bayar: ${totalBayar}`);
// hitung diskon
// harga barang * 0.1 = diskon
// total = harga barang - diskon
