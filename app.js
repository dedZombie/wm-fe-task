var collapsedMenu = document.getElementById("collapsedMenu");
var navMenuBtn    = document.getElementById("navMenu");
var searchMenuBtn = document.getElementById("searchMenu");

function toggleClass(element, target, inactiveImgSrc , activeImgSrc) {
  element.classList.toggle("active");

  if(element.classList.contains("active")) {
    element.children[0].src = activeImgSrc;
    target.classList.remove("display-none");
    target.classList.add("display-block");
  } else {
    element.children[0].src = inactiveImgSrc;
    target.classList.remove("display-block");
    target.classList.add("display-none");
  }
}

navMenuBtn.addEventListener("click", function() {
  return toggleClass(navMenuBtn, collapsedMenu, "./static/images/menu-icon.png", "./static/images/menu-icon-active.png");
});

searchMenuBtn.addEventListener("click", function() {
  return toggleClass(searchMenuBtn, searchForm, "./static/images/search-icon.png", "./static/images/search-icon-active.png");
});
