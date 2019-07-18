var kal = "Saya ingin belajar bersama";
var newarr = kal.split(" ");

console.log(kal);
console.log(newarr);

newarr.forEach((a,b,c)=>{
    console.log(a + " Index Ke : " + b);
});