const updateUserChoice = (choice) => {
  const outerDivYourScore = document.querySelector('.div-your-score');
  const divYourScore = document.querySelector('.div-your-score div');
  const spanYourScore = document.querySelector('.div-your-score span');
  const icon = document.createElement('img');
  icon.src = `./images/icon-${choice}.svg`;
  icon.classList.add(`icon-${choice}`);
  icon.alt = `Icon of ${choice}`;

  spanYourScore.appendChild(icon);
  divYourScore.classList.add(`${choice}`);
  outerDivYourScore.classList.remove('cover');
  outerDivYourScore.classList.remove('hide');
}

const updateHouseChoice = (num) => {
  let houseChoice;
  const divHouseScore = document.querySelector('.div-house-score div');
  const spanHouseScore = document.querySelector('.div-house-score span');
  const icon = document.createElement('img');

  if (num === 0) {
    houseChoice = 'paper';
  } else if (num === 1) {
    houseChoice = 'scissors';
  } else {
    houseChoice = 'rock';
  }

  if (houseChoice === 'paper') {
    icon.src = './images/icon-paper.svg';
    icon.classList.add('icon-paper');
    icon.alt = 'Icon of paper';
    divHouseScore.classList.add('paper');
  } else if (houseChoice === 'scissors') {
    icon.src = './images/icon-scissors.svg';
    icon.classList.add('icon-scissors');
    icon.alt = 'Icon of scissor';
    divHouseScore.classList.add('scissors');
  } else {
    icon.src = './images/icon-rock.svg';
    icon.classList.add('icon-rock');
    icon.alt = 'Icon of rock';
    divHouseScore.classList.add('rock');
  }

  spanHouseScore.appendChild(icon);

  return houseChoice;
}

const revealHousePick = () => {
  const outerDivHouseScore = document.querySelector('.div-house-score');
  outerDivHouseScore.classList.remove('cover');
  outerDivHouseScore.classList.remove('hide');
}

const setResult = (userChoice, houseChoice) => {
  const score = document.getElementById('span-score');
  const divWin = document.getElementById('div-win');
  const divLose = document.getElementById('div-lose');
  const divDraw = document.getElementById('div-draw');
  const divPlayAgain = document.getElementById('div-play-again');
  const divYourScore = document.querySelector('.div-your-score');
  const divHouseScore = document.querySelector('.div-house-score');
  let winner;
  
  if (userChoice === 'paper') {
    if (houseChoice === 'paper') {
      winner = 'none';
    } else if (houseChoice === 'scissors') {
      winner = 'house';
    } else {
      winner = 'user';
    }
  } else if (userChoice === 'scissors') {
    if (houseChoice === 'paper') {
      winner = 'user';
    } else if (houseChoice === 'scissors') {
      winner = 'none';
    } else {
      winner = 'house';
    }
  } else if (userChoice === 'rock') {
    if (houseChoice === 'paper') {
      winner = 'house';
    } else if (houseChoice === 'scissors') {
      winner = 'user';
    } else {
      winner = 'none';
    }
  }

  if (winner === 'user') {
    score.innerHTML = `${parseInt(score.innerHTML) + 1}`;
    divWin.classList.remove('hide');
    divYourScore.classList.add('winner');
  } else if (winner === 'house') {
    divLose.classList.remove('hide');
    divHouseScore.classList.add('winner');
  } else {
    divDraw.classList.remove('hide');
  }

  divPlayAgain.classList.remove('hide');
}

const resetGame = () => {
  // reset all classes and game.
  const divGame = document.querySelector('.div-game');
  const divWin = document.getElementById('div-win');
  const divLose = document.getElementById('div-lose');
  const divDraw = document.getElementById('div-draw');
  const divYourScore = document.querySelector('.div-your-score');
  const borderYourScore = document.querySelector('.div-your-score > div');
  const borderHouseScore = document.querySelector('.div-house-score > div');
  const divHouseScore = document.querySelector('.div-house-score');
  const divPlayAgain = document.getElementById('div-play-again');
  const prevYourChoice = document.querySelector('.div-your-score img');
  const prevHouseChoice = document.querySelector('.div-house-score img');

  divGame.classList.remove('hide');
  divWin.classList.add('hide');
  divLose.classList.add('hide');
  divDraw.classList.add('hide');
  borderYourScore.classList = '';
  borderHouseScore.classList = '';
  divYourScore.classList.add('hide');
  divYourScore.classList.remove('winner');
  divHouseScore.classList.add('cover');
  divHouseScore.classList.add('hide');
  divHouseScore.classList.remove('winner');
  divPlayAgain.classList.add('hide');

  prevYourChoice.remove();
  prevHouseChoice.remove();
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 3);
}

/*
 * In order to run a game round, we need the user choice and the house choice.
 * After the user clicks on a game icon, this function will run
 * It will gather the user choice from the clicked event
 * It will create the house choice
 * It will then hide the game icons,
 * Display the user choice and show the hidden house choice
 * Reveal the house choice
 * Reveal the result
 * 
*/
// userChoice is either 'paper', 'scissors', 'rock'
const runGameRound = (userChoice) => {
  const divGame = document.querySelector('.div-game');
  const divHouseScore = document.querySelector('.div-house-score');
  
  let houseChoice = updateHouseChoice(getRandomNumber());

  divGame.classList.add('hide');

  updateUserChoice(userChoice);
  divHouseScore.classList.remove('hide');

  setTimeout(() => {
    divHouseScore.classList.remove('cover');
    setResult(userChoice, houseChoice);
  }, 2500);
};


document.addEventListener('DOMContentLoaded', () => {
  const gameIcons = document.querySelectorAll('.div-game img');
  const buttonReset = document.getElementById('btn-reset');
  
  buttonReset.addEventListener('click', () => {
    resetGame();
  });

  for (let i = 0; i < gameIcons.length; i++) {
    const gameIcon = gameIcons[i];

    gameIcon.addEventListener('click', (e) => {
      e.preventDefault();
      userChoice = e.currentTarget.classList[0].slice(5);
      runGameRound(userChoice);
    });
  }
});