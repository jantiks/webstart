$(document).ready(function () {
  $(".slider__slides").slick({
    infinite: true,
    Dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".left_arrow"),
    nextArrow: $(".right_arrow"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
