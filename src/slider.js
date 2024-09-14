$('.multiple-items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4, // Показываем одну картинку по умолчанию
  slidesToScroll: 1,
  prevArrow:
    '<button type="button"><img src="/img/vector-left.svg" alt="Prev"></button>',
  nextArrow:
    '<button type="button"><img src="/img/vector.png" alt="Next"></button>',
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4, // Показываем 4 картинки начиная с 1440px
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1439, // Устанавливаем новый брейкпоинт
      settings: {
        slidesToShow: 1, // Для экранов до 1339px показываем 1 картинку
        slidesToScroll: 1,
        dots: false, // Убираем точки
      },
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1, // Для экранов меньше 340px показываем 1 картинку
        slidesToScroll: 1,
        dots: false, // Убираем точки
      },
    },
  ],
});
