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

