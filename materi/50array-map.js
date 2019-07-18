function panggilMap(){
    var dataKota = ["jakarta", "Banyuwangi","Probolinggo","Jogjakarta"];
    dataKota.map((item,index,array)=>{
        console.log(item);
        console.log(index);
        console.log(array);
    });
}
// Map bukan menampilkan saja tapi mengkopi dari array lama dan membuat array baru
panggilMap();


var arr = [1,2,3,4,5,6];
var newArr = arr.map((a)=>{
    return a*100;
});
console.log(arr);
console.log(newArr);