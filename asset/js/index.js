$(document).ready(function () {
  $("#toggle").click(function () {
    $("nav").slideToggle();
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
