const nav = document.querySelector(".nav");
const brandSpan = document.getElementById("brand-span");

const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");

const bgTransparent = "transparent";
const gradientText = "var(--gradien-color-text)";
const gradientBox = "var(--gradient-color-box)";

window.addEventListener("scroll", (e) => {
  if (window.scrollY === 0) {
    nav.style.background = bgTransparent;
    nav.style.position = "static";
    nav.style.paddingTop = "1.5rem";
    brandSpan.style.background = gradientText;
    brandSpan.style.webkitTextFillColor = bgTransparent;
    brandSpan.style.webkitBackgroundClip = "text";
    addHover();
  } else {
    nav.style.background = gradientBox;
    nav.style.position = "fixed";
    nav.style.paddingTop = ".2rem";
    brandSpan.style.background = bgTransparent;
    brandSpan.style.webkitTextFillColor = "#fff";
    removeHover();
  }
});

function removeHover() {
  let valor;
  for (const navItem of navItems) {
    navItem.addEventListener("mouseover", (e) => {
      navItem.style.background = bgTransparent;
      navItem.style.boxShadow = `0px 0px 20px 2px ${bgTransparent}`;
    });
    // navItem.addEventListener("mouseleave", (e) => {
    //   navItem.style.background = bgTransparent;
    // });
  }
}

function addHover() {
  let valor;
  for (const navItem of navItems) {
    navItem.addEventListener("mouseover", (e) => {
      navItem.style.background = gradientBox;
      navItem.style.boxShadow = `0px 0px 20px 2px var(--secondary-color)`;
    });
    navItem.addEventListener("mouseleave", (e) => {
      navItem.style.background = bgTransparent;
      navItem.style.boxShadow = `0px 0px 20px 2px ${bgTransparent}`;
    });
  }
}
