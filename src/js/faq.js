document.addEventListener('DOMContentLoaded', () => {
  const faqList = document.getElementById('faqList');

  const faqItems = [
    {
      req: 'How can I compete with friends?',
      resp: 'Connect the game to social media to compare scores with friends.',
    },
    {
      req: 'What are the game rules?',
      resp: 'The rules are simple and outlined in the help section.',
    },
    {
      req: 'How to reset my password?',
      resp: 'You can reset your password by clicking on "Forgot Password".',
    },
    {
      req: 'Can I play offline?',
      resp: 'No, the game requires an internet connection.',
    },
    {
      req: 'How do I report a bug?',
      resp: 'You can report bugs through the support form.',
    },
    {
      req: 'What platforms are supported?',
      resp: 'The game is available on web and mobile.',
    },
    {
      req: 'Are there in-app purchases?',
      resp: 'Yes, there are optional in-app purchases available.',
    },
    {
      req: 'How can I contact support?',
      resp: 'You can contact support via the contact form on our website.',
    },
    {
      req: 'Is there a tutorial available?',
      resp: 'Yes, there is a tutorial in the main menu.',
    },
    {
      req: 'Can I play with friends?',
      resp: 'Yes, you can invite friends to play together.',
    },
    {
      req: 'How to change my username?',
      resp: 'You can change your username in the settings.',
    },
    {
      req: 'What happens if I uninstall the game?',
      resp: 'Your data is saved in the cloud.',
    },
  ];

  function createFaqItems() {
    faqItems.forEach(item => {
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');

      const faqElement = document.createElement('li');
      faqElement.classList.add('faq-element');

      const reqText = document.createElement('p');
      reqText.classList.add('faq-element-req');
      reqText.textContent = item.req;

      const img = document.createElement('img');
      img.setAttribute('class', 'icon');
      img.setAttribute('onclick', 'toggleText(this);');
      img.setAttribute('src', getIconSrc()); // Встановлюємо правильне зображення

      faqElement.appendChild(reqText);
      faqElement.appendChild(img);

      const extraText = document.createElement('li');
      extraText.classList.add('extraText');
      extraText.style.display = 'none';

      const respParagraph = document.createElement('p');
      respParagraph.classList.add('faq-element-resp');
      respParagraph.textContent = item.resp;

      extraText.appendChild(respParagraph);

      faqItem.appendChild(faqElement);
      faqItem.appendChild(extraText);
      faqList.appendChild(faqItem);
    });
  }

  function getIconSrc() {
    if (window.matchMedia('(min-width: 1440px)').matches) {
      return '/img/minus.png';
    } else {
      return '/img/minus-mob.png';
    }
  }

  createFaqItems();

  window.toggleText = function (imgElement) {
    const extraText = imgElement
      .closest('.faq-item')
      .querySelector('.extraText');
    if (imgElement.getAttribute('src') === '/img/plus.png') {
      imgElement.setAttribute('src', getMinusIconSrc());
      extraText.style.display = 'block';
    } else {
      imgElement.setAttribute('src', '/img/plus.png');
      extraText.style.display = 'none';
    }
  };

  function getMinusIconSrc() {
    if (window.matchMedia('(min-width: 1440px)').matches) {
      return '/img/minus.png';
    } else {
      return '/img/minus-mob.png';
    }
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   const faqList = document.getElementById('faqList');

//   const faqItems = [
//     {
//       req: 'How can I compete with friends?',
//       resp: 'Connect the game to social media to compare scores with friends.',
//     },
//     {
//       req: 'What are the game rules?',
//       resp: 'The rules are simple and outlined in the help section.',
//     },
//     {
//       req: 'How to reset my password?',
//       resp: 'You can reset your password by clicking on "Forgot Password".',
//     },
//     {
//       req: 'Can I play offline?',
//       resp: 'No, the game requires an internet connection.',
//     },
//     {
//       req: 'How do I report a bug?',
//       resp: 'You can report bugs through the support form.',
//     },
//     {
//       req: 'What platforms are supported?',
//       resp: 'The game is available on web and mobile.',
//     },
//     {
//       req: 'Are there in-app purchases?',
//       resp: 'Yes, there are optional in-app purchases available.',
//     },
//     {
//       req: 'How can I contact support?',
//       resp: 'You can contact support via the contact form on our website.',
//     },
//     {
//       req: 'Is there a tutorial available?',
//       resp: 'Yes, there is a tutorial in the main menu.',
//     },
//     {
//       req: 'Can I play with friends?',
//       resp: 'Yes, you can invite friends to play together.',
//     },
//     {
//       req: 'How to change my username?',
//       resp: 'You can change your username in the settings.',
//     },
//     {
//       req: 'What happens if I uninstall the game?',
//       resp: 'Your data is saved in the cloud.',
//     },
//   ];

//   function createFaqItems() {
//     faqItems.forEach(item => {
//       const faqItem = document.createElement('div');
//       faqItem.classList.add('faq-item');

//       const faqElement = document.createElement('li');
//       faqElement.classList.add('faq-element');

//       const reqText = document.createElement('p');
//       reqText.classList.add('faq-element-req');
//       reqText.textContent = item.req;

//       const img = document.createElement('img');
//       img.setAttribute('class', 'icon');
//       img.setAttribute('onclick', 'toggleText(this);');
//       img.setAttribute('src', '/img/plus.png'); // Исходное изображение
//       img.setAttribute('alt', 'Toggle');

//       faqElement.appendChild(reqText);
//       faqElement.appendChild(img);

//       const extraText = document.createElement('li');
//       extraText.classList.add('extraText');
//       extraText.style.display = 'none';

//       const respParagraph = document.createElement('p');
//       respParagraph.classList.add('faq-element-resp');
//       respParagraph.textContent = item.resp;

//       extraText.appendChild(respParagraph);

//       faqItem.appendChild(faqElement);
//       faqItem.appendChild(extraText);
//       faqList.appendChild(faqItem);
//     });
//   }

//   createFaqItems();

//   window.toggleText = function (imgElement) {
//     const extraText = imgElement
//       .closest('.faq-item')
//       .querySelector('.extraText');
//     if (imgElement.getAttribute('src') === '/img/plus.png') {
//       imgElement.setAttribute('src', '/img/minus.png');
//       extraText.style.display = 'block';
//     } else {
//       imgElement.setAttribute('src', '/img/plus.png');
//       extraText.style.display = 'none';
//     }
//   };
// });
