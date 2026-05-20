"use strict";
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}
function cekKelulusan(nilaiAkhir) {
    if (nilaiAkhir >= 75) {
        return "Lulus";
    }
    else {
        return "Tidak Lulus";
    }
}
const nama = "Ilham";
const tugas = 90;
const uts = 85;
const uas = 70;
const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
const kelulusan = cekKelulusan(nilaiAkhir);
console.log(`Nama : ${nama}`);
console.log(`Nilai Akhir : ${nilaiAkhir}`);
console.log(`Kelulusan : ${kelulusan}`);
