function factoriser2Nombre() {
    let resteDiv;
    let dividende = prompt("donner la valeur du dividende");
    let diviseur  = prompt("donner la valeur du diviseur");
    if (diviseur == 0) {
        alert("le diviseur ne peut être 0");

    } else {
        while (resteDiv != 0) {
            resteDiv = dividende % diviseur;
            if (resteDiv != 0) {
                dividende = diviseur;
                diviseur = resteDiv;
            }
        }
        alert("le PGCD est : " + diviseur);
    }
    continuer = prompt("voulez vous continuer o pour oui");
}

factoriser2Nombre();