// PULSANTE FACILE
var buttonEasy = document.getElementById('easy');
buttonEasy.addEventListener("click",
  function () {
    difficulty = "facile";
    alert("Hai scelto facile!");

    easyChosen = document.getElementById('easy');
    easyChosen.className = ("chosen");
  }
);

// PULSANTE MEDIO
var buttonMedium = document.getElementById('medium');
buttonMedium.addEventListener("click",
  function () {
    difficulty = "medio";
    alert("Hai scelto medio!");

    mediumChosen = document.getElementById('medium');
    mediumChosen.className = ("chosen");
  }
);

// PULSANTE DIFFICILE
var buttonHard = document.getElementById('hard');
buttonHard.addEventListener("click",
  function () {
    difficulty = "difficile";
    alert("Hai scelto difficile!");

    hardChosen = document.getElementById('hard');
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
    // Creo l'array, genero le bombe e cerco un duplicato
    arrayBombs = [];
    do {
      var bomb = generateRandomBombs (numberMin, numberMax);
      var checkExist0 = checkForDuplicate(bomb, arrayBombs);
      if (checkExist0 == false) {
        arrayBombs.push(bomb);
      }
    } while (arrayBombs.length < 16);

    // 2 - PARTE DELL'UTENTE
    // Creo un array per i numeri inseriti dall'utente
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

      // Verifico se l'utente non abbia già inserito questo numero
      var checkExist2 = checkForDuplicate(userNumber, arrayUser);
      if (checkExist2 == false) {
        arrayUser.push(userNumber);
      } else {
        alert("Hai già inserito questo numero. Riprova.");
      }

      // L'utente vince se inserisce il numero massimo possibile di numeri corretti
      var maxArrayUserLength = numberMax - arrayBombs.length;

    } while (checkExist == false && arrayUser.length < maxArrayUserLength);

    // Se perdi
    if (checkExist == true) {
      // Compare il riquadro
      var endGame = document.getElementById('end_game');
      endGame.classList = "visible, red";
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
      endGame.classList = "visible, blue";
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
    // Anche i pulsanti della difficoltà si resettano
    easyChosen.className = ("not_chosen");
    mediumChosen.className = ("not_chosen");
    hardChosen.className = ("not_chosen");
  }
)

// 3 - FUNZIONI
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
  return result;
}
