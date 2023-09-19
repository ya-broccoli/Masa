const container = document.querySelector('.news__tabs');

let currentButton = container.querySelector('.news__tab--current');

const toggleCurrent = () => {
  container.addEventListener('click', (evt) => {
    if (evt.target.matches('.news__tab')) {
      currentButton.classList.remove('news__tab--current');
      evt.target.classList.add('news__tab--current');
      currentButton = evt.target;
    }
  });
};

export {toggleCurrent};
