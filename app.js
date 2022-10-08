const navIcon = document.getElementById("nav-icon");
const navBar = document.querySelector(".navbar");
const ball = document.querySelector(".ball");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
const _switch = document.querySelector(".switch-container");
const box = document.querySelector(".box");

navIcon.addEventListener("click", () => {
	navBar.classList.toggle("navBarMobile");
	navIcon.classList.toggle("open");
});

// let ltheme = localStorage.getItem("tme");
let theme = "light";

_switch.addEventListener("click", () => {
	if (theme === "light") {
		sun.style.transform = "translateX(45px) rotate(250deg) ";
		sun.style.opacity = "0";
		moon.style.transform = "translateX(-45px) rotate(350deg)";
		moon.style.opacity = "1";
		theme = "dark";
	} else {
		sun.style.transform = "translateX(0)";
		sun.style.opacity = "1";
		moon.style.transform = "translateX(0)";
		moon.style.opacity = "0";
		theme = "light";
	}
	document.body.className = theme;
});

// setInterval(() => {
// 	// localStorage.setItem("theme", theme);
// 	// console.log(theme);
// }, 500);
