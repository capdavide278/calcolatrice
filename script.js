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
    let risultato = moltiplicazioneUtile(valore1, valore2)

    console.log(risultato)
    document.getElementById("risultato").innerHTML = "= "+ risultato
}

//moltiplicazione che serve per far uscire la divisione
function moltiplicazioneUtile(valore1, valore2){
    let risultato = 0
    for(let i=1; i<=valore2;i++){
        risultato += parseInt(valore1)
    }
    return risultato
}

function divisione() {
    let valore1 = parseFloat(document.getElementById("primoNumero").value)
    let valore2 = parseFloat(document.getElementById("secondoNumero").value)
    /* let risultato = valore1 / valore2 */
    var risultato = 0.00
    const precisione = 3
    
    if (valore2 > 0) {
        risultato = divisioneRicorsiva(valore1, valore2, 0, risultato)

        console.log(risultato);
        document.getElementById("risultato").innerHTML = "= "+ risultato.toFixed(3)
    }else{
        document.getElementById("risultato").innerHTML="Cazzo scrivi è infinito"
    }

}

function divisioneRicorsiva(valore1, valore2, count, risultato){
    if(count>3){
        return risultato
    }

    let resto = valore1
    if (valore2 > 0) {
        while(valore1 > 0 && resto >= valore2){
            valore1-=valore2
            resto -= valore2
            risultato = risultato+1
        }

        if(resto === 0){
            return risultato
        }

        console.log(resto);
        console.log(risultato);
        console.log("decimali: "+decimali(count,risultato));
        console.log("valore1: "+ valore1);
        console.log("valore2: "+ valore2);

        return decimali(count, risultato) + divisioneRicorsiva(moltiplicazioneUtile(resto, 10), valore2, count+1, 0);
    }
}

function decimali(count, risultato){
    let pappone = risultato.toString()

    if(count === 0){
        return parseFloat(pappone)
    }
    let prefix = "0."
    for(let i=1; i<count;i++){
        prefix +="0"
        console.log(prefix)
    }
    return parseFloat(prefix+pappone)
}