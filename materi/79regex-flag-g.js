
function panggilRegexp() {
    let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";
   
    console.log(str.match(/c/g))
   }
   
   panggilRegexp()
   
function panggilRegexpx() {
    let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";
   
    console.log(str.match(/c/))
   }
   
   panggilRegexpx();


//    Sekarang kita akan mencoba membuat sebuah function panggilRegexp() yang didalamnya kita akan menuliskan code RegExp didalamnya.

// Kita akan mencoba melakukan PENCOCOKAN data pada sebuah variable string, di dalam Regexp untuk melakukan PENCOCOKAN adalah menggunakan perintah match()

// Di dalamnya kita akan memasukkan flag “g”, dimana flag “g” ini sendiri berfungsi sifatnya GLOBAL yaitu untuk melakukan pencarian data yang sama di semua data STRING yang dijadikan acuan kita untuk mencocokan data tersebut