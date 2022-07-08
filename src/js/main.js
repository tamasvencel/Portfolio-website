"use strict";

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

////////////////
// Skills svg //
////////////////

// let path = document.querySelector(".line-container-svg").lastElementChild;
// let pathLength = path.getTotalLength();

// path.style.strokeDasharray = pathLength + " " + pathLength;

// path.style.strokeDashoffset = pathLength;

// window.addEventListener("scroll", () => {
//   // What % down is it?
//   var scrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);
//   // Length to offset the dashes
//   var drawLength = pathLength * scrollPercentage;

//   // Draw in reverse
//   path.style.strokeDashoffset = pathLength - drawLength + 650;
// });

////////////////
// sticky svg //
////////////////
// $(document).ready(function () {
//   $(".sectionSkills").waypoint(
//     function (direction) {
//       if (direction == "down") {
//         $(".line-container").addClass("testDiv");
//       } else {
//         $(".line-container").removeClass("testDiv");
//       }
//     },
//     {
//       offset: "-100px;",
//     }
//   );

//   $(".sectionAboutMe").waypoint(
//     function (direction) {
//       if (direction == "down") {
//         $(".line-container").fadeOut();
//       } else {
//         $(".line-container").fadeIn();
//       }
//     },
//     {
//       offset: "1200px;",
//     }
//   );
// });

/////////////////
// skill icons //
/////////////////

// // HTML
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 5900) & (y < 12800)) {
//     $(".htmlIcon").fadeIn();
//   } else {
//     $(".htmlIcon").fadeOut();
//   }
// });

// // CSS
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 6600) & (y < 12800)) {
//     $(".cssIcon").fadeIn();
//   } else {
//     $(".cssIcon").fadeOut();
//   }
// });

// // JS
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 7700) & (y < 12800)) {
//     $(".jsIcon").fadeIn();
//   } else {
//     $(".jsIcon").fadeOut();
//   }
// });

// // SASS
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 8300) & (y < 12800)) {
//     $(".sassIcon").fadeIn();
//   } else {
//     $(".sassIcon").fadeOut();
//   }
// });

// // B
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 9000) & (y < 12800)) {
//     $(".bootstrapIcon").fadeIn();
//   } else {
//     $(".bootstrapIcon").fadeOut();
//   }
// });

// // NODEJS
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 10300) & (y < 12800)) {
//     $(".nodejsIcon").fadeIn();
//   } else {
//     $(".nodejsIcon").fadeOut();
//   }
// });

// // REACTJS
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 11000) & (y < 12800)) {
//     $(".reactjsIcon").fadeIn();
//   } else {
//     $(".reactjsIcon").fadeOut();
//   }
// });

// // NPM
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 11600) & (y < 12800)) {
//     $(".npmIcon").fadeIn();
//   } else {
//     $(".npmIcon").fadeOut();
//   }
// });

// // ELECTRON
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 12000) & (y < 12800)) {
//     $(".electronIcon").fadeIn();
//   } else {
//     $(".electronIcon").fadeOut();
//   }
// });

// // VSCODE
// $(document).scroll(function () {
//   var y = $(this).scrollTop();
//   if ((y > 12500) & (y < 12800)) {
//     $(".vscodeIcon").fadeIn();
//   } else {
//     $(".vscodeIcon").fadeOut();
//   }
// });

// background color change after about me

// footer touch background scale
$(document).ready(function () {
  $(".footer").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".sectionAboutMe").addClass("footerTouchTransform");
        $(".desertSection").addClass("footerTouchTransform");
      } else {
        $(".sectionAboutMe").removeClass("footerTouchTransform");
        $(".desertSection").removeClass("footerTouchTransform");
      }
    },
    {
      offset: "-500px",
    }
  );
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 5000) {
    $(".footer").addClass("footerTouchTransform");
  } else {
    $(".footer").removeClass("footerTouchTransform");
  }
});

// Scroll reveal
ScrollReveal({ reset: true });
ScrollReveal({ duration: 1500 });
ScrollReveal().reveal(".work__card");
ScrollReveal().reveal(".allProjectsLink");
ScrollReveal().reveal(".aboutme_header");
ScrollReveal().reveal(".aboutMeParagraph", { delay: 200 });
ScrollReveal().reveal(".techSVG");
ScrollReveal().reveal(".designSVG");
ScrollReveal().reveal(".internetSVG", { delay: 300 });
ScrollReveal().reveal(".projectsAlpha");
ScrollReveal().reveal(".projects_header");
ScrollReveal().reveal(".skills_header", { delay: 300 });
ScrollReveal().reveal(".skill-box-row-1", { delay: 150 });
ScrollReveal().reveal(".skill-box-row-2", { delay: 200 });
ScrollReveal().reveal(".skill-box-row-3", { delay: 250 });

// Navigation
const nav = document.querySelector(".nav");
const header = document.querySelector(".headerCyan");
const projectsSection = document.querySelector(".sectionProjects");

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    // const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    // logo.style.opacity = this;
  }
};

//

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  nav.classList.add("sticky");

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // entire viewport
  threshold: 0, // when 0% of the header is visible...
  rootMargin: `-${navHeight + 130}px`,
});
headerObserver.observe(header);
