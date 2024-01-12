let random = parseInt(Math.random() *100 +1);
//console.log(random); 

const submit = document.querySelector('#submit');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if (guess < 1){
    alert('Please enter a valid number')
  }else if (guess >100){
    alert('Please enter a valid number')
  }else {
    preGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${random}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if (guess === random){
    displayMessage(`You did it!! Wornderfull`)
    endGame();
  }else if (guess < random){
    displayMessage(`NUmber is low`)
  }else if (guess > random){
    displayMessage(`NUmber is High`)
  }
}

function displayGuess(guess){
  userInput.value= ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaning.innerHTML = `${11-numGuess}`
}


function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}  
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e1){
    random = parseInt(Math.random() *100 +1);
    preGuess = []
    numGuess = 1
    guessSlot.innerHTML=''
    remaning.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    
    playGame = true
  })
}

