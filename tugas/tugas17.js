var kalimat = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
console.log("=====");
console.log(kalimat.toLowerCase());
console.log(kalimat.toUpperCase());
console.log("=====");

var kal = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
function a(){

    for(let i=0; i<=5; i++){
        var a = [];
        console.log(kal.charCodeAt(i));
        var s = kal.charCodeAt[i];
        a.unshift(s);
        
        console.log(a);
    };
}
a();