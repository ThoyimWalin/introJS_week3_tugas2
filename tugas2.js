const PotonganHarga = (totalBelanja, voucher) => {
    let potongan = 0
    if (voucher === 'PIJARFOOD5' && totalBelanja >= 50000) {
        potongan = Math.min((totalBelanja * 50) / 100, 50000)
    } else if (voucher === 'DITRAKTIRPIJAR' && totalBelanja >= 25000) {
        potongan = Math.min((totalBelanja * 60) / 100, 30000)
    } else {
        console.log('Kode promo invalid')
    }
    return potongan
}

const BiayaPengiriman = (jarak) => {
    if (typeof jarak !== 'number' || jarak <= 0) {
        console.log('Jarak harus berupa angka di atas 0')
    }
    if (jarak <= 2) {
        return 5000
    } else {
        return 5000 + (jarak - 2) * 3000
    }
}

const Pajak = (totalBelanja, restoran) => {
    if (typeof totalBelanja !== 'number' || typeof restoran !== 'boolean') {
        console.log('Total belanja harus berupa angka dan parameter restoran harus boolean.');
    }
    if (restoran) {
        return (totalBelanja * 5) / 100;
    } else {
        return 0;
    }
}

const PijarFood = (totalBelanja, voucher, jarak, restoran) => {
    const diskon = PotonganHarga(totalBelanja, voucher)
    const biayaAntar = BiayaPengiriman(jarak)
    const pajakValue = Pajak(totalBelanja, restoran)
    const subtotal = totalBelanja - diskon + biayaAntar + pajakValue
    console.log(`
        Harga       : Rp.${totalBelanja}
        Potongan    : Rp.${diskon} -
                    : Rp.${totalBelanja - diskon}
        Biaya Antar : Rp.${biayaAntar}
        Pajak       : Rp.${pajakValue} +
        Sub Total   : Rp.${subtotal}
    `);
    return subtotal;
};

PijarFood(75000, 'PIJARFOOD5', 2, true)

