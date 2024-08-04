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

  $(".faq-list__accordion-header").click(function () {
    const content = $(this).next(".faq-list__accordion-content");
    const icon = $(this).find(".faq-list__accordion-header-icon i");

    content.slideToggle();
    icon.toggleClass("bi-plus bi-dash")
  });
});
