function panggilRegex(value){
    // mengambil ke
    var ambilData = value.match(/ke/g);
// mengambil k&e
    var kdane = value.match(/[ke]/g);
    var keab = value.match(/[keaB]/g)
    var kecuali = value.match(/[^ke]/g)
    var antara = value.match(/[a-i]/g)
    console.log(ambilData);
    console.log(kdane);
    console.log(keab);
    console.log(kecuali);
    console.log("antara : "+antara);
}

panggilRegex("Bulan ke 1 sd ke empat")