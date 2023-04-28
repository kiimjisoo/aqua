



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
const mainEl = document.querySelector('.main-menu');

const hamEl = document.querySelector('.ham-menu');
const closeEl = document.querySelector('.close');

burgerEl.addEventListener('click', function () {
  hamEl.classList.add('active');
});

closeEl.addEventListener('click', function() {
  hamEl.classList.remove('active');
});

gsap.to(".floating1", 2, {
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to(".floating2", 2.5, {
  y: 10,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to(".floating3", 2, {
  y: 25,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to(".floating4", 3, {
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});


