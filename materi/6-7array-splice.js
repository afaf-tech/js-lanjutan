function panggilSplice(){
    var desa = ['Lowayu', 'Wonokerto','Bulangan', 'Sawo'];
    console.log(desa);
    // parameter kedua adlah untuk menghapus nilai setelahnya nomor index dihitung dari posisi nilai yang ingin dimasukkan
    // desa.splice(2,0, 'Karangcangkring');
    desa.splice(0,2);
    console.log(desa);
}

// selain untuk menambah, Splice can be used for deleting some values
panggilSplice();