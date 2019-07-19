var array = [5,12,8,30,44];
function isLargeNumber(element){
    return element > 12;
}
// cuma mengamnbil satu data dan yang pertama
console.log(array.find(isLargeNumber));
console.log(array.findIndex(isLargeNumber));