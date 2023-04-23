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

  /*const swipers = new Swiper('.notice .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: true.
  

  });
  */