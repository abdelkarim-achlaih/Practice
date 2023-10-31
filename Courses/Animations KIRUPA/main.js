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

// let circle = document.querySelector(".circle");
// circle.addEventListener("mouseover", toggleClassesOnSetup, false);
// circle.addEventListener("transitionend", toggleClassesOnEnd, false);
// function toggleClassesOnSetup(e) {
// 	circle.classList.toggle("state-one");
// 	circle.classList.toggle("state-two");
// }
// function toggleClassesOnEnd(e) {
// 	if (e.propertyName === "opacity") {
// 		circle.classList.toggle("state-one");
// 		circle.classList.toggle("state-two");
// 	}
// }

// ------------------------------------------- Animating Many Elements Using a Transition ------------------------

let container = document.querySelector(".container");

for (let i = 0; i < 10; i++) {
	let circle = document.createElement("div");
	circle.classList.add("circle");
	container.append(circle);
}

let circles = document.querySelectorAll(".circle");

initialStyles();

function initialStyles() {
	circles.forEach((circle) => {
		circle.style.transitionDuration = `${getRandomNumber(1, 5)}s`;
		randomStyles(circle);
	});
}

window.addEventListener("load", setup, false);

function setup() {
	circles.forEach((circle) => {
		randomStyles(circle);
		circle.addEventListener("transitionend", randomStyles, false);
	});
}

function randomStyles(circle) {
	circle = circle.target || circle;
	circle.coordinates = {
		x: getRandomNumber(0, 450),
		y: getRandomNumber(0, 250),
		radius: getRandomNumber(50, 200),
		opacity: Math.trunc(Math.random() * 100) / 100,
	};
	changeStyles(circle);
}
function changeStyles(circle) {
	circle.style.opacity = `${circle.coordinates.opacity}`;
	circle.style.height = `${circle.coordinates.radius}px`;
	circle.style.width = `${circle.coordinates.radius}px`;
	circle.style.transform = `translate3d(${circle.coordinates.x}px,${circle.coordinates.y}px,0)`;
}
function getRandomNumber(n, m) {
	return Math.floor(Math.random() * (m - n + 1)) + n;
}
