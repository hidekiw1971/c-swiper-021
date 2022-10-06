jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var sliderThumb = new Swiper(".slider-thumb", {
    loop: true,
    spaceBetween: 2,
    centeredSlides: true,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var sliderMain = new Swiper(".slider-main", {
    loop: true,
    spaceBetween: 2,
    slidesPerView: 1.5,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: sliderThumb,
    },
  });

  // この中であればWordpressでも「$」が使用可能になる
});
