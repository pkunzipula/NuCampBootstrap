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
});
