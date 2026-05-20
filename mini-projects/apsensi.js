"use strict";
function cekKehadiran(jamMasuk) {
    if (jamMasuk <= "08:00") {
        return "hadir";
    }
    else if (jamMasuk > "08:00" && jamMasuk <= "09:00") {
        return "terlambat";
    }
    else {
        return "tidak hadir";
    }
}
function hitungBonus(status, bonus) {
    if (status == "hadir") {
        return bonus = 50000;
    }
    else if (status == "terlambat") {
        return bonus = 20000;
    }
    else {
        return 0;
    }
}
const namaKaryawan = "ilham";
const jamMasuk = "08:30";
const statusKehadiran = cekKehadiran(jamMasuk);
const bonusKaryawan = hitungBonus(statusKehadiran, 0);
console.log(`Nama Karyawan : ${namaKaryawan}`);
console.log(`Jam Masuk     : ${jamMasuk}`);
console.log(`Status        : ${statusKehadiran}`);
console.log(`Bonus         : Rp.${bonusKaryawan}`);
