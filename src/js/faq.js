// const faqList = document.getElementById('faqList');

// const faqItems = [
//   {
//     req: 'How can I compete with friends?',
//     resp: 'Connect the game to social media to compare scores with friends.',
//   },
//   {
//     req: 'What are the game rules?',
//     resp: 'The rules are simple and outlined in the help section.',
//   },
//   {
//     req: 'How to reset my password?',
//     resp: 'You can reset your password by clicking on "Forgot Password".',
//   },
//   {
//     req: 'Can I play offline?',
//     resp: 'No, the game requires an internet connection.',
//   },
//   {
//     req: 'How do I report a bug?',
//     resp: 'You can report bugs through the support form.',
//   },
//   {
//     req: 'What platforms are supported?',
//     resp: 'The game is available on web and mobile.',
//   },
//   {
//     req: 'Are there in-app purchases?',
//     resp: 'Yes, there are optional in-app purchases available.',
//   },
//   {
//     req: 'How can I contact support?',
//     resp: 'You can contact support via the contact form on our website.',
//   },
//   {
//     req: 'Is there a tutorial available?',
//     resp: 'Yes, there is a tutorial in the main menu.',
//   },
//   {
//     req: 'Can I play with friends?',
//     resp: 'Yes, you can invite friends to play together.',
//   },
//   {
//     req: 'How to change my username?',
//     resp: 'You can change your username in the settings.',
//   },
//   {
//     req: 'What happens if I uninstall the game?',
//     resp: 'Your data is saved in the cloud.',
//   },
// ];

// const createFaqItems = faqItems => {
//   const content = faqItems
//     .map(
//       item => `
//     <div class="faq-item">
//         <div class="faq-item-header">
//             <p class="title-req">${item.req}</p>
//             <p class="toggle-symbol">+</p>
//         </div>
//         <div class="faq-item-content">
//             <p>${item.resp}</p>
//         </div>
//     </div>
//   `
//     )
//     .join('');
//   faqList.innerHTML = content;
// };

// createFaqItems(faqItems);

// document.querySelectorAll('.faq-item-header').forEach(header => {
//   header.addEventListener('click', function () {
//     const content = this.nextElementSibling;
//     const symbol = this.querySelector('.toggle-symbol');

//     if (content.style.display === 'block') {
//       content.style.display = 'none';
//       symbol.textContent = '+';
//     } else {
//       content.style.display = 'block';
//       symbol.textContent = '-';
//     }
//   });
// });

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

const createFaqItems = faqItems => {
  const content = faqItems
    .map(
      item => `
    <div class="faq-item">
        <div class="faq-item-header">
            <p class="title-req">${item.req}</p>
            <p class="toggle-symbol">+</p>
        </div>
        <div class="faq-item-content">
            <p>${item.resp}</p>
        </div>
    </div>
  `
    )
    .join('');
  faqList.innerHTML = content;
};

createFaqItems(faqItems);

document.querySelectorAll('.faq-item-header').forEach(header => {
  header.addEventListener('click', function () {
    const content = this.nextElementSibling;
    const symbol = this.querySelector('.toggle-symbol');

    if (content.style.display === 'block') {
      content.style.display = 'none';
      symbol.textContent = '+';
      symbol.classList.remove('minus'); // Удаляем класс для минуса
      symbol.style.backgroundColor = 'yellow'; // Возвращаем желтый цвет
    } else {
      content.style.display = 'block';
      symbol.textContent = '-';
      symbol.classList.add('minus'); // Добавляем класс для минуса
      symbol.style.backgroundColor = 'blue'; // Меняем цвет на синий
    }
  });
});
