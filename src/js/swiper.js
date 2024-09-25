import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-carousel', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,

    loop: false,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    modules: [Navigation, Pagination],
    speed: 900,
    breakpoints: {
      1280: {
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
    if (window.innerWidth < 1280) {
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
      e.preventDefault();
      const targetID = link.getAttribute('href').replace('#', '');
      if (link.getAttribute('href') === './index.html') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }

      const targetSection = document.getElementById(targetID);

      if (targetSection) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const topOffset = headerHeight;
        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.scrollY -
          topOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});
