$(document).ready(function () {
  // V V Controls the navbar hiding and showing with the correct Css
  $(".navexpanded").hide();

  var decider = false; // false = navexpanded is closed, true = navexpanded is open

  $(".navbar-toggler").click(function () {
    $(".navexpanded").slideToggle();
    decider = !decider;
    $(".navexpanded").css("display", "flex");
    if (decider == true) {
      $("#navbar-toggler-navexpanded").css("margin-left", "20%");
      $("#navbar-toggler-navexpanded").css("margin-right", "20%");
      console.log("navbar worked?");
      console.log($("#navbar-toggler-navexpanded").css("margin"));
    }

    $(".navbar").slideToggle();
  });
  // ^ ^ Controls the Navbar hiding and showing with the correct Css


$(window).on("resize", function () {

  // V V Navbar Height responsivness
  const viewportHeight = $(window).height();
  const navbar = $("#navbar").outerHeight(true);
  const heroHeight = viewportHeight - navbar;
  $(".hero-image").height(heroHeight);

  // V V Footer Width responsivness
  var footNav = $("#footNav");
  var windowWidth = $("body").width();
  var newWidth;
  if (windowWidth <= 576) {
    newWidth = footNav.width() / 2;
  } else {
    newWidth = footNav.width() / 7;
  }
  $(".footSectorContent").css("width", newWidth);
});

$(window).trigger("resize");



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


