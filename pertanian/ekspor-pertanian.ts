interface ProtokolKualitas{
    cekSuhu: string;
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

class SayurSegar extends KomoditasEkspor implements ProtokolKualitas{}