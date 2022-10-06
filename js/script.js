jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  //メインスライド
  var slider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6, //スライドの枚数と同じ値を指定
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //サムネイルスライド
  var thumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: 6,
    spaceBetween: 2,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  //3系
  //slider.params.control = thumbs;
  //thumbs.params.control = slider;

  //4系～
  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
  // この中であればWordpressでも「$」が使用可能になる
});
