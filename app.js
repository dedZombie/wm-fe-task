var collapsedMenu = document.getElementById("collapsedMenu");
var navMenuBtn    = document.getElementById("navMenu");
var searchMenuBtn = document.getElementById("searchMenu");
var slider        = document.querySelector(".slider");
var slides        = document.querySelectorAll(".slide");
var sliderText    = document.querySelectorAll(".slider-text");

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

function applyMarginTop(element, value, unit) {
  element.style.marginTop = value + unit;
}

document.addEventListener("DOMContentLoaded", function() {
  var gradientBar = document.querySelector(".gradient-bar");
  var gradientBarHeight = gradientBar.clientHeight || gradientBar.scrollHeight;
  var next = document.getElementById("next");
  var prev = document.getElementById("prev");

  var nextSlide = function() {
    // Get current class
    var current = document.querySelectorAll(".current");

    // Loop through elements with class of current
    for (var i = 0; i < current.length; i++) {
      // Remove current class
      current[i].classList.remove("current");

      // Check for sibling elements
      if (current[i].nextElementSibling) {
        // Add current class to next sibling
        current[i].nextElementSibling.classList.add("current");
      } else {
        slides[0].classList.add("current");
        sliderText[0].classList.add("current");
      }

      setTimeout(function() {
        current[i].classList.remove("current");
      }, 100);
    }
  }

  var prevSlide = function() {
    var current = document.querySelectorAll(".current");

    for (var i = 0; i < current.length; i++) {
      current[i].classList.remove("current");

      // Check for previous sibling element
      if (current[i].previousElementSibling) {
        current[i].previousElementSibling.classList.add("current");
      } else {
        slides[slides.length - 1].classList.add("current");
        sliderText[sliderText.length - 1].classList.add("current");
      }

      setTimeout(function() {
        current[i].classList.remove("current");
      });
    }
  }

  applyMarginTop(slider, gradientBarHeight, "px");

  navMenuBtn.addEventListener("click", function() {
    return toggleClass(navMenuBtn, collapsedMenu, "./static/images/menu-icon.png", "./static/images/menu-icon-active.png");
  });

  searchMenuBtn.addEventListener("click", function() {
    return toggleClass(searchMenuBtn, searchForm, "./static/images/search-icon.png", "./static/images/search-icon-active.png");
  });

  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });
});
