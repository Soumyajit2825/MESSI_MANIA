const navIcon = document.getElementById("nav-icon");
const navBar = document.querySelector(".navbar");
const ball = document.querySelector(".ball");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
const _switch = document.querySelector(".switch-container");
const box = document.querySelector(".box");
let main = document.getElementsByTagName('main')[0]
let secondary_heading = document.querySelectorAll(".secondary_heading")

navIcon?.addEventListener("click", () => {
  navBar.classList.toggle("navBarMobile");
  navIcon.classList.toggle("open");
});

let ltheme = localStorage.getItem("theme");
console.log(ltheme);
let theme = ltheme === null ? "light" : ltheme;

_switch?.addEventListener("click", () => {
  console.log("listener ran bruv");
  if (theme === "light") {
    sun.style.transform = "translateX(45px) rotate(250deg) ";
    sun.style.opacity = "0";
    moon.style.transform = "translateX(-45px) rotate(350deg)";
    moon.style.opacity = "1";

    applyDarkTheme()

    theme = "dark";
  } else {
    sun.style.transform = "translateX(0)";
    sun.style.opacity = "1";
    moon.style.transform = "translateX(0)";
    moon.style.opacity = "0";

    removeDarkTheme()

    theme = "light";
  }
});

setInterval(() => {
  document.body.className = localStorage.getItem("theme");
  localStorage.setItem("theme", theme);
}, 1);
window.onload = () => {
  if (ltheme === "light") {
    sun.style.transform = "translateX(0)";
    sun.style.opacity = "1";
    moon.style.transform = "translateX(0)";
    moon.style.opacity = "0";
    removeDarkTheme()
  }
  if (ltheme === "dark") {
    sun.style.transform = "translateX(45px) ";
    sun.style.opacity = "0";
    moon.style.transform = "translateX(-45px)";
    moon.style.opacity = "1";
    applyDarkTheme()
  }
};


function applyDarkTheme() {
  main.classList.add("darkTheme");
  document.getElementById("STATS").classList.add("darkTheme")

  document.getElementsByClassName("main-info")[0].classList.add("darkTheme")
  secondary_heading.forEach((heading) => {
    heading.classList.add("darkTheme")
  })
  document.querySelectorAll(".blackText").forEach((Txt) =>
    Txt.style.color = "white"
  )

}
function removeDarkTheme() {

  main.classList.remove("darkTheme");
  document.getElementById("STATS").classList.remove("darkTheme")
  document.getElementsByClassName("main-info")[0].classList.remove("darkTheme")
  secondary_heading.forEach((heading) => {
    heading.classList.remove("darkTheme")
  })

  document.querySelectorAll(".blackText").forEach((Txt) =>
    Txt.style.color = "black"
  )



}

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".div-navbar");
  const navLinks = document.querySelectorAll(".div-navbar a");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });

}

navSlide();


// document.querySelectorAll('.pht-content > img').forEach(image =>{
//   image.addEventListener('click', () =>{
//     document.querySelector('.bgh').classList.remove('.pop-up');
//     document.querySelector('.bgh').classList.add('.pop-up-rem');
//   })
// })

// document.querySelector('.pop-up').classList.remove('.pop-up');
//     document.querySelector('.pop-up').classList.add('.pop-up-rem');
document.querySelectorAll('.pop img').forEach(im => {
  im.onclick = () => {
    document.querySelector('.pop-up').style.display = 'flex';
    document.querySelector('.pop-up img').src = im.getAttribute('src');
  }
});

document.querySelector('.pop-up span').onclick = () => {
  document.querySelector('.pop-up').style.display = 'none';
};