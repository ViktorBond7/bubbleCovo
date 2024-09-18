import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-carousel', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination],
    speed: 500,
    breakpoints: {
      1440: {
        slidesPerView: 4,
        spaceBetween: 70,
        centeredSlides: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      },
    },
  });

  function checkPagination() {
    if (window.innerWidth < 1440) {
      swiper.pagination.destroy();
      swiper.params.pagination.el = null; // Убираем элемент пагинации
      swiper.update();
    } else {
      if (!swiper.params.pagination.el) {
        swiper.params.pagination.el = '.swiper-pagination';
        swiper.pagination.init();
        swiper.pagination.update();
      }
    }
  }

  checkPagination(); // Выполняем проверку при загрузке
  window.addEventListener('resize', checkPagination); // Проверяем при изменении размера окна
});
