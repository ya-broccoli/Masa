const modal = document.querySelector('.modal');
const nameInput = document.getElementById('modal-input-text');
const modalButton = document.querySelector('.about__button');

const autoFocus = () => {
  if (!modal.classList.contains('is-active')) {
    setTimeout(() => {
      nameInput.focus();
    }, 100);
  }
};

modalButton.addEventListener('click', autoFocus);
