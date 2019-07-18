function panggilJoin(){
    var desa = ['Lowayu', 'Wonokerto','Bulangan', 'Sawo'];
    console.log(desa);
    var result = desa.join(",");
    return result;
}
// Join merubah array menjadi string /
// masukkanlah -/ apapaun sejenisnya kedalam parameter join("-")
var a = panggilJoin();
console.log(a);