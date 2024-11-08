function initTab() {
    let entreeSerie
    do {
        entreeSerie = parseInt (prompt("saisir le nombres de serie de chiffres désiré"));
        // je m assure que la valeur soit numérique 
        if (isNaN(entreeSerie)
        ) {
            alert("saisir une valeur nummérique");
        }
    } while (isNaN(entreeSerie));
    let tab1 = [] ;
    for (let i = 0; i < entreeSerie; i++) {
        let randomInt = Math.random() * 100 ;
        randomInt = parseInt(randomInt);
        tab1.push(  randomInt);
    }
    return tab1;
} 

initTab()
console.log(initTab)