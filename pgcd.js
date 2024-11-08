let dividende;
let diviseur;
let resteDiv;
let continuer = "o";
while(continuer == "o"){
    dividende = prompt ("donner la valeur du dividende");
    diviseur = prompt ("donner la valeur du diviseur");
    if(diviseur == "0"){
        alert("le diviseur ne peut être 0");
        
    }else{
        resteDiv = 1;
        while(resteDiv != 0){
            resteDiv = dividende % diviseur;
            if(resteDiv != 0){
                dividende = diviseur;
                diviseur = resteDiv;
            }
        }
        alert( "le PGCD est : " + diviseur);
    }
    continuer = prompt ("voulez vous continuer o pour oui");
}

