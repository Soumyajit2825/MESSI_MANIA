const navIcon = document.getElementById("nav-icon");
const navBar = document.querySelector(".navbar");
navIcon.addEventListener("click", () => {
	navBar.classList.toggle("navBarMobile");
	console.log(navBar.classList);
	navIcon.classList.toggle("open");
});
