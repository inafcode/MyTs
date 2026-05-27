interface KartuKaryaProps{
    namaKarya: string;
    hargaRobux: number;
    kategori: string;
}

function KartuKarya(props: KartuKaryaProps){

    const labelPremium = props.hargaRobux >= 500 ? "Premium" : "Standard";

    return (
        <div className="kartu-desain">
            <h3>{props.namaKarya}</h3>
            <p>Kategori: {props.kategori}</p>
            <p>Harga: {props.hargaRobux} Robux</p>
            <p>Status: {labelPremium}</p>
        </div>
    );
}

// <KartuKarya namaKarya="Kemeja Kasual Dark" hargaRobux={150} kategori="Pakaian" />
// <KartuKarya namaKarya="Map Gunung Ascent" hargaRobux={800} kategori="Map 3D" />