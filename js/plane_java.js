
const burgerEl = document.querySelector('.hamburger');
const mainEl = document.querySelector('.main-menu');

const hamEl = document.querySelector('.ham-menu');
const closeEl = document.querySelector('.close');

burgerEl.addEventListener('click', function () {
  hamEl.classList.add('active');
});

closeEl.addEventListener('click', function() {
  hamEl.classList.remove('active');
});

