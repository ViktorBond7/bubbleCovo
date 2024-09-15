// import photo1 from './img/photo-1.png';
// import photo2 from './img/photo-2.png';
// import photo3 from './img/photo-3.png';
// import photo4 from './img/photo-4.png';
// import photo5 from './img/photo-5.png';
// import photo6 from './img/photo-6.png';

// const images = [photo1, photo2, photo3, photo4, photo5, photo6];
// const itemsContainer = $('.multiple-items');

// images.forEach(image => {
//   itemsContainer.append(
//     `<img src="${image}" alt="Example Image" class="mobile-image" />`
//   );
// });

//===============================================================
$('.multiple-items').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button type="button"><img src="/img/vector-left.svg" alt="Prev"></button>',
  nextArrow:
    '<button type="button"><img src="/img/vector.png" alt="Next"></button>',
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
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

// import photo1 from './img/photo-1.png';
// import photo2 from './img/photo-2.png';
// import photo3 from './img/photo-3.png';
// import photo4 from './img/photo-4.png';
// import photo5 from './img/photo-5.png';
// import photo6 from './img/photo-6.png';

// $(function () {
//   const images = [photo1, photo2, photo3, photo4, photo5, photo6];
//   const itemsContainer = $('.multiple-items');

//   // Добавляем изображения в контейнер
//   images.forEach(image => {
//     itemsContainer.append(
//       `<img src="${image}" alt="Example Image" class="mobile-image" />`
//     );
//   });

//   // Теперь инициализируем слайдер после того, как все изображения добавлены
//   setTimeout(function () {
//     $('.multiple-items').slick({
//       dots: true,
//       infinite: false,
//       speed: 300,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       prevArrow:
//         '<button type="button"><img src="/img/vector-left.svg" alt="Prev"></button>',
//       nextArrow:
//         '<button type="button"><img src="/img/vector.png" alt="Next"></button>',
//       responsive: [
//         {
//           breakpoint: 1440,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 1439,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: false,
//           },
//         },
//         {
//           breakpoint: 340,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: false,
//           },
//         },
//       ],
//     });
//   }, 0); // Добавляем небольшой таймаут, чтобы слайдер инициализировался после добавления изображений
// });
