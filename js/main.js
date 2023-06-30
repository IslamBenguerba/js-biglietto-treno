let eta = prompt('quanti anni hai?')
// let prezzoBiglietto = parseInt(prompt('importo'));
let Biglietto = parseInt(prompt('qualè la distanza'));
let costoBiglietto = Biglietto * 0.21;
function prezzo(eta, costoBiglietto) {
    if (eta < 18) {
        let sconto = ((costoBiglietto * 20) / 100);
        let prezzoScontato = costoBiglietto - sconto;
        console.log(` questo è lo sconto ${sconto}`)
        return prezzoScontato
    } else if (eta > 65) {
        let sconto = ((costoBiglietto * 40) / 100);
        let prezzoScontato = costoBiglietto - sconto;
        console.log(` questo è lo sconto ${sconto}`);
        console.log(`il prezzo finale è ${prezzoScontato}`);
        return prezzoScontato
    } else {
        prezzoScontato = costoBiglietto;
        return prezzoScontato
    }

}
prezzofinale = prezzo(eta, costoBiglietto)
console.log(eta)
console.log(costoBiglietto);
console.log(prezzofinale);
document.getElementById('risultato').innerHTML = `il prezzo finale è ${prezzofinale}`
document.getElementById('dati').innerHTML = `la tua eta è ${eta} e hai dichiarato un percorso di ${Biglietto}km il prezzo intero è ${costoBiglietto}`