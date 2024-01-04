let textbox= document.getElementById("textbox");
let char= document.getElementById("char");
let words= document.getElementById("words");

textbox.addEventListener('input',function(){
let inp = textbox.value;
char.innerHTML=inp.length;
inp= inp.trim();
let arr = inp.split(" ");
arr = arr.filter(function(e){
    if (e!=" ") {
        return e;
    }
})
words.innerHTML=arr.length ;
})