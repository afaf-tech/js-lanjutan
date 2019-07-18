function cariKata(par1, par2){
    // String(param);
    var isi = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable";
    // param.toString();
    console.log(isi.match(par1));
    console.log(isi.match(par2));
}
cariKata("are", "words");