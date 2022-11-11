const updateUserChoice = (choice) => {
  const divYourScore = document.querySelector('.div-your-score div');
  const spanYourScore = document.querySelector('.div-your-score span');
  const icon = document.createElement('img');
  icon.src = `./images/icon-${choice}.svg`;
  icon.classList.add(`icon-${choice}`);
  icon.alt = `Icon of ${choice}`;

  spanYourScore.appendChild(icon);
  spanYourScore.classList.remove('hide');
  divYourScore.classList.add(`${choice}`);
  divYourScore.classList.remove('hide');

  console.log(divYourScore.clientWidth);
  console.log(divYourScore.clientHeight);
}

document.addEventListener('DOMContentLoaded', () => {
  const divGame = document.querySelector('.div-game');
  const gameIcons = document.querySelectorAll('.div-game img');
  let userChoice = '';

  for (let i = 0; i < gameIcons.length; i++) {
    const gameIcon = gameIcons[i];

    gameIcon.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.currentTarget.classList[0]);
      userChoice = e.currentTarget.classList[0].slice(5);

      setTimeout(() => {
        divGame.classList.add('hide');
        updateUserChoice(userChoice);
      }, 5000);
    });
  }
});