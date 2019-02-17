$(window).resize(function () {
  var height = $(window).height()
  $(".carousel-item img").css("height", height + "px")
  $(".page-top").css("height", height + "px")
})
$(document).ready(function () {
  var beginHeight = $(window).height()
  $(".carousel-item img").css("height", beginHeight + "px")
  $(".page-top").css("height", beginHeight + "px")
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
})