// "use strict";

// MOBILE NAVIGATION

const primaryNav = document.querySelector(".mainnav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    navToggle.classList.add("open");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    navToggle.classList.remove("open");
  }
});

// 100VH FOR MOBILE

function calculateVh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
}

// Initial calculation
calculateVh();

// Re-calculate on resize
window.addEventListener("resize", calculateVh);

// Re-calculate on device orientation change
window.addEventListener("orientationchange", calculateVh);

// // ARIA CURRENT PAGE
// document.querySelectorAll(".menu-link").forEach((link) => {
//   if (link.href === window.location.href) {
//     link.setAttribute("aria-current", "page");
//   }
// });

// ACTIVE LINKS NAVIGATION

// const sections = document.querySelectorAll("section[id]");

// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//   let scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop =
//       current.getBoundingClientRect().top + window.pageYOffset - 50;
//     sections = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".mainnav a[href*=" + sections + "]")
//         .classList.add("active");
//     } else {
//       document
//         .querySelector(".mainnav a[href*=" + sectionId + "]")
//         .classList.remove("active");
//     }
//   });
// }

// SET ACTIVE STATES TO MENU ITEM
const links = document.querySelectorAll(".mainnav li");

links.forEach((li) => {
  li.addEventListener("click", () => {
    resetLinks();
    li.classList.add("active");
  });
});

function resetLinks() {
  links.forEach((li) => {
    li.classList.remove("active");
  });
}

///////////////////////////////////////////////////////////
// Smooth scrolling animation

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
