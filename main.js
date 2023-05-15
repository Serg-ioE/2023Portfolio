// V V V V Initializes animations for work page
AOS.init();

// V V V V gets the name of the page
var pathGlobal = window.location.pathname;
var pageGlobal = pathGlobal.split("/").pop();

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

let randomButton = $('.navbar-button:contains("Random Webpage")');
randomButton.click(function() {
  randomPage();
});


$(document).ready(function () {
  // V V Assigns the doc attribute to every html element on each page to whatever page they are on ex: doc = "about"
  var path = window.location.pathname;
  var page = path.split("/").pop();
  $("*").attr("doc", page);

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

    // V V Div containing the arrow in index responsiveness (problem was that for some reason the div did not want to stay inside it's parent and share it's height with the other div, so I fixed it this way)
    $(".captionDivIndex").css("height", function () {
      var indexContainerHeight = $("div[label='text content area']").height();
      var indexTextContainerHeight = $("#pContentDiv").outerHeight(true);
      var indexCaptionDivHeight =
        indexContainerHeight - indexTextContainerHeight;
      var indexCaptionDivHeightPercent =
        (indexCaptionDivHeight / indexContainerHeight) * 100;
      return indexCaptionDivHeightPercent + "%";
    });
  });

  $(window).trigger("resize");

  // V V V V End of Document Ready
});

// V V V V Made Vue app for displaying images above sm(bootstrap breakpoint) in about.html
if (pageGlobal == "about.html") {
  const imgsAboutPage = Vue.createApp({
    data() {
      return {
        aboutImgs: [
          { link: "Imgs/FamilyPhoto1.jpeg", title: "FamilyPhoto1" },
          { link: "Imgs/SergWitFriends1.jpeg", title: "SergWitFriends1" },
          { link: "imgs/SergWitFriends3.png", title: "SergWitFriends3" },
        ],
      };
    },
  });

  imgsAboutPage.mount("#imgsAboutPage");
}


// V V V V Builds The work page and makes nested objects for vue-for
if (pageGlobal == "work.html") {
  const workContent = Vue.createApp({
    data() {
      return {
        columns: [
          {
            number: 1,
            projImgs: [
              {
                sources: "Imgs/DadJokeSiteSS.png",
                overlapText: "Dad Joke Site",
                link: "https://serg-ioe.github.io/Dad-Jokes/",
              },
              {
                sources: "Imgs/JS4SS.png",
                overlapText: "The Jive Factory",
                link: "https://serg-ioe.github.io/Javascript-4/",
              },
              {
                sources: "Imgs/WoodenToysSiteSS.png",
                overlapText: "Wooden Toys Website",
                link: "https://serg-ioe.github.io/Wooden-Toys-website/",
              },
            ],
          },
          {
            number: 2,
            projImgs: [
              {
                sources: "Imgs/KatiesKometsSS.png",
                overlapText: "Katie's Komets",
                link: "https://serg-ioe.github.io/Katies-Komets/",
              },
              {
                sources: "Imgs/MarvelSiteSS.png",
                overlapText: "Marvel Characters",
                link: "https://serg-ioe.github.io/NJIT2-Marvel-main/",
              },
              {
                sources: "Imgs/MoviesSiteSS.png",
                overlapText: "Movies' ratings",
                link: "https://serg-ioe.github.io/NJIT-3_StarterFiles-master/",
              },
            ],
          },
          {
            number: 3,
            projImgs: [
              {
                sources: "Imgs/PostcardGenSS.png",
                overlapText: "Postcard Generator",
                link: "https://serg-ioe.github.io/Postcard-Generator/",
              },
              {
                sources: "Imgs/RPSsiteSS.png",
                overlapText: "Rock Paper Scissors",
                link: "https://serg-ioe.github.io/RPS/",
              },
              {
                sources: "Imgs/TipCalcSS.png",
                overlapText: "Tip Calculator",
                link: "https://serg-ioe.github.io/TipCalc/",
              },
            ],
          },
        ],
      };
    },
  });

  workContent.mount("#work-content-area");
}

if (pageGlobal == "quickMaths.html") {
  const quickMaths = Vue.createApp({
    data () {
      return {
        answer1,
        answer2,
        answer3,
        answer4,
        mathQuestion
      }
    },
    methods: {

    }
  })

  quickMaths.mount("#vueController");
}