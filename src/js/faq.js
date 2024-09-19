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
    const faqItem = this.parentElement; // отримуємо батьківський елемент

    // Закриваємо всі інші елементи
    document.querySelectorAll('.faq-item-content').forEach(item => {
      if (item !== content) {
        item.classList.remove('active');
        item.style.maxHeight = '0'; // Закриваємо інші елементи
        item.previousElementSibling.querySelector(
          '.toggle-symbol'
        ).textContent = '+';
        item.previousElementSibling
          .querySelector('.toggle-symbol')
          .classList.remove('minus');
        item.previousElementSibling.querySelector(
          '.toggle-symbol'
        ).style.backgroundColor = 'yellow';
      }
    });

    // Перемикання класу active для поточного елемента
    faqItem.classList.toggle('active');
    content.classList.toggle('active');

    if (content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px'; // Встановлюємо висоту для відкриття
      symbol.textContent = '-';
      symbol.classList.add('minus');
      symbol.style.backgroundColor = 'blue';
    } else {
      content.style.maxHeight = '0'; // Закриваємо
      symbol.textContent = '+';
      symbol.classList.remove('minus');
      symbol.style.backgroundColor = 'yellow';
    }
  });
});
