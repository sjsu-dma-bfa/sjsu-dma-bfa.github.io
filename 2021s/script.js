const $slider = $('.slider');

$slider.slick({
  infinite: false,
  arrows: false,
  vertical: true,
  dots: true,
  speed: 1200,
  cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)' });


$slider.mousewheel(function (e) {
  e.preventDefault();
  if (e.deltaY < 0) {

    if ($(this).slick('slickCurrentSlide') === $(this).find('.slick-slide').length - 1) {
      return;
    }

    $(this).slick('slickNext');

  } else {

    if ($(this).slick('slickCurrentSlide') === 0) {
      return;
    }

    $(this).slick('slickPrev');
  }
});
