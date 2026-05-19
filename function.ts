function bolehMembuatSIM(nama: string, umur: number, punyaKTP: boolean) {
    console.log(`Nama : ${nama}`);
    console.log(`Umur : ${umur}`);
    if (umur >= 18 && punyaKTP) {
        console.log(`Selamat ${nama}! Anda boleh membuat SIM.`);
    } else {
        console.log(`Mohon maaf ${nama}, Anda belum memenuhi syarat untuk membuat SIM.`);
    }

    console.log("=======================================================");
}

bolehMembuatSIM("Andi", 16, false);
bolehMembuatSIM("Rudi", 19, true);
bolehMembuatSIM("Budi", 17, false);
bolehMembuatSIM("Siti", 20, true);