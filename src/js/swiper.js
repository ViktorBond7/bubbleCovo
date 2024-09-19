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
    speed: 900,
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
      swiper.params.pagination.el = null;
      swiper.update();
    } else {
      if (!swiper.params.pagination.el) {
        swiper.params.pagination.el = '.swiper-pagination';
        swiper.pagination.init();
        swiper.pagination.update();
      }
    }
  }

  checkPagination();
  window.addEventListener('resize', checkPagination);

  const links = document.querySelectorAll('.header-nav-link');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Отменяем стандартное поведение ссылки
      const targetID = link.getAttribute('href').replace('#', ''); // Получаем ID целевой секции

      // Обработка перехода на главную страницу
      if (link.getAttribute('href') === './index.html') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Плавная прокрутка
        });
        return; // Прерываем выполнение
      }

      const targetSection = document.getElementById(targetID);

      if (targetSection) {
        const header = document.querySelector('header'); // Получаем элемент заголовка
        const headerHeight = header ? header.offsetHeight : 0; // Получаем высоту заголовка
        const topOffset = headerHeight; // Устанавливаем смещение равным высоте заголовка
        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.scrollY -
          topOffset;

        // Прокрутка к целевой секции
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth', // Плавная прокрутка
        });
      }
    });
  });
});
