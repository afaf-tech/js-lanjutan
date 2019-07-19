function panggilRegexp() {
    let data = "Belajar Satu Tahun Bersama Niomic";
   
    console.log(data.replace(/Satu/,'1'))
   }
   
   panggilRegexp()



function panggilRegexc() {
    let data = "Belajar-Satu-Tahun-Bersama-Niomic";
    //Tulis Code Jawaban Kamu Di Bawah ini
    // flags g membuat mencari lebih dari satu data
   return data.replace(/-/g, " ");
}

console.log(panggilRegexc());