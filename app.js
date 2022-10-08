const navIcon = document.getElementById("nav-icon");
const navBar = document.querySelector(".navbar");
navIcon.addEventListener("click", () => {
	navBar.classList.toggle("navBarMobile");
	console.log(navBar.classList);
	navIcon.classList.toggle("open");
});

let startProductBarPos = -1;
window.onscroll = function () {
	if (startProductBarPos < 0) startProductBarPos = findPosY(navBar);

	if (pageYOffset > startProductBarPos) {
		navBar.style.position = "fixed";
		navBar.style.top = 0;
	} else {
		navBar.style.position = "relative";
	}
};

function findPosY(obj) {
	var curtop = 0;
	if (typeof obj.offsetParent != "undefined" && obj.offsetParent) {
		while (obj.offsetParent) {
			curtop += obj.offsetTop;
			obj = obj.offsetParent;
		}
		curtop += obj.offsetTop;
	} else if (obj.y) curtop += obj.y;
	return curtop;
}
