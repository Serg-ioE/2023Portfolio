// V V V Used for custom Responsiveness based on viewport size!
function navHeightResize() {
  let viewportHeight = $(window).height();
  let navbar = $("#navbar").outerHeight(true);
  let heroHeight;
  if (navbar = 0) {
    heroHeight = viewportHeight;
  } else {
    heroHeight = viewportHeight - navbar;
    $(".hero-image").height(heroHeight);
  }
}

$(document).ready(function () {
  // V V Controls the navbar hiding and showing with the correct Css
  $(".navexpanded").hide();

  var navDecider = false; // false = navexpanded is closed, true = navexpanded is open

  $(".navbar-toggler").click(function () {
    $(".navexpanded").slideToggle();
    navDecider = !navDecider;
    $(".navexpanded").css("display", "flex");
    if (navDecider == true) {
      $("#navbar-toggler-navexpanded").css("margin-left", "20%");
      $("#navbar-toggler-navexpanded").css("margin-right", "20%");
      console.log($("#navbar-toggler-navexpanded").css("margin"));

      $("body").addClass("no-scroll"); // Removes ability to scroll
    } else {
      $("body").removeClass("no-scroll"); // Adds back the ability to scroll
    }

    $(".navbar").slideToggle();
    navHeightResize();


  });

  $(window).on("resize", function () {
    // V V Navbar Height Responsiveness
    navHeightResize();
  });

  $(window).trigger("resize");

  // V V Random Page Button
  var prevPage;

  $(".navbar-button").click(function () {
    var page = Math.floor(Math.random() * 7);
    while (prevPage == page) {
      page = Math.floor(Math.random() * 7);
      console.log("it was the same this amount of times");
    }
    switch (page) {
      case 0:
        window.location.href = "index.html";
        console.log("index");
        break;
      case 1:
        window.location.href = "about.html";
        console.log("about");
        break;
      case 2:
        window.location.href = "education.html";
        console.log("education");
        break;
      case 3:
        window.location.href = "work.html";
        console.log("work");
        break;
      case 4:
        window.location.href = "interests.html";
        console.log("interests");
        break;
      case 5:
        window.location.href = "contact.html";
        console.log("contact");
        break;
      case 6:
        window.location.href = "quickMaths.html";
        console.log("quickMaths");
        break;
    }
    prevPage = page;
  });
});
