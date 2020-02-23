$(function() {
  $(".carousel").carousel({ interval: 2000 });
  $("#carouselButton").click(function() {
    if (
      $("#carouselButton")
        .children("i")
        .hasClass("fa-pause")
    ) {
      $(".carousel").carousel("pause");
      $("#carouselButton")
        .children("i")
        .removeClass("fa-pause")
        .addClass("fa-play");
    } else {
      $(".carousel").carousel("cycle");
      $("#carouselButton")
        .children("i")
        .removeClass("fa-play")
        .addClass("fa-pause");
    }
  });

  $("#reservePopper").click(function() {
    $("#reserveModal").modal("show");
  });

  $("#loginPopper").click(function() {
    $("#loginModal").modal("show");
  });

  $("#tent").click(function() {
    $(this).addClass("greenify");
    $("#rv").removeClass("greenify");
  });
  $("#rv").click(function() {
    $(this).addClass("greenify");
    $("#tent").removeClass("greenify");
  });
});
