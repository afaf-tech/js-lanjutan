var s = "ini ibu budi \n bukan bapaknya";
var re = /./g;


console.log(s.match(re));
var s2 = "sempurna.";
var re2 = /\./g;
console.log(s2.match(re));

var f = "abCD123 efg456 !@#$%^_";

// angka
console.log(f.match(/\d/g));
// selain angka
console.log(f.match(/\D/g));
// angka, huruf, dan underscore
console.log(f.match(/\w/g));
// selain angka, huruf, dan underscore
console.log(f.match(/\W/g));
// whitespace
console.log(f.match(/\s/g));