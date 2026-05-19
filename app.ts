console.log("Belajar hari ke 1")

let nama: string = "Naufal";
let umur: number = 20;

console.log(`Nama teman saya : ${nama}`);
console.log(`Umur teman saya : ${umur}`);
if (umur >= 20) {
    console.log(`${nama} sudah dewasa`)
} else {
    console.log(`${nama} masih kecil`)
}

console.log("=======================================");

const nama1: string = "Ilham";
let isSudahMenikah: boolean = false;
let umur1: number = 22;

console.log(`Nama saya : ${nama1}`);
console.log(`Umur saya : ${umur1}`);
console.log(`Status Menikah : ${isSudahMenikah}`);
if (umur1 >= 25) {
    console.log(`${umur1} sudah boleh menikah`)
} else {
    console.log(`${umur1} belum boleh menikah`)
}

let tahunDepan: number = umur1 + 1;

console.log(`Tahun depan umur saya : ${tahunDepan}`);
console.log("=======================================");


const name2: string = "Naffi";
let usia: number = 24;
let hobi: string = "Coding";
let isSudahMakan: boolean = true;
let usiaTahunDepan: number = usia + 1;

console.log(`Nama saya : ${name2}`);
console.log(`Usia saya : ${usia}`);
console.log(`Hobi saya : ${hobi}`);
console.log(`Apa Sudah Makan? ${isSudahMakan}`);
console.log(`Usia Saya Tahun Depan : ${usiaTahunDepan}`);
console.log("=======================================");


let umurUser: number = 15;
let punyaKTP: boolean = false;

console.log(`Umur User : ${umurUser}`);
if (punyaKTP) {
    console.log("Punya KTP");
} else {
    console.log("Belum Punya KTP");
}


if (umurUser >= 17 && punyaKTP) {
    console.log(`${umurUser} sudah boleh membuat SIM`);
} else {
    console.log(`${umurUser} belum boleh membuat SIM`);
}

console.log(`===========================================`);


function tampilkanUser(nama: string, umur: number) {
    console.log(`Nama User : ${nama}`)
    console.log(`Umur User : ${umur}`)
}

tampilkanUser("Naufal", 20);

console.log(`===========================================`);
