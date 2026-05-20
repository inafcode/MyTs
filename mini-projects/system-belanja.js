"use strict";
function hitungSubtotal(harga, jumlahBeli) {
    return harga * jumlahBeli;
}
function hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
        return subtotal * 0.2;
    }
    else if (subtotal >= 50000) {
        return subtotal * 0.1;
    }
    else {
        return 0;
    }
}
function hitungPajak(totalSetelahDiskon) {
    return totalSetelahDiskon * 0.11;
}
function hitungTotalAkhir(totalSetelahDiskon, pajak) {
    return totalSetelahDiskon + pajak;
}
const namaBarang = "Laptop";
const hargaBarang = 150000;
const jumlahBeli = 2;
const subtotal = hitungSubtotal(hargaBarang, jumlahBeli);
const diskon = hitungDiskon(subtotal);
const totalSetelahDiskon = subtotal - diskon;
const pajak = hitungPajak(totalSetelahDiskon);
const totalAkhir = hitungTotalAkhir(totalSetelahDiskon, pajak);
console.log(`Nama Barang : ${namaBarang}`);
console.log(`Subtotal    : Rp.${subtotal}`);
console.log(`Diskon      : Rp.${diskon}`);
console.log(`Pajak       : Rp.${pajak}`);
console.log(`Total Akhir : Rp.${totalAkhir}`);
