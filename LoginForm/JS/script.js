let password = document.getElementById("password");
    console.log(password);

    let uname = document.getElementById("uname");
    function validateform(){
        let flag=0;
        if (uname.value=="") {
            uname.nextElementSibling.innerHTML= "*Username is empty!"
            flag=0;
        }else if (uname.value.length<3) {
            uname.nextElementSibling.innerHTML= "*Minimum three letters required"
            flag=0;
        } else {
            flag=1;
            uname.nextElementSibling.innerHTML= ""
        }

        if (password.value=="") {
            password.nextElementSibling.innerHTML= "*password is empty!"
            flag=0;
        }else if (password.value.length<6) {
            password.nextElementSibling.innerHTML= "*Minimum six digits required";
            flag=0;
        } else {
            flag=1;
            password.nextElementSibling.innerHTML= "*Minimum six digits required";
        }     
      if(flag==0){
        return false;
      }else{
        return true;
      }
    }
    