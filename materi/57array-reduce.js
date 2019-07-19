// REDUCE == MENGURANGI

var aray1 = [1,2,3,4,10];
const reducer = (accumulator, currentValue)=>accumulator+currentValue;
// mengakumulasi atau mengurangi nilai berdasarkan elemet di dalam array

// hasil penambahan semua nilai pada aray1
console.log(aray1.reduce(reducer));
// cara menmabahkan lagi
console.log(aray1.reduce(reducer, 5));


const array2 = [[0,1],[2,3],[4,5]].reduceRight((accumulator, currentValue)=> accumulator.concat(currentValue));

console.log(array2);
