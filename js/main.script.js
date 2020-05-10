//меню в .header для 768px
const burger = document.querySelector(".header-top__burger");
let headerTopLogo = document.querySelector(".header-top__logo");
let headerTopPhone = document.querySelector(".header-top__phone");
let headerSearchIcon = document.querySelector(".header-top__search-icon");
let headerLoginIcon = document.querySelector(".header-top__login-icon");
let headerTopNav = document.querySelector(".header-top__nav");

burger.onclick = function () {
  burger.classList.toggle("is-active");
  headerTopLogo.classList.toggle("is-active");
  headerTopPhone.classList.toggle("is-active");
  headerSearchIcon.classList.toggle("is-active");
  headerLoginIcon.classList.toggle("is-active");
  headerTopNav.classList.toggle("is-active");
};
//меню в .header для 768px

//slick
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 3,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
//slick
