// ------------------------------------------- Animating Drop Shadows ------------------------

// ------------------------------------------- Slide and Bounce an Image on Hover ------------------------

// let picContainers = document.querySelectorAll(".picture-container img");

// picContainers.forEach((container) => {
// 	container.addEventListener("mouseover", hoverOn, false);
// 	container.addEventListener("mouseout", hoverOff, false);
// });
// function hoverOn(e) {
// 	e.target.style.top = getComputedStyle(e.target).top;
// 	e.target.classList.remove("slideOut");
// 	e.target.classList.add("slideIn");
// }
// function hoverOff(e) {
// 	e.target.style.top = getComputedStyle(e.target).top;
// 	e.target.classList.remove("slideIn");
// 	e.target.classList.add("slideOut");
// }

// ------------------------------------------- Animating Items Around a Point ------------------------

// ------------------------------------------- Sliding / Scrolling Animation with Infinite Items ------------------------

// let container = document.querySelector(".container");
// let items = document.querySelectorAll(".item");

// items.forEach((item) => {
// 	item.data = {
// 		one: getRandomNumber(0, 10),
// 		two: getRandomNumber(0, 10),
// 	};
// 	setContent(item);
// });

// container.addEventListener("animationiteration", updateAndGenerate, false);

// function updateAndGenerate(e) {
// 	e.target.data = {
// 		one: e.target.data.two,
// 		two: getRandomNumber(0, 10),
// 	};

// 	setContent(e.target);
// }

// function getRandomNumber(n, m) {
// 	return Math.floor(Math.random() * (m - n + 1)) + n;
// }
// function setContent(item) {
// 	item.children[0].innerHTML = item.data.one;
// 	item.children[1].innerHTML = item.data.two;
// }

// ------------------------------------------- Looping a CSS Transition ------------------------

let circle = document.querySelector(".circle");
circle.addEventListener("mouseover", toggleClassesOnSetup, false);
circle.addEventListener("transitionend", toggleClassesOnEnd, false);
function toggleClassesOnSetup(e) {
	circle.classList.toggle("state-one");
	circle.classList.toggle("state-two");
}
function toggleClassesOnEnd(e) {
	if (e.propertyName === "opacity") {
		circle.classList.toggle("state-one");
		circle.classList.toggle("state-two");
	}
}
