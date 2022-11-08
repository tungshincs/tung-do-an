$(document).ready(function () {
  $("#toggle").click(function () {
    $("nav").slideToggle();
    $(".nav-hide").slideToggle();
  });
});
$(document).ready(function () {
  $(".search-box").click(function () {
    $(".search-input-box").slideToggle();
  });
});

let items = document.querySelectorAll(".item-show-top");

document.addEventListener("scroll", (event) => {
  items.forEach((item) => {
    if (item.offsetTop - window.scrollY < 600) {
      item.classList.add("active");
    }
  });
});

let items2 = document.querySelectorAll(".item-show-top-2");

document.addEventListener("scroll", (event) => {
  items2.forEach((item) => {
    if (item.offsetTop - window.scrollY < 300) {
      item.classList.add("active-2");
    }
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: 100,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
