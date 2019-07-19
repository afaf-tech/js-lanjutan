var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
// function hhh(a){
//     return a>10;
// }
// angka.filter(hhh());
// console.log(angka);

// console.log("Filter : "+ angka);
console.log("Sebelumnya : "+ angka);
angka.sort();
console.log("Ascending : "+ angka);
angka.reverse()
console.log("Descending : "+ angka);

var baru = angka.filter(function(satu){
    return satu > 10;
});
console.log("Filter > 10 : " +baru);
// var arrLama= [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
// function data(element , index , array) {
//  console.log(element>10)
// //  console.log(index)
// //  console.log(array)
// }
// var arrBaru = arrLama.filter(data);
// var arrLama= ["andi", "cici", "riko", "steven", "endi", "hilman"];

// var arrBaru = arrLama.filter(function(kata){
//   return kata  > 10;
// });
// console.log(arrBaru);

