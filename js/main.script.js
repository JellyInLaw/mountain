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

//хахаа ахуительная реализация
let blogNavItems = document.querySelectorAll(".blog__nav-item");
let blogContent = document.querySelectorAll(".blog__content");

blogNavItems[0].onclick = function () {
  blogContent[0].classList.add("is-visible");
  blogContent[1].classList.remove("is-visible");
  blogContent[2].classList.remove("is-visible");
  blogContent[3].classList.remove("is-visible");
};

blogNavItems[1].onclick = function () {
  blogContent[1].classList.add("is-visible");
  blogContent[0].classList.remove("is-visible");
  blogContent[0].classList.add("hidden");
  blogContent[2].classList.remove("is-visible");
  blogContent[3].classList.remove("is-visible");
};

blogNavItems[2].onclick = function () {
  blogContent[2].classList.add("is-visible");
  blogContent[0].classList.remove("is-visible");
  blogContent[0].classList.add("hidden");
  blogContent[1].classList.remove("is-visible");
  blogContent[3].classList.remove("is-visible");
};

blogNavItems[3].onclick = function () {
  blogContent[3].classList.add("is-visible");
  blogContent[1].classList.remove("is-visible");
  blogContent[2].classList.remove("is-visible");
  blogContent[0].classList.remove("is-visible");
  blogContent[0].classList.add("hidden");
};
//заебись блять придумал
