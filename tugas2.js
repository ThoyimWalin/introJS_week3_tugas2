const PotonganHarga = (totalBelanja, voucher) => {
    return new Promise((resolve, reject) => {
        let potongan = 0;
        if (voucher === 'PIJARFOOD5' && totalBelanja >= 50000) {
            potongan = Math.min((totalBelanja * 50) / 100, 50000);
            resolve(potongan);
        } else if (voucher === 'DITRAKTIRPIJAR' && totalBelanja >= 25000) {
            potongan = Math.min((totalBelanja * 60) / 100, 30000);
            resolve(potongan);
        } else if(voucher === 'DITRAKTIRPIJAR' || voucher === 'PIJARFOOD5'){
            resolve(potongan)
            
        } else if(voucher === '' || voucher === ''){
            resolve(potongan)  
        } else  {
            reject('Kode promo invalid / total belanja tidak memenuhi syarat');
        }
    });
};

const BiayaPengiriman = (jarak) => {
    return new Promise((resolve, reject) => {
        if (typeof jarak !== 'number' || jarak <= 0) {
            reject('Jarak harus berupa angka diatas 0');
        }
        if (jarak <= 2) {
            resolve(5000);
        } else {
            resolve(5000 + (jarak - 2) * 3000);
        }
    });
};

const Pajak = (totalBelanja, restoran) => {
    return new Promise((resolve, reject) => {
        if (typeof totalBelanja !== 'number' || typeof restoran !== 'boolean') {
            reject('Total belanja harus berupa angka dan parameter restoran harus boolean.');
        }
        if (restoran) {
            resolve((totalBelanja * 5) / 100);
        } else {
            resolve(0);
        }
    });
};

const PijarFood = (totalBelanja, voucher, jarak, restoran) => {
    return new Promise(async (resolve, reject) => {
        try {
            const diskon = await PotonganHarga(totalBelanja, voucher);
            const biayaAntar = await BiayaPengiriman(jarak);
            const pajakValue = await Pajak(totalBelanja, restoran);
            const subtotal = totalBelanja - diskon + biayaAntar + pajakValue;
            console.log(`
        Harga       : Rp.${totalBelanja}
        Potongan    : Rp.${diskon} -
                    : Rp.${totalBelanja - diskon}
        Biaya Antar : Rp.${biayaAntar}
        Pajak       : Rp.${pajakValue} +
        Sub Total   : Rp.${subtotal}
        `)
            resolve(subtotal);
        } catch (error) {
            reject(error);
        }
    });
};

PijarFood(100000, '', 5, true)
    .then(totalBiaya => {
        console.log(`Total biaya : Rp.${totalBiaya}`);
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });

