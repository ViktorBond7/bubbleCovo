// import './slider.js';
$('.multiple-items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button type="button" class="slick-next"><img src="/public/chevron-left.svg" alt="Next"></button>',
  nextArrow:
    '<button type="button" class="slick-prev"><img src="/public/chevron-right.svg" alt="Prev"></button>',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        dots: false, // Убираем точки
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
