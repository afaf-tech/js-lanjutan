// flag “i” : dimana flag “i” ini sendiri berfungsi untuk menjadikan keyword / kata kunci dalam pencarian menjadi TIDAK  case-insensitive, sehingga jika kita memasukkan “A” atau “a” maka akan di anggap sama.

function regex(){
    var data = "abcdefghijkKlmnopqrstuvwxyz";
    console.log(data.search(/K/));
    console.log(data.search(/K/i));
    console.log(data.search(/k/i/));
}

regex();