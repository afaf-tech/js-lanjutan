function panggilNumber(){
    var  a = "9";
    var b = 3;
    hasil = a+ b;

    console.log(hasil);
    hasil2  = Number(a)+b;
    console.log(hasil2);
    
    var e = "13.78";
    var r = "9 naga";
    var t = "199.99 meter";
    hasil3 = parseInt(e);
    hasil4= parseInt(r);
    hasil5 = parseInt(t);
    hasil6 = parseFloat(e);
    hasil7= parseFloat(r);
    hasil8 = parseFloat(t);
    console.log("Parse Int :"+hasil3);
    console.log("Parse Int :"+hasil4);
    console.log("Parse Int :"+hasil5);
    console.log("Parse Int :"+hasil6);
    console.log("Parse Int :"+hasil7);
    console.log("Parse Int :"+hasil8);
}
panggilNumber();