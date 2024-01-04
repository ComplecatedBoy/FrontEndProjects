var hr=0;
var min=0;
var sec= 0;
var count=0;

var timer=false;


function start(){
timer=true;
stopwatch();
document.getElementById("start").setAttribute("disabled",'"disabled"');
}

function stop(){
    timer=false;
    document.getElementById("start").removeAttribute("disabled");
}
function reset(){
    document.getElementById("start").removeAttribute("disabled");
    document.getElementById("sec").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("milisec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    timer=false;
    hr=0;
    min=0;
    sec=0;

}


function stopwatch(){
if(timer==true){
    count=count+1;
    if(count>99){
        sec+=1;
        count=0;
    }
    if(count<10){
        document.getElementById("milisec").innerHTML="0"+count;
    }else
   {
    document.getElementById("milisec").innerHTML=count;
   }

   if(count<10){
    document.getElementById("milisec").innerHTML="0"+count;
    }else
    {
    document.getElementById("milisec").innerHTML=count;
   }

   if(sec>=60){
    min+=1;
    sec=0;
}
   if(sec<10){
    document.getElementById("sec").innerHTML="0"+sec;
   }else
   {
    document.getElementById("sec").innerHTML=sec;
    }
    if(min>=60){
        hr+=1;
        min=0;
    }

    if(min<10){
    document.getElementById("min").innerHTML="0"+min;
   }else
    {
    document.getElementById("min").innerHTML=min;
    }
    if(hr<10){
        document.getElementById("hr").innerHTML="0"+hr;
       }else
        {
        document.getElementById("hr").innerHTML=hr;
        }

    setTimeout("stopwatch()",10);
}
}
