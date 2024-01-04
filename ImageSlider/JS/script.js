let flag=0;
showslide(flag);
function converter(digit){
    flag +=digit;
    showslide(flag);
}

function showslide(num){
    let slides = document.getElementsByClassName("slide");
    if(num==slides.length){
        flag=0;
        num=flag;
    }
    if(num==-1){
        flag=slides.length-1;
        num=flag;
    }
    for (const iterator of slides) {
        iterator.style.display="none";
        
    }
    slides[num].style.display="unset";
}