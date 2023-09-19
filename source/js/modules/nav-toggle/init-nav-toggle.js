const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__toggle');
// const navLinks = document.querySelectorAll('.header__link');
const overlay = document.querySelector('.overlay');

const initNavToggles = () => {

  const closeMenu = () => {
    navMain.classList.remove('is-opened');
    navMain.classList.add('is-closed');
    navToggle.classList.remove('is-opened');
    window.scrollLock.enableScrolling();
    overlay.classList.remove('is-active');
    document.removeEventListener('click', clickOutsideMenu);
    document.removeEventListener('keydown', escapePress);
  };

  const clickOutsideMenu = (event) => {
    if (!navMain.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  };

  const escapePress = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('is-opened')) {
      closeMenu();
    } else {
      navMain.classList.remove('is-closed');
      navMain.classList.add('is-opened');
      navToggle.classList.add('is-opened');
      window.scrollLock.disableScrolling();
      overlay.classList.add('is-active');
      document.addEventListener('click', clickOutsideMenu);
      document.addEventListener('keydown', escapePress);
    }
  });

  // navLinks.forEach((link) => {
  //   link.addEventListener('click', () => {
  //     closeMenu();
  //   });
  // });
};

export {initNavToggles};
