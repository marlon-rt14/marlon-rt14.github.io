const nav = document.querySelector(".nav");
const brandSpan = document.getElementById("brand-span");

const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".nav-item");

const navUlCont = document.querySelector(".nav__ul-cont");

const navResButton = document.querySelector(".nav-res-button");

const itemRes = document.querySelectorAll(".item-res");

const brandH1 = document.getElementById("brand-h1");

const iconMenu = document.getElementById("icon-menu");

const bgTransparent = "transparent";
const gradientText = "var(--gradien-color-text)";
const gradientBox = "var(--gradient-color-box)";

let flag = false;
let toggleItemRes = false;
const resMobile = 720;

window.addEventListener("scroll", (e) => {
  verifyScroll();
});

function removeItemsHover() {
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

function addItemsHover() {
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

navResButton.addEventListener("click", () => {
  flag = !flag;
  navUlCont.style.left = flag ? 0 : "-100vw";
  if (window.scrollY > 0) {
    nav.style.paddingTop = "1.5rem";
  }
  verifyFlag();
});

const verifyScroll = () => {
  if (window.scrollY === 0) {
    nav.style.background = flag ? "var(--sub-primary-color)" : bgTransparent;
    nav.style.position = "static";
    nav.style.paddingTop = "1.5rem";
    addItemsHover();
    navUlCont.style.top = "calc(2em + 1em + 2rem)";
    navUlCont.style.height = "calc((100vh) - (.1.5rem))";
    verifyMobileResponsive();
    brandSpan.style.background = flag ? "transparent" : gradientText;
    brandSpan.style.webkitTextFillColor = flag ? "white" : bgTransparent;
    brandSpan.style.backgroundClip = "text";
    brandSpan.style.webkitBackgroundClip = "text";
  } else {
    //   nav.style.background = gradientBox;
    nav.style.background = flag ? "var(--sub-primary-color)" : "var(--section-color)";
    nav.style.position = "fixed";
    nav.style.paddingTop = flag ? "1.5rem" : "0rem";
    // brandSpan.style.background = bgTransparent;
    // brandSpan.style.webkitTextFillColor = "#fff";
    // removeItemsHover();
    // navUlCont.style.top = "calc(1.4em + 2rem)";
    // navUlCont.style.height = "calc((100vh) - (1.4em + 2rem))";
    // verifyMobileResponsive();
  }
};

const verifyMobileResponsive = () => {
  if (window.screen.width <= resMobile && window.scrollY > 0) {
    brandH1.style.fontSize = "1.1em";
    brandH1.style.lineHeight = 0;
    brandSpan.style.fontSize = "1.1em";
  } else {
    // para desktop
    brandH1.style.fontSize = "1em";
    brandSpan.style.fontSize = "1em";
  }
};

const verifyFlag = () => {
  if (flag) {
    nav.style.background = "var(--sub-primary-color)";
    brandSpan.style.background = bgTransparent;
    brandSpan.style.webkitTextFillColor = "#fff";
    iconMenu.classList.remove("fa-bars");
    iconMenu.classList.add("fa-times");
  } else {
    iconMenu.classList.remove("fa-times");
    iconMenu.classList.add("fa-bars");
    verifyScroll();
  }
};

itemRes.forEach((item, ind) => {
  item.addEventListener("click", () => {
    console.log(item);
    console.log(window.scrollY);
    flag = !flag;
    navUlCont.style.left = flag ? 0 : "-100vw";
    iconMenu.classList.toggle("fa-bars");
    iconMenu.classList.toggle("fa-times");
    switch (ind) {
      case 0:
        window.scrollTo({ top: 0 });
        break;
      case 1:
        window.scrollTo({ top: 390 });
        break;

      default:
        break;
    }
    verifyFlag();
  });
});

window.addEventListener("scroll", () => verifyScroll());
