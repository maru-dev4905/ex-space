var swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 25,
  slideToClickedSlide: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
});