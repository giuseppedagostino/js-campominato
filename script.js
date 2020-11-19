// STEPS
// 1 FATTO Creo un array di bombe vuoto
// 2 FATTO Creo una funzione che genera 16 numeri casuali e li pusha nell'array
// 3 FATTO Creo una funzione che vada a verificare se il numero inserito dall'utente è già presente nell'array
// 4 Faccio inserire all'utente i numeri e gli faccio verificare se questi sono tra le bombe

// 1 - PARTE DEL COMPUTER
// Creo l'array vuoto
var arrayBombs = [];
// Richiamo la funzione per pusharci dentro 16 numeri random con valore massimo 100
do {
  // La bomba viene generata random ad ogni ciclo
  var bomb = generateRandomBombs (1, 100);
  // L'altra funzione cerca nell'array se c'è già quel numero prima di pushare
  var checkForDuplicate = checkForBomb(bomb, arrayBombs);
  if (checkForDuplicate == false) {
    arrayBombs.push(bomb);
  }
} while (arrayBombs.length < 16);
// Stampo il mio array per verificare
console.log(arrayBombs);

// 2 - PARTE DELL'UTENTE
// Ad ogni click del pulsante inserisco un altro numero (mica potevo refreshare la pagina ogni volta)
var buttonStartGame = document.getElementById('start_game');
buttonStartGame.addEventListener("click",
  function () {
    do {
      var userNumber = prompt("Inserisci un numero compreso tra 1 e 100");
      // Richiamo la funzione checkForBomb per verificare la presenza del numero inserito nell'array
      var checkExist = checkForBomb(userNumber, arrayBombs);
      console.log("Numero inserito " + userNumber);
      console.log("Il numero era tra le bombe? " + checkExist);
      console.log(" ");
      // Gli sto dicendo di richiedere il numero finchè x resta uguale a false
    } while (checkExist == false);

    if (checkExist == true) {
      // Forse era più bello boom?
      document.getElementById('message').innerHTML = "Game over.";
    }
  }
)

// 3 - FUNZIONI
// Avrei potuto usare Math.ceil e togliere il valore min (Poichè qua sarà sempre 1) ma per esercizio va bene così
function generateRandomBombs(min, max) {
    return Math.floor(Math.random()*max) + min;
}

function checkForBomb(number, array) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      result = true;
    }
  }
  // Se non la trova result sarà uguale a false (come inizializzato), non ho scritto l'else per abbreviare, va in automatico
  return result;
}
