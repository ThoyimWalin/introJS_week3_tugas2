const divideAndShort = (number) => {
    if (typeof number !== 'number') {
        console.log('Input harus berupa number');
    } else {
        const angkaSplit0 = number.toString().split('0');
        console.log(angkaSplit0);

        const subSplit = angkaSplit0.map((x) => x.split(""));
        console.log(subSplit);

        const angkaShort = subSplit.map((x) => x.sort());
        console.log(angkaShort);

        const subGabung = angkaShort.map((x) => x.join(""));
        console.log(subGabung);

        const angkaGabung = subGabung.join("");
        console.log(angkaGabung);

        console.log(`angka awal : ${number}`);
        console.log(`angka urut : ${angkaGabung}`);
    }

}

divideAndShort(3412340736650927)

