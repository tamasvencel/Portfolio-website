"use strict";
import main from "../sass/main.scss";
import mixitup from "./mixitup.min.js";
import jqueryWaypoints from "../../Vendors/jquery.waypoints.min.js";

///////////////
// Animation //
///////////////
window.addEventListener("load", function () {
  let elements1 = document.getElementsByClassName("alpha1");

  for (let i = 0; i <= elements1.length; i++) {
    elements1[i].addEventListener("animationend", function (e) {
      elements1[i].classList.remove("animated");
    });

    elements1[i].addEventListener("mouseover", function (e) {
      elements1[i].classList.add("animated");
    });
  }
});

window.addEventListener("load", function () {
  let elements2 = document.getElementsByClassName("alpha2");
  for (let i = 0; i <= elements2.length; i++) {
    elements2[i].addEventListener("animationend", function (e) {
      elements2[i].classList.remove("animated");
    });

    elements2[i].addEventListener("mouseover", function (e) {
      elements2[i].classList.add("animated");
    });
  }
});

window.addEventListener("load", function () {
  let elements2 = document.getElementsByClassName("projectsAlpha");
  for (let i = 0; i <= elements2.length; i++) {
    elements2[i].addEventListener("animationend", function (e) {
      elements2[i].classList.remove("animated");
    });

    elements2[i].addEventListener("mouseover", function (e) {
      elements2[i].classList.add("animated");
    });
  }
});

/////////////////////
// Click animation //
/////////////////////

document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX - 4}px`;
  ripple.style.top = `${e.clientY - 3.5}px`;

  ripple.style.animation = "ripple-effect .4s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);
}

//////////////////////////////
// Mixitup filter portfolio //
//////////////////////////////

let containerEl = document.querySelector(".work__container");
let mixerPortfolio;

if (containerEl) {
  mixerPortfolio = mixitup(containerEl, {
    selectors: {
      target: ".work__card",
    },
    animation: {
      duration: 300,
    },
  });
}

// link active work
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

///////////////////
// Smooth scroll //
///////////////////

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
