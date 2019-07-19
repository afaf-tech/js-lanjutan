function panggilNestedArray(value){
    for(let i=0; i<value.length; i++){
        console.log("id", value[i][0]);
        console.log("Name", value[i][1]);
        console.log("Company", value[i][2]);
        console.log("\n");
    };
    // tulis jawabanmu disini
   }
   
   var nestedArray = [
     [1, "Mark Zuckerberg", "Facebook"],
     [2, "Elon Musk", "Tesla"],
     [3, "Bill Gates", "Microsoft"],
     [4, "Steve Jobs", "Apple"]
   ]
   
   panggilNestedArray(nestedArray)



// var nestedArray = [
//     [1, "Mark Zuckerberg", "Facebook"],
//     [2, "Elon Musk", "Tesla"],
//     [3, "Bill Gates", "Microsoft"],
//     [4, "Steve Jobs", "Apple"]
//   ]
//   var l ='';
// function panggilNestedArray2(){
//     for(let i=0; i<nestedArray.length; i++){
//       for(var j=0; j<3; j++){
//         // if(j==0){l+= 'id'}
//         // if else(j==1){l+= 'name'}
//         // else {l+='company'}
//         console.log( nestedArray[i][j]);
//       };
//         console.log("\n");
//     };
// }
   

   
// panggilNestedArray2()