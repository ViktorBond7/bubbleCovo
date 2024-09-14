const burgerButton = document.querySelector('.header-burger');
const mobileMenuElement = document.querySelector('.mobile-menu-wrapper');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
const headerMainEl = document.querySelector('.header');
const menuItems = document.querySelectorAll('.header-list-list');

const homeButton = document.querySelector('.mobile-menu-content-home');

function openMobileMenu() {
  mobileMenuElement.classList.remove('visually-hidden');
  headerMainEl.classList.add('visually-hidden');
}

function closeMobileMenu() {
  mobileMenuElement.classList.add('visually-hidden');
  headerMainEl.classList.remove('visually-hidden');
}

burgerButton.addEventListener('click', openMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

homeButton.addEventListener('click', () => {
  window.location.href = './';
});

menuItems.forEach(element =>
  element.addEventListener('click', closeMobileMenu)
);
