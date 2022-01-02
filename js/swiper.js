var swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    slideToClickedSlide: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },
    breakpoints: {
      768: {
        spaceBetween: 10,
      },
      425: {
        spaceBetween: 25,
      },
    },
    autoplay: {
      speed:2000,
      delay: 2000,
      disableOnInteraction: true
    },
});