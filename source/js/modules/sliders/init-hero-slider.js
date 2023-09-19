const heroSlider = document.querySelector('.hero__slider');
const heroSliderPagination = document.querySelector('.swiper-pagination');

const initHeroSlider = () => {
  if (heroSlider) {
    return new window.Swiper(heroSlider, {

      pagination: {
        el: heroSliderPagination,
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
