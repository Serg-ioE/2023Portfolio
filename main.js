$(document).ready(function () {
  $(".navexpanded").hide(); // hide the navexpanded div on page load
  $(".navbar-toggler").click(function () {
    $(".navexpanded").slideToggle();
  });
});