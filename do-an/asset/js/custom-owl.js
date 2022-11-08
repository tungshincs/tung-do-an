$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    stagePadding: 120,
    center: true,
    items: 1,
    loop: true,
    margin: 10,

    responsive: {
      600: {
        items: 1,
      },
    },
  });
});
