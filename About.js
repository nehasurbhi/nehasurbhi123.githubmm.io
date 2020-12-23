var swiper = new Swiper('.swiper-container', {
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'progressbar',
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  });