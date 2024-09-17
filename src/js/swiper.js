import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-carousel', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,
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
        spaceBetween: 10,
        // centeredSlides: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      },
    },
  });

  // Функция для проверки и настройки пагинации
  function checkPagination() {
    if (window.innerWidth < 1440) {
      swiper.pagination.destroy(); // Уничтожаем пагинацию для экранов меньше 1440px
      swiper.params.pagination.el = null; // Убираем элемент пагинации
      swiper.update(); // Обновляем слайдер
    } else {
      // Восстанавливаем пагинацию, если ширина больше или равна 1440px
      if (!swiper.params.pagination.el) {
        swiper.params.pagination.el = '.swiper-pagination'; // Устанавливаем элемент пагинации
        swiper.pagination.init(); // Инициализируем пагинацию
        swiper.pagination.update(); // Обновляем пагинацию
      }
    }
  }

  checkPagination(); // Выполняем проверку при загрузке
  window.addEventListener('resize', checkPagination); // Проверяем при изменении размера окна
});
