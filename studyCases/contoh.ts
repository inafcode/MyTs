function hitungSubtotal(harga: number, jumlah: number) {
  return harga * jumlah;
}

function hitungDiskon(subtotal: number) {
  return subtotal * 0.1;
}

function hitungTotalBayar(subtotal: number, diskon: number) {
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