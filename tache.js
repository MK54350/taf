const listeTaches = document.getElementById("tache");
const tache_termine = document.getElementById("tache_termine")
//const regroupeTache = document.getElementById("regroupe-tache");
const ajout = document.getElementById("nouvelle-Tache");
const boutonTache = document.getElementById("ajout-tache");
const meslistes = document.getElementById("meslistes");
const divP = document.getElementById("divPush");
const recupDiv = document.getElementById("divPush")
let ID = 2;

console.log(ajout.value);


function ajoutDeTache(event) {
    let div = document.createElement("div")
    div.innerHTML = 
    `   <div id="divPush">
                <input type="checkbox" id="scales" name="scales" />
                ${ajout.value}${ID++}
                <label>tache</label>
                <button>Supprimer</button>
            </div>`;
    listeTaches.appendChild(div);
}

boutonTache.addEventListener("click", ajoutDeTache);

function supprimerTache(event) {
    console.log(event);
    
    if (event.target.tagName === "BUTTON") {      
        event.target.parentNode.remove();
    }
    
}
function recupereChek(event){
    console.log("check", event.target);
    
    if(scales === checked){      
    //localStorage.setItem("maCle",divP)
    
    }
}
function transfereDiv(event){
    JSON.parse(localStorage.getItem(divP));
    localStorage.getItem("maCle");
}
divP.addEventListener("click", supprimerTache);