let n = 0;
let reslt = 0;

console.log('ici');

do {
    n = parseInt(prompt("saisir votre nombre de copie"))
    if(isNaN(n)){
        alert("saisir une valeur numérique");
    }
}
    while (isNaN(n))

if (n <= 10) {
    reslt = 0.1 *n}
        else if (n <= 20) {
        reslt = 0.09 *n + 0.1}else if(
                n >= 21){
                reslt = (0.08 *n) + 0.3} 
                
alert(reslt) ;
