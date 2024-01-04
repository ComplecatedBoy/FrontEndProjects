let nv = document.getElementById("navbar");
function changeBG(clr){
if (clr=='black') {
    document.body.style.color='white';
    nv.style.backgroundColor="coral";
    nv.style.color="black";
}else{
    document.body.style.color="unset";
    nv.style.backgroundColor="black";
    nv.style.color="white";
}
document.body.style.backgroundColor=clr;


}
window.addEventListener('scroll',function(){
if (this.pageYOffset>345) {
  nv.classList.add("sticky");
    
} else {
    nv.classList.remove("sticky");
}

})


