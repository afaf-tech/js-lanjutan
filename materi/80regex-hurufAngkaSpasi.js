// function panggilRegexp(value) {
//     // mengambil semua data
//     var ambilData = value.match(/\w/g)
//     console.log(ambilData)
//  }
 
//  panggilRegexp("Bulan ke 1 sd ke 4");

//  // angka saja
 
// function panggilRegexp(value) {
//     var ambilData = value.match(/\d/g)
//     console.log(ambilData)
//  }
 
//  panggilRegexp("Bulan ke 1 sd ke 4");

 // spasi 
 
function panggilRegexp(value) {
    var ambilData = value.match(/\s/g)
    console.log(ambilData)
    console.log("Banyaknya Spasi : ",ambilData.length)
 }
 
 panggilRegexp("Bulan ke 1 sd ke 4");




//  untuk kecuali tinggal menabahkan \saja pada parameternya contoh /\S/