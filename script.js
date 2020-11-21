// 1 - PARTE DEL COMPUTER
// Creo l'array vuoto
arrayBombs = [];
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
// 2.1 - Pulsante Avvia Gioco
// Creo un array vuoto per i numeri inseriti dall'utente
arrayUser = [];
var buttonStartGame = document.getElementById('start_game');
buttonStartGame.addEventListener("click",
  function () {
    do {
      // Verifico che l'utente inserisca i numeri correttamente
        do {
          var userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 100"));
          if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            // Feedback per l'utente se sbaglia l'inserimento
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
      // Compare il riquadro
      var endGame = document.getElementById('end_game');
      endGame.className = "visible";
      var endGameMessage = document.getElementById('message');
      endGameMessage.className = "visible";
      var endGameScore = document.getElementById('score');
      endGameScore.className = "visible";
      // Scrittura dati finali
      document.getElementById('message').innerHTML = "game over.";
      document.getElementById('score').innerHTML = "punteggio " + arrayUser.length;
    }
    // Se vinci
    if (arrayUser.length == maxArrayUserLength) {
      // Compare il riquadro
      var endGame = document.getElementById('end_game');
      endGame.className = "visible";
      var endGameMessage = document.getElementById('message');
      endGameMessage.className = "visible";
      var endGameScore = document.getElementById('score');
      endGameScore.className = "visible";
      // Scrittura dati finali
      document.getElementById('message').innerHTML = "hai vinto !!!";
      document.getElementById('score').innerHTML = "hai ottenuto il punteggio massimo: " + arrayUser.length;
    }
  }
)

// 2.2 - Pulsante Resetta
var buttonStartGame = document.getElementById('reset_game');
buttonStartGame.addEventListener("click",
  function () {
    // Scompare il riquadro
    var endGame = document.getElementById('end_game');
    endGame.className = "hidden";
    var endGameMessage = document.getElementById('message');
    endGameMessage.className = "hidden";
    var endGameScore = document.getElementById('score');
    endGameScore.className = "hidden";

    // Svuoto l'array delle bombe e l'array utente
    arrayBombs = [];
    console.log("Array bombe appena svuotato " + arrayBombs);
    arrayUser = [];
    console.log("Array utente appena svuotato " + arrayUser);

    // Ricreo altre bombe
    arrayBombs = [];
    do {
      var bomb = generateRandomBombs (1, 100);
      var checkExist0 = checkForDuplicate(bomb, arrayBombs);
      if (checkExist0 == false) {
        arrayBombs.push(bomb);
      }
    } while (arrayBombs.length < 16);
    console.log(arrayBombs);
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
