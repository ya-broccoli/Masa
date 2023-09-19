const heroSlider = document.querySelector('.hero__slider');

const initHeroSlider = () => {
  if (heroSlider) {
    return new window.Swiper(heroSlider, {

      pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        clickable: true,
      },

      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  return null;
};

export {initHeroSlider};
