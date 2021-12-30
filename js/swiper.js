const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });