jQuery(function ($) { // この中であればWordPressでも「$」が使用可能になる

  //Campaign swiper
  var swiper = new Swiper(".js-features-swiper", {
    allowTouchMove: false, // マウスでの操作を無効化
    centeredSlides: true, // 中央にスライドを配置
    slidesPerView: "auto",
    //スライド枚数 1.26枚

    //〇〇以上の画面幅で〇〇枚のスライドと幅が〇〇pxと設定する
    breakpoints: {
      768: {
        spaceBetween: 40
      }
    },
    spaceBetween: 15,
    speed: 5000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
  });
});