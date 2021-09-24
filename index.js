
var user= document.getElementById("name");
var pwd=document.getElementById("pwd");
var suser=document.getElementById("sname");

//calling this function on button click event in html file
function validate(callback)
{
    var flag="";

    if(user.value=="admin" && pwd.value=="12345")
     {
     flag=true;
     callback(flag);
     return true;
     }
     else{
        flag=false;
        callback(flag);
         return false;
     }
  }
  
//call backfunction to
 function navigate(status)
  {
       if (status)
       {       
       window.location.href = "ToDoList.html";
       return true;
       
       }
       else{
        document.getElementById("sname").innerHTML="* Enter valid credentials";
        document.getElementById("sname").style.color="red";
       }
            
    
 
    }
    function clear()
    {
        document.getElementById("sname").innerHTML="";
        return true;

    }
    document.getElementById("name").onkeyup = clear;
    document.getElementById("pwd").onkeyup = clear;
        
