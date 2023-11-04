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

// let container = document.querySelector(".container");

// for (let i = 0; i < 10; i++) {
// 	let circle = document.createElement("div");
// 	circle.classList.add("circle");
// 	container.append(circle);
// }

// let circles = document.querySelectorAll(".circle");

// initialStyles();

// function initialStyles() {
// 	circles.forEach((circle) => {
// 		circle.style.transitionDuration = `${getRandomNumber(1, 5)}s`;
// 		randomStyles(circle);
// 	});
// }

// window.addEventListener("load", setup, false);

// function setup() {
// 	circles.forEach((circle) => {
// 		randomStyles(circle);
// 		circle.addEventListener("transitionend", randomStyles, false);
// 	});
// }

// function randomStyles(circle) {
// 	circle = circle.target || circle;
// 	circle.coordinates = {
// 		x: getRandomNumber(0, 450),
// 		y: getRandomNumber(0, 250),
// 		radius: getRandomNumber(50, 200),
// 		opacity: Math.trunc(Math.random() * 100) / 100,
// 	};
// 	changeStyles(circle);
// }
// function changeStyles(circle) {
// 	circle.style.opacity = `${circle.coordinates.opacity}`;
// 	circle.style.height = `${circle.coordinates.radius}px`;
// 	circle.style.width = `${circle.coordinates.radius}px`;
// 	circle.style.transform = `translate3d(${circle.coordinates.x}px,${circle.coordinates.y}px,0)`;
// }
// function getRandomNumber(n, m) {
// 	return Math.floor(Math.random() * (m - n + 1)) + n;
// }

// ------------------------------------------- The Falling Snow Effect ------------------------

// let container = document.querySelector(".container");

// for (let i = 0; i < 20; i++) {
// 	let newSnowflake = container.firstElementChild.cloneNode();
// 	container.append(newSnowflake);
// }

// let snowFlakes = container.querySelectorAll("img");

// initialStyles();

// function initialStyles() {
// 	snowFlakes.forEach((snowFlake) => {
// 		snowFlake.styles = {};
// 		randomStyles(snowFlake);
// 		changeStyles(snowFlake);
// 	});
// }

// function randomStyles(snowFlake) {
// 	snowFlake.styles.width = getRandomNumber(20, 50);
// 	snowFlake.styles.opacity = Math.trunc(Math.random() * 100) / 100;
// 	randomCoordinates(snowFlake);
// }

// function randomCoordinates(snowFlake) {
// 	snowFlake.styles.x = getRandomNumber(0, 450);
// 	snowFlake.styles.y = -51;
// }

// function changeStyles(snowFlake) {
// 	snowFlake.style.opacity = `${snowFlake.styles.opacity}`;
// 	snowFlake.style.width = `${snowFlake.styles.width}px`;
// 	snowFlake.style.transform = `translate3d(${snowFlake.styles.x}px,${snowFlake.styles.y}px,0)`;
// }

// function getRandomNumber(n, m) {
// 	return Math.floor(Math.random() * (m - n + 1)) + n;
// }

// function randomDestinationCoordinates(snowFlake) {
// 	snowFlake.styles.destinationX = getRandomNumber(0, 500);
// 	snowFlake.styles.destinationY = 501;
// }

// let speed = 0;
// let direction = 0;

// window.addEventListener("load", setup, false);

// function setup() {
// 	snowFlakes.forEach((snowFlake) => {
// 		animate(snowFlake);

// 		function animate(snowFlake) {
// 			randomDestinationCoordinates(snowFlake);

// 			snowFlake.styles.speed = 5 + 40 * Math.random();
// 			snowFlake.styles.direction = Math.random() < 0.5 ? 1 : -1;
// 			snowFlake.styles.counter = 0;

// 			move();

// 			function move() {
// 				if (snowFlake.styles.y < container.clientHeight + 1) {
// 					snowFlake.styles.counter += snowFlake.styles.speed / 5000;
// 					snowFlake.styles.x +=
// 						(snowFlake.styles.direction *
// 							snowFlake.styles.speed *
// 							Math.cos(snowFlake.styles.counter)) /
// 						40;
// 					snowFlake.styles.y +=
// 						Math.sin(snowFlake.styles.counter) / 40 +
// 						snowFlake.styles.speed / 30;
// 					changeStyles(snowFlake);
// 					requestAnimationFrame(move);
// 				} else {
// 					randomCoordinates(snowFlake);
// 					changeStyles(snowFlake);
// 					animate(snowFlake);
// 				}
// 			}
// 		}
// 	});
// }

// ------------------------------------------- Zooming Concentric (Striped) Circles ------------------------

// let circle = document.querySelector(".radialStripes");
// let offset = -20;
// function animateCircle() {
// 	setTimeout(() => {
// 		circle.style.setProperty("--offset", `${offset}px`);
// 		offset++;
// 		if (offset > 20) {
// 			offset = -20;
// 		}
// 		requestAnimationFrame(animateCircle);
// 	}, 20);
// }
// animateCircle();

// ------------------------------------------- Exercise: Move Element to Click Position ------------------------

let container = document.querySelector(".container");
let circle = document.querySelector(".circle");
circle.x = 25;
circle.y = 25;

container.addEventListener("click", direction, false);
let xPos = 0;
let yPos = 0;
function direction(e) {
	xPos = e.clientX - getDimensions(container).x;
	yPos = e.clientY - getDimensions(container).y;
	currentIteration = 0;
	startValueX = circle.x;
	startValueY = circle.y;
	move();
}
let currentIteration = 0,
	startValueX = 0,
	startValueY = 0,
	totalIterations = 60; // fps * duration (60 * 5)`
function move() {
	circle.x = xPos;
	circle.y = yPos;
	circle.style.transform = `translate3d(${
		easeInOutExpo(
			currentIteration,
			startValueX,
			xPos - startValueX,
			totalIterations
		) - 25
	}px,${
		easeInOutExpo(
			currentIteration,
			startValueY,
			yPos - startValueY,
			totalIterations
		) - 25
	}px, 0)`;
	currentIteration++;
	if (currentIteration < totalIterations) requestAnimationFrame(move);
}
function getDimensions(node) {
	return {
		x: node.getBoundingClientRect().left,
		y: node.getBoundingClientRect().top,
	};
}
