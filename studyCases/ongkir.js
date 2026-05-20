"use strict";
function hargaBarang(namaBarang, harga, ongkir) {
    return harga + ongkir;
}
function cekHargaBarang(totalBelanja) {
    if (totalBelanja >= 100000) {
        return "Gratis Ongkir";
    }
    return "Bayar Ongkir";
}
const namaBarang = "Pulpen";
const harga = 4000;
const ongkir = 5000;
const totalBelanja = hargaBarang(namaBarang, harga, ongkir);
const statusOngkir = cekHargaBarang(totalBelanja);
console.log(`Nama Barang : ${namaBarang}`);
console.log(`Total Belanja : ${totalBelanja}`);
console.log(`Status Ongkir : ${statusOngkir}`);
