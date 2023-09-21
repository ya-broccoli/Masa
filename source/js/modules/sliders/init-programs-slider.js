const programsSlider = document.querySelector('.programs__slider');
const programsNextButton = document.querySelector('.programs__button--next');
const programsPrevButton = document.querySelector('.programs__button--prev');
const programsScrollbar = document.querySelector('.programs__scrollbar');

const initProgramsSlider = () => {
  if (programsSlider) {
    return new window.Swiper(programsSlider, {

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
          allowTouchMove: true,
        },
      },

      navigation: {
        nextEl: programsNextButton,
        prevEl: programsPrevButton,
      },

      scrollbar: {
        el: programsScrollbar,
        hide: false,
        draggable: false,
      },
    });
  }

  return null;
};

export {initProgramsSlider};
