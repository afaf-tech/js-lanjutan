function panggilSort(){
    var kota = ["Jakarta", "Jogja", "Ciamis","Cibubur"];
    console.log(kota);
    console.log("=====");
    return kota.sort();
}

// URUT BErsasarkan Abjad;
// jika angka maka fungsi SORT() akan mengkonversi sementara ke string
console.log(panggilSort());

// Nilai Pengembalian:	Objek Array, dengan item diurutkan
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(points);