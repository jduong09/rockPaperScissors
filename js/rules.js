document.addEventListener('DOMContentLoaded', () => {
  const divRulesModal = document.querySelector('.rules-modal');
  const btnRules = document.querySelector('.div-rules > button');
  const btnCloseModal = document.getElementById('btn-modal-close');

  btnRules.addEventListener('click', () => {
    divRulesModal.classList.remove('hide');
  });

  btnCloseModal.addEventListener('click', () => {
    divRulesModal.classList.add('hide');
  });
});