// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });

let container = document.querySelector(".container"),
  containerCover = document.querySelector(".container-wrapper"),
  containerCoverDark = document.querySelector(".container-wrapperCover"),
  showNav = document.querySelector(".show-nav"),
  nav = document.querySelector(".nav"),
  showSubNav = document.querySelectorAll(".nav-link_toSubNav"),
  subNav = document.querySelector(".sub-nav"),
  goBack = document.querySelectorAll(".nav-link_goBack");

// let viewPortWidth =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;
// // let moveAmt = (80 / 100) * viewPortWidth original;
let translateXNav = 0;
let translateXCover = 0;
let moveAmt = 300;

showNav.addEventListener("click", function (e) {
  translateXNav += moveAmt;
  nav.style.transform = "translateX(" + translateXNav + "px)";
  containerCover.style.transform = "translateX(" + moveAmt + "px)";
  containerCover.addEventListener(
    "transitionend",
    function () {
      containerCoverDark.style.display = "block";
    },
    { once: true }
  );
});

containerCoverDark.addEventListener("click", function () {
  translateXNav -= moveAmt;
  this.style.display = "none";
  nav.style.transform = "translateX(" + translateXNav + "px)";
  containerCover.style.transform = "translateX(0px)";
});

showSubNav.forEach(function (subNav) {
  subNav.addEventListener("click", function (e) {
    this.nextElementSibling.style.display = "block";

    translateXNav += moveAmt;
    nav.style.transform = "translateX(" + translateXNav + "px)";
  });
});

goBack.forEach(function (el) {
  el.addEventListener("click", function (e) {
    nav.addEventListener(
      "transitionend",
      function hideSubNav() {
        el.parentElement.parentElement.style.display = "none";
      },
      {
        once: true,
      }
    );

    translateXNav -= moveAmt;
    nav.style.transform = "translateX(" + translateXNav + "px)";
  });
});
