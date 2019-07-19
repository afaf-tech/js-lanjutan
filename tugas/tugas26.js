var x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16, -99924.23];

var d = isFinite("s");
console.log(d);
console.log("=====");


//  var f = x.forEach(function(a){
     
// if(isFinite(a)){
//     console.log("ANgka " +a+" Is Not Infinity");
//     console.log(z);
//     console.log(typeof(z));
//     console.log(isFinite(z));
// }else{
//     console.log("Finite");
// }
//     return isFinite(a);
// });

// console.log(f);

function panggilPerulangan() {
    var dataKota = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16, -99924.23];
    var dataBaru = dataKota.map((item, index, array) => {
      return 'Kota : ' + isFinite(item);
    });
    console.log(dataBaru);
   }
   
   panggilPerulangan();