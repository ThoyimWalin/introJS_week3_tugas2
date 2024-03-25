

const reverseWords = (kalimat) => {
    return new Promise((resolve, reject) => {
        if (typeof kalimat === 'string') {
            const reversed = kalimat.split(' ').reverse().join(' ');
            resolve(reversed);
        } else {
            reject(new Error('Input harus berupa string.'));
        }
    });
}

const startAPP = async () => {
    try {
        const kalAwal = ("Selamat Berbuka Puasa");
        const kalTerbalik = await reverseWords(kalAwal);
        console.log(`Kalimat awal : ${kalAwal}`);
        console.log(`Kalimat terbalik : ${kalTerbalik}`);
    } catch (error) {
        console.error(error.message);
    }
}

startAPP();