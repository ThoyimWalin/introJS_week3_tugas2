const divideAndShort = (number) => {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            const angkaSplit0 = number.toString().split('0')
            console.log(angkaSplit0)
            const subSplit = angkaSplit0.map((x) => x.split(""))
            console.log(subSplit)
            const angkaShort =  subSplit.map((x) => x.sort())
            console.log(angkaShort)
            const subGabung =  angkaShort.map((x) => x.join(""))
            console.log(subGabung);
            const angkaGabung =  subGabung.join("")
            console.log(angkaGabung);
            resolve(angkaGabung);
        } else {
            reject(new Error('Input harus berupa string.'));
        }
    });
}

const startAPP = async () => {
    try {
        const angka = (3412340736650927);
        const angkaUrut = await divideAndShort(angka);
        console.log(`angka awal : ${angka}`);
        console.log(`angka urut : ${angkaUrut}`);
    } catch (error) {
        console.error(error.message);
    }
}

startAPP();