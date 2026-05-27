interface ProtokolKualitas{
    cekSuhu(): string;
}

abstract class KomoditasEkspor{
    protected namaBarang: string;
    protected beratKg: number;

    constructor(namaBarang: string, beratKg: number){
        this.namaBarang = namaBarang;
        this.beratKg = beratKg;
    }

    cekResi(){
        return `Barang : ${this.namaBarang}, Berat : ${this.beratKg} kg`;
    }

    abstract estimasiBiayaKirim(): number;
}

class SayurSegar extends KomoditasEkspor implements ProtokolKualitas{
    private tingkatKelembaban: string;

    constructor(namaBarang: string, beratKg: number, tingkatKelembaban:string){
        super(namaBarang, beratKg);
        this.tingkatKelembaban = tingkatKelembaban;
    }

    estimasiBiayaKirim(){
        return this.beratKg * 15000;
    }

    cekSuhu(){
        return `Selada dan sayur segar aman di suhu 4°C dengan kelembaban ${this.tingkatKelembaban}.`;
    }
}

class SayurBeku extends KomoditasEkspor implements ProtokolKualitas{
    private suhuTarget: number;

    constructor(namaBarang: string, beratKg: number, suhuTarget: number){
        super(namaBarang, beratKg);
        this.suhuTarget = suhuTarget;
    }

    estimasiBiayaKirim(){
        return this.beratKg * 25000;
    }

    cekSuhu(){
        return `Frozen vegetables dijaga ketat pada suhu ${this.suhuTarget}°C.`;
    }
}


// Sistem Manajemen Kontainer (Generics)

class KontainerEkspor<T>{
    private daftarMuatan: T[] = [];

    masukkanMuatan(muatan: T){
        this.daftarMuatan.push(muatan);
    }

    cekIsiKontainer(){
        return this.daftarMuatan;
    }
}

const seladaPremium = new SayurSegar("Selada Hijau Kalbar", 500, "Tinggi");
const mixVeggies = new SayurBeku("Sayuran Beku Campur", 1000, -18);
console.log(seladaPremium.estimasiBiayaKirim());
console.log(seladaPremium.cekSuhu());
console.log("===============================================================");
console.log(mixVeggies.estimasiBiayaKirim());
console.log(mixVeggies.cekSuhu());
console.log("===============================================================");

const kontainerSegar = new KontainerEkspor<SayurSegar>();
kontainerSegar.masukkanMuatan(seladaPremium);
const kontainerBeku = new KontainerEkspor<SayurBeku>();
kontainerBeku.masukkanMuatan(mixVeggies);
console.log(kontainerSegar.cekIsiKontainer());
console.log("===============================================================");
console.log(kontainerBeku.cekIsiKontainer());