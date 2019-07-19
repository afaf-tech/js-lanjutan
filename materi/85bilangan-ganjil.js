function ganjil(){
    var bilgan=[];
    for(let i=0; i<30; i++){
        if(i%2 !==0){
            bilgan.push(i);
        }
    };

    return bilgan;
}


console.log(ganjil());

