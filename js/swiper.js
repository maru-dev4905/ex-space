var swiperVideo = $(".swiper-slide");


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
    on: {
      slideChange: function () {
        $(".swiper-slide").removeClass("play");
      }
    }
});

swiperVideo.click(function(){
    var th = $(this).find("video");
    
    if(th.parent().hasClass("play")){
        th.parent().removeClass("play");
        th.get(0).pause();
        swiper.autoplay.start();

    }else{
        th.parent().addClass("play");
        th.get(0).play();
        swiper.autoplay.stop();
    
    }
    
});