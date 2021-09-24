function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

document.getElementById("list").style.display = "none";

function myFunction()
{
  document.getElementById("list").style.display = "block";

}


fetchJSONFile('https://jsonplaceholder.typicode.com/todos', function(data){
var list="";
 for (let i=0;i<data.length;i++)
{
    if(data[i].completed==true)
    {
      list+=`<li><input type="checkbox" checked disabled> ${data[i].title}</li>`;
    }
    else{

        list+=`<li><input type="checkbox" id="chkbox" onchange="check()"> ${data[i].title}</li>`;

    }
}

document.getElementById("list").innerHTML=list;
});

function check()
{
 var totalChecked = document.querySelectorAll('input[id="chkbox"]:checked').length;

  
  const myPromise = new Promise((resolve, reject) => {  
    
     if (totalChecked===5)
    {    
        resolve("Congatulations 5 tasks Selected Successfully ");  
    }
     else {    
        reject('Promise is rejected');  
    }

   
});

myPromise.then((message) => { 
    console.log(message);
    setTimeout(() => {alert(message);  }, 100);
}).catch((message) => { 
    console.log(message);
});
  
  

}




  
  