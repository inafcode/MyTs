function hitungNilaiAkhir(tugas: number, uts: number, uas: number) {
    return tugas * 0.3 + uts * 0.3 + uas * 0.4;
}

function cekKelulusan(nilaiAkhir: number) {
    if (nilaiAkhir >= 75) {
        return "Lulus"
    } else {
        return "Tidak Lulus"
    }
}

const nama: string = "Ilham";
const tugas: number = 90;
const uts: number = 85;
const uas: number = 70;
const nilaiAkhir: number = hitungNilaiAkhir(tugas, uts, uas);
const kelulusan: string = cekKelulusan(nilaiAkhir);
console.log(`Nama : ${nama}`);
console.log(`Nilai Akhir : ${nilaiAkhir}`);
console.log(`Kelulusan : ${kelulusan}`);