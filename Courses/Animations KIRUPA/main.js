// ------------------------------------------- Animating Drop Shadows ------------------------

// ------------------------------------------- Slide and Bounce an Image on Hover ------------------------

let picContainers = document.querySelectorAll(".picture-container img");

picContainers.forEach((container) => {
	container.addEventListener("mouseover", hoverOn, false);
	container.addEventListener("mouseout", hoverOff, false);
});
function hoverOn(e) {
	e.target.classList.remove("slideOut");
	e.target.classList.add("slideIn");
	e.target.style.top = "0";
}
function hoverOff(e) {
	e.target.classList.remove("slideIn");
	e.target.classList.add("slideOut");
	e.target.style.top = "-150px";
}
