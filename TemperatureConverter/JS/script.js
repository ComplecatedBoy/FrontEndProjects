let cel= document.getElementById('celcuis');
let fet= document.getElementById('ferenheit');

cel.addEventListener('input',function(){
   let e= this.value;
   let f = e*9/5 +32;
   if (!Number.isInteger(f)) {
    f=f.toPrecision(3);
   }
   fet.value=f;

})
fet.addEventListener('input',function(){
    let e = this.value;
   let c= (e-32)*(5/9);
   if (!Number.isInteger(c)) {
    c=c.toPrecision(6);
   }
   cel.value=c;

})