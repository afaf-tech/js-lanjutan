
function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    var reg = new RegExp("bersama");

    console.log(reg.exec(data));
}

regex()