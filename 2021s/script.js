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


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
