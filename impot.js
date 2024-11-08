function imposableOuiOuNon() {

    let sex;
    let ages;
    do {
        sex = prompt("taper h si vous êtes un homme et f si vous êtes une femme");
        if (sex != "h" && sex != "f") {
            alert("veuillez entrer des informations correcte");
        }
    }
    while (sex != "h" && sex != "f");

    do {
        ages = prompt("taper votre age en chiffres");
        parseInt(ages);
        if (
            isNaN(ages)
        ) {
            alert("veuillez entrer des informations correcte");
        }
    } while (isNaN(ages));


    if (sex === "h") {
        // c'est un homme
        if (ages >= 20) {
            alert("imposable");
        } else {
            alert("non imposable")
        }

    } else {
        // c'est une femme
        if (ages == 18 && ages <= 35) {
            alert("imposable");
        } else {
            alert("non imposable")
        }
    }


}

imposableOuiOuNon();