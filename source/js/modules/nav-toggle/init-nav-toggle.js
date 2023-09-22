const initNavToggles = () => {
  const OPENED_CLASS = 'is-opened';
  const LINK_CLASS = 'a';
  const root = document.querySelector('.header');
  const toggle = root.querySelector('.header__toggle');
  const nav = root.querySelector('.nav');
  const overlay = document.querySelector('.overlay');

  const onDocumentKeydown = (evt) => {
    return evt.key === 'Escape' ? closeMenu() : null;
  };

  const onLinkClick = (evt) => {
    return (evt.target.matches(LINK_CLASS) && !evt.target.matches('.nav__link--button')) ? closeMenu() : null;
  };

  const isMenu = (evt) => {
    return (evt.target.closest('.header') && evt.target.closest('.header__toggle') || evt.target.closest('.nav')) ? evt.preventDefault() : closeMenu();
  };

  const openMenu = () => {
    root.classList.add(OPENED_CLASS);
    toggle.classList.add(OPENED_CLASS);
    nav.classList.add(OPENED_CLASS);
    overlay.classList.add(OPENED_CLASS);
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', isMenu);
    nav.addEventListener('click', onLinkClick);
    window.scrollLock.disableScrolling();
  };

  const closeMenu = () => {
    root.classList.remove(OPENED_CLASS);
    toggle.classList.remove(OPENED_CLASS);
    nav.classList.remove(OPENED_CLASS);
    overlay.classList.remove(OPENED_CLASS);
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', isMenu);
    nav.removeEventListener('click', onLinkClick);
    window.scrollLock.enableScrolling();
  };

  toggle.addEventListener('click', () => {
    return !toggle.classList.contains(OPENED_CLASS) ? openMenu() : closeMenu();
  });

};

export {initNavToggles};
