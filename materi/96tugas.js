
function panggilRegexp(value) {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
   
    //Tulis Code Jawaban Kamu Di Bawah ini 
    var cK = str.match(/[cK]/g);
    console.log(cK);
    var kK = str.match(/[kK]/g);
    console.log(kK);
    var lL = str.match(/[lL]/g);
    console.log(lL);
}
   
   panggilRegexp()



   
// [ 'c', 'C' ]
// [ 'k', 'K' ]
// [ 'l', 'L' ]