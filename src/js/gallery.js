import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1, // Display 4 images at once
  // spaceBetween: 30, // Space between slides
  // clickedIndex: 6,
  slidesPerGroup: 1,
  // virtualTranslate: 300,
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, // Плавающие точки при движении
  },
  // Install modules

  modules: [Navigation, Pagination],
  speed: 500,
  spaceBetween: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // When the viewport is less than or equal to 1440px
    1440: {
      slidesPerView: 4, // Show 1 slide
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true, // Плавающие точки при движении
    },
  },
});
