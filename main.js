var navButtonOpen = false;

$(document).ready(function () {
  navButtonOpen = false;
  $(".navexpanded").hide(); // hide the navexpanded div on page load
  $(".navbar-toggler").click(function () {
    $(".navexpanded").slideToggle();
  });
});
  /*navButtonOpen = !navButtonOpen;
  if ((navButtonOpen = true)) {
    
  } else {
  }*/
