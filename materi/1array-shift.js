function panggilShift(){
    var kota = ['Jakarta', 'Bandung','Surabaya', 'Medan','Salatiga']

    console.log(kota);
    console.log("=====");

    // kota = kota.shift();
    var kota2  = kota.shift();

    console.log(kota2);

    return kota;
}

// shift mengambil tanpa copy atau = cut

// Jika tanpa console.log maka tidak akan menampilkan data yang di return
console.log(panggilShift());