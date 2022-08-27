const nav = document.querySelector('.main-nav');
const toggle = document.querySelector('.main-nav__toggle');

const f = toggle.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  }
})
