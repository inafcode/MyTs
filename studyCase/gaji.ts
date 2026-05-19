function hitungTotalGaji(gajiPokok: number, bonus: number) {
    return gajiPokok + bonus;
}

function hitungPajak(totalGaji: number) {
    return totalGaji * 0.05;
}

function hitungGajiBersih(totalGaji: number, pajak: number) {
    return totalGaji - pajak;
}

function cekStatusGaji(statusGaji: number) {
    if (statusGaji >= 3000000) {
        return "Gaji Besar";
    } else {
        return "Gaji Standar";
    }
}

const nama = "Ilham";
const gajiPokok = 5000000;
const bonus = 2000000;

const totalGaji = hitungTotalGaji(gajiPokok, bonus);
const pajak = hitungPajak(totalGaji);
const gajiBersih = hitungGajiBersih(totalGaji, pajak);
const gajiAkhir = cekStatusGaji(gajiBersih);

console.log(`Nama : ${nama}`);
console.log(`Total Gaji : ${totalGaji}`);
console.log(`Pajak : ${pajak}`);
console.log(`Gaji Bersih : ${gajiBersih}`);
console.log(`Status Gaji : ${gajiAkhir}`);