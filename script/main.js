$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayHoverPause: true,
    slideTransition: `linear`,
    navClass: ['slider__nav--left', 'slider__nav--right'],
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })
});
