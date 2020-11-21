// PULSANTE FACILE
var buttonEasy = document.getElementById('easy');
buttonEasy.addEventListener("click",
  function () {
    difficulty = "facile";
    alert("Hai scelto facile!");
    console.log("Difficoltà inserita facile");

    var easyChosen = document.getElementById('easy');
    easyChosen.className = ("chosen");
  }
);

// PULSANTE MEDIO
var buttonMedium = document.getElementById('medium');
buttonMedium.addEventListener("click",
  function () {
    difficulty = "medio";
    alert("Hai scelto medio!");
    console.log("Difficoltà inserita medio");

    var mediumChosen = document.getElementById('medium');
    mediumChosen.className = ("chosen");
  }
);

// PULSANTE DIFFICILE
var buttonHard = document.getElementById('hard');
buttonHard.addEventListener("click",
  function () {
    difficulty = "difficile";
    alert("Hai scelto difficile!");
    console.log("Difficoltà inserita difficile");

    var hardChosen = document.getElementById('hard');
    hardChosen.className = ("chosen");
  }
);

// PULSANTE AVVIA GIOCO
var buttonStartGame = document.getElementById('start_game');
buttonStartGame.addEventListener("click",
  function () {
    // SEZIONE BONUS
    switch (difficulty) {
      case "medio":
        numberMin = 1;
        numberMax = 80;
        console.log("Numero massimo " + numberMax);
        break;
      case "difficile":
        numberMin = 1;
        numberMax = 50;
        console.log("Numero massimo " + numberMax);
        break;
      default:
        numberMin = 1;
        numberMax = 100;
        console.log("Numero massimo " + numberMax);
    }

    // 1 - PARTE DEL COMPUTER
    // Creo l'array vuoto
    arrayBombs = [];
    do {
      // La bomba viene generata random ad ogni ciclo finchè non ne vengono generate 16 diverse
      var bomb = generateRandomBombs (numberMin, numberMax);
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
    arrayUser = [];
    do {
      // Verifico che l'utente inserisca i numeri correttamente
        do {
          var userNumber = parseInt(prompt("Inserisci un numero compreso tra " + numberMin + " e " + numberMax));
          if (isNaN(userNumber) || userNumber < numberMin || userNumber > numberMax) {
            // Feedback per l'utente se sbaglia l'inserimento
            alert("Devi inserire un valore corretto !");
          }
        } while (isNaN(userNumber) || userNumber < numberMin || userNumber > numberMax);

      // Verifico se il numero dell'utente non sia una bomba
      var checkExist = checkForDuplicate(userNumber, arrayBombs);
      console.log("Numero inserito " + userNumber);
      console.log("Il numero era tra le bombe? " + checkExist);

      // Qui verifico se l'utente non abbia già inserito questo numero
      var checkExist2 = checkForDuplicate(userNumber, arrayUser);
      if (checkExist2 == false) {
        arrayUser.push(userNumber);
      } else {
        alert("Hai già inserito questo numero. Riprova.");
      }
      console.log(arrayUser);
      console.log(" ");

      // L'utente vince se inserisce il numero massimo possibile di numeri corretti, la condizione sta inserita nel while in fondo
      var maxArrayUserLength = 100 - arrayBombs.length;

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

// PULSANTE RESETTA
var buttonStartGame = document.getElementById('reset_game');
buttonStartGame.addEventListener("click",
  function () {
    // Scompare il riquadro
    var endGame = document.getElementById('end_game');
    endGame.classList = "hidden";
    var endGameMessage = document.getElementById('message');
    endGameMessage.className = "hidden";
    var endGameScore = document.getElementById('score');
    endGameScore.className = "hidden";
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
