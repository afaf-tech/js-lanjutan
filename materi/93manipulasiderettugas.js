function deretAngka(n) {
    // tulis code jawabanmu di sini
        var hasil ='';
    for(let i=1; i<=n; i++){
        if(i%3===0){
            hasil += 'Nio '
        }else if(i%5===0){
            hasil += "Mic "
        }
        else if(i%3===0 && i%5===0){
            hasil += 'NioMic';
        }
        else{
            hasil += i + ' '
        }
    }
return hasil
}



   
   
   console.log(deretAngka(10))
   console.log(deretAngka(20))
   console.log(deretAngka(30))