// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });

let container = document.querySelector(".container"),
  containerCover = document.querySelector(".container-wrapper"),
  containerCoverDark = document.querySelector(".container-wrapperCover"),
  showNav = document.querySelector(".show-nav"),
  showSubNav = document.querySelectorAll(".nav-link_toSubNav"),
  subNav = document.querySelector(".sub-nav"),
  goBack = document.querySelectorAll(".nav-link_goBack");

// let viewPortWidth =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;
// // let moveAmt = (80 / 100) * viewPortWidth original;
let translateXNav = 0;
let moveAmt = 300;
let time = 0.8;

showNav.addEventListener("click", function () {
  translateXNav += moveAmt;
  gsap.to(".nav", { duration: time / 2, ease: "power1.out", x: translateXNav });
  gsap.to(".container-wrapper", {
    duration: time / 2,
    ease: "power1.out",
    x: moveAmt,
    onComplete: function () {
      containerCoverDark.style.display = "block";
    },
  });
});

containerCoverDark.addEventListener("click", function () {
  translateXNav -= moveAmt;
  gsap.to(".nav", { duration: time / 2, ease: "power1.out", x: translateXNav });
  gsap.to(".container-wrapper", {
    duration: time / 2,
    ease: "power1.out",
    x: 0,
    onComplete: () => {
      this.style.display = "none";
    },
  });
});

showSubNav.forEach(function (subNav) {
  subNav.addEventListener("click", function () {
    this.nextElementSibling.style.display = "block";
    translateXNav += moveAmt;
    gsap.to(".nav", { duration: time, ease: "power1.out", x: translateXNav });
  });
});

goBack.forEach(function (el) {
  el.addEventListener("click", function () {
    translateXNav -= moveAmt;
    gsap.to(".nav", {
      duration: time,
      ease: "power1.out",
      x: translateXNav,
      onComplete: function () {
        el.parentElement.parentElement.style.display = "none";
      },
    });
  });
});
