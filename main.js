$(document).ready(function () {
  
  $(".navexpanded").hide(); // hide the navexpanded div on page load
  $(".navbar-toggler").click(function () {
    $(".navexpanded").slideToggle();
    $(".navbar").slideToggle();
  });
  


  var prevPage;
  
  $(".navbar-button").click(function () {
    var page = Math.floor(Math.random() * 6)
    while (prevPage == page) {
      page = Math.floor(Math.random() * 6);
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
    }
    prevPage = page;
  });
});


