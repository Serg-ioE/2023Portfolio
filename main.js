//var mainNavHidden =
$(document).ready(function () {
  $(".navexpanded").hide(); // hide the navexpanded div on page load
  $(".navbar-toggler").click(function () {
    $(".navexpanded").slideToggle();
    $(".navbar").slideToggle();
  });
});
// Detect when the window is resized
window.addEventListener('resize', function() {
  // Get the current viewport width and height
  var viewportWidth = window.innerWidth
  // Check if the viewport width and height reach sm size (bootstrap: 576px)
  if (viewportWidth >= 576 ) {
    $(".navexpanded").slideToggle();
    $(".navbar").slideToggle();
    console.log('Viewport was bigger than sm while navexpanded was open');
    return
  }
});

