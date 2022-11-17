document.addEventListener('DOMContentLoaded', () => {
  const divRulesModal = document.querySelector('.rules-modal');
  const bgOverlay = document.getElementById('bg-overlay');
  const btnRules = document.querySelector('.div-rules > button');
  const btnCloseModal = document.getElementById('btn-modal-close');

  btnRules.addEventListener('click', () => {
    divRulesModal.classList.remove('hide');

    if (window.innerWidth >= 1200) {
      bgOverlay.classList.remove('hide');
    }
  });

  btnCloseModal.addEventListener('click', () => {
    divRulesModal.classList.add('hide');

    if (window.innerWidth >= 1200) {
      bgOverlay.classList.add('hide');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200 && btnRules.classList.contains('hide')) {
      bgOverlay.classList.add('hide');
    }
  })
});