const reviewsSlider = document.querySelector('.reviews__slider');
const reviewsNextButton = document.querySelector('.reviews__button--next');
const reviewsPrevButton = document.querySelector('.reviews__button--prev');
const reviewsScrollbar = document.querySelector('.reviews__scrollbar');

const initReviewsSlider = () => {
  if (reviewsSlider) {
    return new window.Swiper(reviewsSlider, {

      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: false,
        },
        768: {
          slidesPerView: 'auto',
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
        nextEl: reviewsNextButton,
        prevEl: reviewsPrevButton,
      },

      scrollbar: {
        el: reviewsScrollbar,
      },
    });
  }

  return null;
};

export {initReviewsSlider};
