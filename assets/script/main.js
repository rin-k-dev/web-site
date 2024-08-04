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
    console.log("Icon before toggle:", icon);
    content.slideToggle();

    if (content.is(":visible")) {
      console.log("visible");
      icon.removeClass("bi-plus").addClass("bi-dash");
    } else {
      console.log("invisible");
      icon.removeClass("bi-dash").addClass("bi-plus");
    }
  });
});
