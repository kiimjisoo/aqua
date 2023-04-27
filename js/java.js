



new Swiper('.notice .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
}); 


new Swiper('.main-slide .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEls) {
new ScrollMagic
  .Scene({ 
    triggerElement: spyEls, 
    triggerHook: 0.8
  })
  .setClassToggle(spyEls, 'show')
  .addTo(new ScrollMagic.Controller()); 
});


const totopEl = document.querySelector('.go-top');
totopEl.addEventListener('click', function () {
  gsap.to(window, 0.5, {
    scrollTo: 0
  });
})


const burgerEl = document.querySelector('.hamburger');
const mediaEl = document.querySelector('.media_menu');
const closeEl = document.querySelector('.close');

burgerEl.addEventListener('click', function () {
  mediaEl.classList.add('avtive');
});

closeEl.addEventListener('click', function() {
  mediaEl.classList.remove('active');
});

