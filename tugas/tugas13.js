function panggilUnshift(){
    var buah = ['jeruk','Nanas']

    console.log(buah);
    // masukkan nilai dari depan
    buah.unshift('Apel', 'Mangga');

    return buah;
}

console.log(panggilUnshift());