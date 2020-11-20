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
// Creo un array vuoto per i numeri inseriti dall'utente
var arrayUser = [];
var buttonStartGame = document.getElementById('start_game');
buttonStartGame.addEventListener("click",
  function () {
    do {
      // Qui verifico se il numero dell'utente non sia una bomba
      var userNumber = prompt("Inserisci un numero compreso tra 1 e 100");
      // Richiamo la funzione checkForBomb per verificarlo
      var checkExist = checkForBomb(userNumber, arrayBombs);
      console.log("Numero inserito " + userNumber);
      console.log("Il numero era tra le bombe? " + checkExist);

      // Qui verifico se l'utente non abbia già inserito questo numero
      var checkExist2 = checkForBomb(userNumber, arrayUser);
      if (checkExist2 == false) {
        arrayUser.push(userNumber);
      } else {
        alert("AOOOOOOOOOO HAI GIA' INSERITO QUESTO NUMERO");
      }
      console.log(arrayUser);
      console.log(" ");

      // L'utente vince se inserisce il numero massimo possibile di numeri corretti, la condizione sta inserita nel while in fondo e QUESTO E' UN NUMERO MOMENTANEO
      var maxArrayUserLength = 5;

      // Gli sto dicendo di richiedere il numero finchè x resta uguale a false
    } while (checkExist == false && arrayUser.length < maxArrayUserLength);

    // Se becchi una bomba printa Game Over
    if (checkExist == true) {
      // Forse era più bello boom?
      document.getElementById('message').innerHTML = "game over.";
      document.getElementById('score').innerHTML = "punteggio " + arrayUser.length;
    }
    // Se vinci printa Hai Vinto
    if (arrayUser.length == maxArrayUserLength) {
      document.getElementById('message').innerHTML = "hai vinto !!!";
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
// E comunque si, la variabile result potrebbe essere eliminata e la funzione con return funzionerebbe lo stesso
