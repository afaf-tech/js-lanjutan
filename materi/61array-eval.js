function panggilEval(){
    var x = [1,2,3,4,5,6,7,8,9,10];
    var total = 0;
     for(let i=0; i<x.length; i++){
         total +=x[i];
     };
     console.log(eval(total));
}

panggilEval();

// Fungsi eval hanya akan mengeksekusi syntax yang bernilai string, sekalipun bisa mengeksekusi nilai bilangan baik itu integer, real, dan sebagainya, hal tersebut akan menimbulkan eror pada baris program selanjutnya, dengan kata lain baris selanjutnya tidak akan dieksekusi.
