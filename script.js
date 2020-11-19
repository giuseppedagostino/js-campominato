// TRACCIA
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// 1 Creo un array di bombe vuoto
// 2 Creo una funzione che genera 16 numeri casuali e li pusha nell'array
// 3 Creo una funzione che vada a verificare se il numero inserito dall'utente è già presente nell'array
// ATTENZIONE: PER VELOCIZZARMI CON LA CREAZIONE DELL'ESERCIZIO, SOLO MOMENTANEAMENTE USO NUMERI PIU' PICCOLI

// Mi sa che devo togliere il var così l'array diventa universale e viene riconosciuto anche dalle funzioni se richiamato (così posso pusharci richiamandolo)
var arrayBombs = [];
generateRandomBombs(1,12)
console.log(arrayBombs);

// FUNZIONI
function generateRandomBombs(min, max) {
  // La bomba è una variabile locale poichè dev'essere riconosciuta solo dall'array
  // Devo usare un while così genero numeri finchè l'array non arriva a lunghezza 16
  // La sua variabile inizializzata è arrayBombs
  do {
    var bomb = Math.ceil(Math.random()*max);
    arrayBombs.push(bomb);
  } while (arrayBombs.length < 16);
}

function checkForBomb(number, array) {}
