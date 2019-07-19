
//  FOR : Perintah TIDAK DAPAT : menghasilkan array baru dengan cara seperti ini :

function panggilPerulangan() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    var dataBaru = for (var i = 0; i < dataKota.length; i++) {
      return dataKota[i]
    }
    console.log(dataBaru);
   }
   
   panggilPerulangan();
//    Sehingga yang bisa dilakukan adalah memasukkan data baru tersebut menggunakan tambahan perintah PUSH ke dalam variable bertipe array yang sudah dideklarasikan dulu di atasnya. CONTOH :

function panggilPerulangan() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    var dataBaru = [];
    for (var i = 0; i < dataKota.length; i++) {
      dataBaru.push('Kota: ' + dataKota[i]);
    }
    console.log(dataBaru);
   }
   
   panggilPerulangan();