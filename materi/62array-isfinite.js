function panggilIsFinite(){
    var a = isFinite([1,2,3,4]);
    var b = isFinite(["Jakarta","Depok","Bandung"]);
    var c = isFinite([1,2,3,4,"Wonokerto"]);
    var d = isFinite(-99924.23);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

}
//Mengembalikan true jika nilai nya tak terbatas
panggilIsFinite();