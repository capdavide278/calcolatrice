function addizione() {
    let valore1 = document.getElementById("primoNumero").value
    let valore2 = document.getElementById("secondoNumero").value
    let risultato = parseInt(valore1) + parseInt(valore2)
    
    console.log(risultato);
    document.getElementById("risultato").innerHTML = "= "+ risultato
}

function sottrazione() {
    let valore1 = document.getElementById("primoNumero").value
    let valore2 = document.getElementById("secondoNumero").value
    let risultato = valore1 - valore2
    
    console.log(risultato);
    document.getElementById("risultato").innerHTML = "= "+ risultato
}

function moltiplicazione() {
    let valore1 = document.getElementById("primoNumero").value
    let valore2 = document.getElementById("secondoNumero").value
    /* let risultato = valore1 * valore2 */
    let risultato = 0
    for(let i=1; i<=valore2;i++){
        risultato += parseInt(valore1)
    }
    console.log(risultato)
    document.getElementById("risultato").innerHTML = "= "+ risultato
}

function divisione() {
    let valore1 = parseFloat(document.getElementById("primoNumero").value)
    let valore2 = parseFloat(document.getElementById("secondoNumero").value)
    /* let risultato = valore1 / valore2 */
    var risultato = 0.00
    let resto = valore1
    if (valore2 > 0) {
        while(valore1 > 0 && resto >= valore2){
            valore1-=valore2
            resto -= valore2
            risultato = risultato+1
        }
        if (resto != 0) {
            risultato = risultato + (resto / valore2);
/*             console.log("Resto: " + resto);
            console.log("Risultato finale: " + risultato);
            document.getElementById("risultato").innerHTML = "= " + risultato.toFixed(2); */
        }
        console.log(resto);
        console.log(risultato);
        document.getElementById("risultato").innerHTML = "= "+ risultato.toFixed(2)
    }else{
        document.getElementById("risultato").innerHTML="Cazzo scrivi è infinito"
    }

}

