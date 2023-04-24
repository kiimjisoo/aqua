const swiper = new Swiper('.main-slide .swiper', {
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

// const swiper1 = new Swiper('.notice .swiper', {
//     direction: 'vertical',
//     loop: true,
//     autoplay: true,
// });  


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEls) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEls, 
      triggerHook: 0.1
    })
    .setClassToggle(spyEls, 'show')
    .addTo(new ScrollMagic.Controller()); 
});

