
// V V V Used for custom Responsiveness based on viewport size!
function navHeightResize() {
  let viewportHeight = $(window).height();
  let navbar = $("#navbar").outerHeight(true);
  let heroHeight;
  if ((navbar = 0)) {
    heroHeight = viewportHeight;
  } else {
    heroHeight = viewportHeight - navbar;
    $(".hero-image").height(heroHeight);
  }
}

// V V V Random Page Button
var prevPage;
function randomPage() {
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
}

// V V V Handles page switching animation (immediately after clicking the button, before the page is actually switched)
function pageTransitionBeforeLoad(page) {
  var transDivDimensions = Math.sqrt(
    Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)
  ); // Uses the pythagorean theorem to calculate the dimensions of the div to perfectly cover the screen (because it is on a 45 degree angle)

  $(".transition-div").width(transDivDimensions); // Sets Height and Width of the div to fill more than the page itself
  $(".transition-div").height(transDivDimensions);

  $(".transition-div").hide(); // closes div so it goes from closed to open
  $("body").addClass("no-scroll");  // disables scrolling
  
  $(".transition-div").slideToggle(
    setTimeout( () => {
      if (page == "Random Webpage") {
        // randomPage();
        console.log("Should have activated randomPage()");
      } else {
        // window.location.href = page;
        console.log('Should have switched the page to ' + page);
      }
    }, 2000)
  );
}

// function pageTransitionAfterLoad() {
  
// }



$(document).ready(function () {
  // V V Controls the navbar hiding and showing with the correct Css
  $(".transition-div").hide();
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

    // V V Div containing the arrow in index responsiveness (problem was that for some reason the div did not want to stay inside it's parent and share it's height with the other div, so I fixed it this way)
    $(".captionDivIndex").css("height", function () {
      var indexContainerHeight = $("div[label='text content area']").height();
      var indextTextContainerHeight = $("#pIndexContentDiv").outerHeight(true);
      var indexCaptionDivHeight =
        indexContainerHeight - indextTextContainerHeight;
      var indexCaptionDivHeightPercent =
        (indexCaptionDivHeight / indexContainerHeight) * 100;
      return indexCaptionDivHeightPercent + "%";
    });
  });

  $(window).trigger("resize");

  // V V V V of Document Ready
});
$(".active").each( function() {
  $(this).on("click", function() {
    var href = $(this).text();
    console.log(href.charAt(0));
    if (href == "Random Webpage") {
      // do nothing (*jazz hands*)
    } else if (href == "Home") {
      href = "index.html";
    } else {
      href = href.charAt(0).toLowerCase() + href.slice(1);
      href = href + ".html";
      href = href.replaceAll(" ", "");
    }
    console.log(href);

    pageTransitionBeforeLoad(href);
  });
});