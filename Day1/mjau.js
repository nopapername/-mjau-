$(window).resize(function () {
  var height = $(window).height()
  $(".carousel-item img").css("height", height + "px")
  $(".page-top").css("height", height + "px")
})
$(document).ready(function () {
  var beginHeight = $(window).height()
  $(".carousel-item img").css("height", beginHeight + "px")
  $(".page-top").css("height", beginHeight + "px")
  var owl1 = $('.mycarousel .owl-carousel');
  owl1.owlCarousel({
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
  var owl2 = $('#mydropmenu .owl-carousel');
  owl2.owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      900: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  $("#blog").mouseenter(function () {
    $("#mydropmenu").show()
    $("#dropbg").show()
  })
  $("#blog").mouseleave(function () {
    $("#mydropmenu").hide()
    $("#dropbg").hide()
  })
  $("#concepts").mouseenter(function () {
    $("#dropmenuTwo").show()
    $("#dropbg").show()
  })
  $("#concepts").mouseleave(function () {
    $("#dropmenuTwo").hide()
    $("#dropbg").hide()
  })
  $("#contact").mouseenter(function () {
    $("#dropmenuThree").show()
  })
  $("#contact").mouseleave(function () {
    $("#dropmenuThree").hide()
  })
})