const tacheInput =  document.getElementById("tacheInput");
const listeTache = document.getElementById("listeTache");
const ajouterTache = document.getElementById("addTask");

ajouterTache.addEventListener("click",addTask);

function addTask(){
    console.log('ici');
    
    const tacheText = tacheInput.value;
    if (tacheText != ""){
        let nvTache = document.createElement("label");
        let checkbox = document.createElement("input");
        let nvDiv = document.createTextNode(nvTache)
        let copieOk = nvTache + checkbox + nvDiv;
        ///ajouter les attributs (setattribute)
        // creer label + valeur input (append child)

        //ajouter checkbox + label a la div (append child)
        
        // le tout append child sur le DOM
        nvTache.appendChild(copieOk)
    }
}ajouterTache.addEventListener("click", ajouterTache)

function tacheFini(event){
    const tache = event.target;
    tache.classList.toggle("terminé")
}
li.addEventListener("click", tacheFini);

