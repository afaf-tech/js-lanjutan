function panggilNestedArray(value){
    // tulis jawabanmu disini
    for(let i=0; i<=value.length; i++){
        console.log("id : ", value[0][i]);
        console.log("name : ", value[1][i]);
        console.log("company : ", value[2][i]);
    };

}
   
   var nestedArray = [
      [1,2,3,4],
      ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
      ['Facebook', 'Tesla', 'Microsoft', 'Apple']
   ]
   
   panggilNestedArray(nestedArray)


   
// [ [ 1, 'Mark Zuckerberg', 'Facebook' ],
// [ 2, 'Elon Musk', 'Tesla' ],
// [ 3, 'Bill Gates', 'Microsoft' ],
// [ 4, 'Steve Jobs', 'Apple' ] ]