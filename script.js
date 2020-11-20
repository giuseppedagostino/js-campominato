// 1 - PARTE DEL COMPUTER
// Creo l'array vuoto
var arrayBombs = [];
do {
  // La bomba viene generata random ad ogni ciclo finchè non ne vengono generate 16 diverse
  var bomb = generateRandomBombs (1, 100);
  // L'altra funzione cerca nell'array se c'è già quel numero prima di pushare
  var checkExist0 = checkForDuplicate(bomb, arrayBombs);
  if (checkExist0 == false) {
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
      // Verifico che l'utente inserisca i numeri correttamente
        do {
          var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
          if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            alert("Devi inserire un valore corretto !");
          }
        } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100);

      // Verifico se il numero dell'utente non sia una bomba
      var checkExist = checkForDuplicate(userNumber, arrayBombs);
      console.log("Numero inserito " + userNumber);
      console.log("Il numero era tra le bombe? " + checkExist);

      // Qui verifico se l'utente non abbia già inserito questo numero
      var checkExist2 = checkForDuplicate(userNumber, arrayUser);
      if (checkExist2 == false) {
        arrayUser.push(userNumber);
      } else {
        alert("AOOOOOOOOOO HAI GIA' INSERITO QUESTO NUMERO");
      }
      console.log(arrayUser);
      console.log(" ");

      // L'utente vince se inserisce il numero massimo possibile di numeri corretti, la condizione sta inserita nel while in fondo
      var maxArrayUserLength = 100 - arrayBombs.length;
      console.log("Punteggio massimo " + maxArrayUserLength);

      // Gli sto dicendo di richiedere il numero finchè checkExist resta uguale a false
    } while (checkExist == false && arrayUser.length < maxArrayUserLength);

    // Se perdi
    if (checkExist == true) {
      // Forse era più bello boom?
      document.getElementById('message').innerHTML = "game over.";
      document.getElementById('score').innerHTML = "punteggio " + arrayUser.length;
    }
    // Se vinci
    if (arrayUser.length == maxArrayUserLength) {
      document.getElementById('message').innerHTML = "hai vinto !!!";
      document.getElementById('score').innerHTML = "hai ottenuto il punteggio massimo: " + arrayUser.length;
    }
  }
)

// 3 - FUNZIONI
// Avrei potuto usare Math.ceil e togliere il valore min (Poichè qua sarà sempre 1) ma per esercizio va bene così
function generateRandomBombs(min, max) {
    return Math.floor(Math.random()*max) + min;
}

function checkForDuplicate(number, array) {
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
