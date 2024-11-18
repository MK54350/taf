let btn = document.createElement("BUTTON");        
let t = document.createTextNode("ajout tache");    
btn.appendChild(t);                                
document.body.appendChild(btn);   

function myFunction() {

    let checkBox = document.getElementById("myCheck");
    let text = document.getElementById("text");
    
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    } 

