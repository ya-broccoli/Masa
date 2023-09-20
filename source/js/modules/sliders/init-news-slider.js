const newsSlider = document.querySelector('.news__slider');
const buttonPrev = document.querySelector('.news__control--prev');
const buttonNext = document.querySelector('.news__control--next');

const initNewsSlider = () => {
  if (newsSlider) {
    return new window.Swiper(newsSlider, {

      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },

      pagination: {
        el: '.news__pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="news__pagination-button ${className}" type="button" aria-label="Перейти к ${index + 1} слайду">${index + 1}</button>`;
        },
      },

      loop: false,
      direction: 'horizontal',
      updateOnWindowResize: true,
      breakpoints: {
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 32,
          grid: {
            rows: 1,
          },
        },
        768: {
          updateOnWindowResize: true,
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
        },
        320: {
          updateOnWindowResize: true,
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
  }
  return null;
};

export {initNewsSlider};
