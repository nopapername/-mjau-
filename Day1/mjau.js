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
    $("#dropbg").fadeToggle()
    $("#mydropmenu").fadeToggle()
  })
  $("#blog").mouseleave(function () {
    $("#dropbg").hide()
    $("#mydropmenu").hide()
  })
  $("#concepts").mouseenter(function () {
    $("#dropbg").fadeToggle()
    $("#dropmenuTwo").fadeToggle()
  })
  $("#concepts").mouseleave(function () {
    $("#dropbg").hide()
    $("#dropmenuTwo").hide()
  })
  $("#contact").mouseenter(function () {
    $("#dropmenuThree").fadeToggle()
  })
  $("#contact").mouseleave(function () {
    $("#dropmenuThree").fadeToggle("slow")
  })
  $("#slidea").click(function () {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 20 + "px"
    }, 500);
    return false;
  });
  $(".myleft").mouseenter(function () {
    $(".ffacefont").show();
    $(".ftweetfont").show();
    $(".fgooglefont").show();
    $(".fpinfont").show();
  })
  $(".myleft").mouseleave(function () {
    $(".ffacefont").hide();
    $(".ftweetfont").hide();
    $(".fgooglefont").hide();
    $(".fpinfont").hide();
  })
  $(".img-one").mouseenter(function () {
    $(".flower-one").fadeIn(100);
  })
  $(".img-one").mouseleave(function () {
    $(".flower-one").fadeOut(100);
  })
  $(".img-two").mouseenter(function () {
    $(".flower-two").fadeIn(100);
  })
  $(".img-two").mouseleave(function () {
    $(".flower-two").fadeOut(100);
  })
  $(".img-three").mouseenter(function () {
    $(".flower-three").fadeIn(100);
  })
  $(".img-three").mouseleave(function () {
    $(".flower-three").fadeOut(100);
  })
  $(".img-four").mouseenter(function () {
    $(".flower-four").fadeIn(100);
  })
  $(".img-four").mouseleave(function () {
    $(".flower-four").fadeOut(100);
  })
  $(".img-five").mouseenter(function () {
    $(".flower-five").fadeIn(100);
  })
  $(".img-five").mouseleave(function () {
    $(".flower-five").fadeOut(100);
  })
  $(".img-six").mouseenter(function () {
    $(".flower-six").fadeIn(100);
  })
  $(".img-six").mouseleave(function () {
    $(".flower-six").fadeOut(100);
  })
})