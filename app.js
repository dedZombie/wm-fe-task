var collapsedMenu = document.getElementById("collapsedMenu");
var navMenuBtn    = document.getElementById("navMenu");
var searchMenuBtn = document.getElementById("searchMenu");

navMenuBtn.addEventListener("click", function() {
  var inactiveImgSrc = "./static/images/menu-icon.png";
  var activeImgSrc = "./static/images/menu-icon-active.png"
  var collapsedMenu = document.getElementById("collapsedMenu");

  navMenuBtn.classList.toggle("active");

  if(navMenuBtn.classList.contains("active")) {
    navMenuBtn.children[0].src = activeImgSrc;
    collapsedMenu.classList.remove("display-none");
    collapsedMenu.classList.add("display-block");
  } else {
    navMenuBtn.children[0].src = inactiveImgSrc;
    collapsedMenu.classList.remove("display-block");
    collapsedMenu.classList.add("display-none");
  }
});

searchMenuBtn.addEventListener("click", function() {
  var inactiveImgSrc = "./static/images/search-icon.png";
  var activeImgSrc = "./static/images/search-icon-active.png"
  var searchForm = document.getElementById("searchForm");

  searchMenuBtn.classList.toggle("active");

  if(searchMenuBtn.classList.contains("active")) {
    searchMenuBtn.children[0].src = activeImgSrc;
    searchForm.classList.remove("display-none");
    searchForm.classList.add("display-block");
  } else {
    searchMenuBtn.children[0].src = inactiveImgSrc;
    searchForm.classList.remove("display-block");
    searchForm.classList.add("display-none");
  }
});
