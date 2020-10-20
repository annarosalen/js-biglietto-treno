// ESERCIZIO: calcolo del prezzo del biglietto del treno
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.


var prezzoalkm = 0.21;
var prezzoFinale;
// input: utente inserisce età
var etaUtente = parseInt(prompt("Inserisci la tua età"));

console.log("età utente", etaUtente);

// input:utente inserisce km da percorrere
var kmUtente = parseInt(prompt("Quanti km vuoi percorrere?"));

console.log("km da percorrere", kmUtente);


// calcolo prezzo in base all'età

//se l'utente è minorenne (80%)
if (etaUtente<18) {
  // 20% di sconto
  prezzoFinale=((prezzoalkm * kmUtente)*(80/100));
  console.log((prezzoalkm * kmUtente)*(80/100));
  // se utente è over 65  (60%)
}else if (etaUtente>65) {
  // sconto del 40%
  prezzoFinale=((prezzoalkm * kmUtente)*(60/100));
  console.log ((prezzoalkm * kmUtente)*(60/100));
  // se età utente tra i 18 e i 65 (100%)
}else {
  // prezzo pieno
  prezzoFinale = (prezzoalkm * kmUtente);
  console.log (prezzoalkm * kmUtente);
}




// OUTPUT: prezzo finale

document.getElementById('titolo').innerHTML="Il prezzo del tuo biglietto è: " + prezzoFinale;
