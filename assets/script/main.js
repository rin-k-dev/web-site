$(document).ready(function () {
  $('.header__menu-icon').click(function () {
    $('.header__menu').toggleClass('open');
  });

  $('.gallery__slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "gallery__dots",
    arrows: false
  });
});
