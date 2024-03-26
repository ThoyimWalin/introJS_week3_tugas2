const cekPalindrom = (kata) => {
    if (typeof kata === 'string') {
        const reversed = kata.split('').reverse().join('');
        if (kata.toLowerCase() === reversed.toLowerCase()) {
            console.log(`${kata} adalah palindrom.`);
        } else {
            console.log(`${kata} bukan palindrom.`);
        }
    } else {
        console.log('Input harus berupa string.');
    }
}


cekPalindrom('malam');

const reverseWords = (kalimat) => {
    if (typeof kalimat === 'string') {
        const reversed = kalimat.split(' ').reverse().join(' ');
        console.log(`Kalimat awal : ${kalimat}`);
        console.log(`Kalimat terbalik : ${reversed}`);
    } else {
        console.log('Input harus berupa string.');
    }
}

reverseWords('saya adalah kamu');
