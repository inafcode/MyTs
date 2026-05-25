interface DesainUI{
    namaPanel: string;
    resolusi: string;
}
interface AsetLingkungan{
    namaObjek: string;
    ukuranSkala: string;
}

class BrankasAset<T> {
    private koleksi: T[] = [];

    tambahAset(aset: T){
        this.koleksi.push(aset);
    }

    tampilkanKoleksi(){
        return this.koleksi;
    }
}

const brankasUI = new BrankasAset<DesainUI>();
brankasUI.tambahAset({namaPanel: "Menu Utama", resolusi: "1920x1080" });
brankasUI.tambahAset({namaPanel: "Aset Lingkungan", resolusi: "1920x1080"});
brankasUI.tambahAset({namaPanel: "Danau", resolusi: "1640x720"});
brankasUI.tambahAset({namaPanel: "Gunung", resolusi: "720x480"});
console.log(brankasUI.tampilkanKoleksi());
console.log("===============================================================");
