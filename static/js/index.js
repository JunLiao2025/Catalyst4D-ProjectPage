window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

$(document).ready(function() {
    // 导航栏汉堡菜单的逻辑 (保持不变)
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // 1. 初始化顶部的 #results-carousel (不变)
    bulmaCarousel.attach('#results-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        autoplay: false,
        pagination: true,
    });

    // 2. 初始化 "Ours" 轮播 (去掉 sync)
    bulmaCarousel.attach('#ours-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        navigation: true,
        pagination: true,
        // sync: '#Instruct4D-to-4D-carousel' // 去掉同步
    });

    // 3. 初始化 "Instruct4D-to-4D" 轮播 (去掉 sync)
    bulmaCarousel.attach('#Instruct4D-to-4D-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        navigation: true,
        pagination: true,
        // sync: '#ours-carousel' // 去掉同步
    });

    bulmaCarousel.attach('#Instruct4DGS-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        navigation: true,
        pagination: true,
    });

    // 4. 初始化 "CTRL-D" 轮播
    bulmaCarousel.attach('#CTRL-D-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        navigation: true,
        pagination: true,
    });


    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

});
