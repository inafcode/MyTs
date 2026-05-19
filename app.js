"use strict";
console.log("Belajar hari ke 1");
let nama = "Naufal";
let umur = 20;
console.log(`Nama teman saya : ${nama}`);
console.log(`Umur teman saya : ${umur}`);
if (umur >= 20) {
    console.log(`${nama} sudah dewasa`);
}
else {
    console.log(`${nama} masih kecil`);
}
console.log("=======================================");
const nama1 = "Ilham";
let isSudahMenikah = false;
let umur1 = 22;
console.log(`Nama saya : ${nama1}`);
console.log(`Umur saya : ${umur1}`);
console.log(`Status Menikah : ${isSudahMenikah}`);
if (umur1 >= 25) {
    console.log(`${umur1} sudah boleh menikah`);
}
else {
    console.log(`${umur1} belum boleh menikah`);
}
let tahunDepan = umur1 + 1;
console.log(`Tahun depan umur saya : ${tahunDepan}`);
console.log("=======================================");
function cekBolehBuatSIM(nama1, umur1, isSudahMenikah) {
    console.log(`Nama : ${nama1}`);
    console.log(`Umur : ${umur1}`);
    console.log(`Sudah Menikah : ${isSudahMenikah}`);
    if (umur1 >= 17 && !isSudahMenikah) {
        console.log(`Boleh Membuat SIM`);
    }
    else {
        console.log(`Tidak Boleh Membuat SIM`);
    }
}
cekBolehBuatSIM("Ilham", 24, true);
console.log("=======================================");
const name2 = "Naffi";
let usia = 24;
let hobi = "Coding";
let isSudahMakan = true;
let usiaTahunDepan = usia + 1;
console.log(`Nama saya : ${name2}`);
console.log(`Usia saya : ${usia}`);
console.log(`Hobi saya : ${hobi}`);
console.log(`Apa Sudah Makan? ${isSudahMakan}`);
console.log(`Usia Saya Tahun Depan : ${usiaTahunDepan}`);
console.log("=======================================");
let umurUser = 15;
let punyaKTP = false;
console.log(`Umur User : ${umurUser}`);
if (punyaKTP) {
    console.log("Punya KTP");
}
else {
    console.log("Belum Punya KTP");
}
if (umurUser >= 17 && punyaKTP) {
    console.log(`${umurUser} sudah boleh membuat SIM`);
}
else {
    console.log(`${umurUser} belum boleh membuat SIM`);
}
console.log(`===========================================`);
function tampilkanUser(nama, umur) {
    console.log(`Nama User : ${nama}`);
    console.log(`Umur User : ${umur}`);
}
tampilkanUser("Naufal", 20);
console.log(`===========================================`);
function cekBolehBuatSIM(nama1, umur1, isSudahMenikah) {
    console.log(`Nama : ${nama1}`);
    console.log(`Umur : ${umur1}`);
    console.log(`Sudah Menikah : ${isSudahMenikah}`);
    if (umur1 >= 17 && !isSudahMenikah) {
        console.log(`Boleh Membuat SIM`);
    }
    else {
        console.log(`Tidak Boleh Membuat SIM`);
    }
}
cekBolehBuatSIM("Ilham", 24, true);
