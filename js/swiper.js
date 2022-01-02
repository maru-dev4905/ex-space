const swiper = new Swiper('.swiper', {
  speed: 400,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 100,
  slideToClickedSlide: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true
  },
});