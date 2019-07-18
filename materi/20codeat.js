function KodeAt(){
    var kode = "Saya Belajar di Pasar";
    var bBesar = "B";
    // Menammpilkan kode asli dari B
    // index dimulai dari 0
    console.log(kode.charCodeAt(5));
    console.log(bBesar.charCodeAt());
}
KodeAt();

function codePoint(){
    console.log(String.fromCodePoint(67, 0x2744));
}

codePoint();