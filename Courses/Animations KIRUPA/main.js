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

let container = document.querySelector(".container");

// for (let i = 0; i < 1; i++) {
// 	let newSnowflake = container.firstElementChild.cloneNode();
// 	container.append(newSnowflake);
// }

let snowFlakes = container.querySelectorAll("img");

initialStyles();

function initialStyles() {
	snowFlakes.forEach((snowFlake) => {
		snowFlake.styles = {};
		randomStyles(snowFlake);
		snowFlake.styles.y = -51;
		changeStyles(snowFlake);
	});
}

function randomStyles(snowFlake) {
	snowFlake.styles.width = getRandomNumber(20, 50);
	snowFlake.styles.opacity = Math.trunc(Math.random() * 100) / 100;
	randomCoordinates(snowFlake);
}

function randomCoordinates(snowFlake) {
	snowFlake.styles.x = getRandomNumber(0, 450);
	snowFlake.styles.y = getRandomNumber(0, 400);
}

function changeStyles(snowFlake) {
	snowFlake.style.opacity = `${snowFlake.styles.opacity}`;
	snowFlake.style.width = `${snowFlake.styles.width}px`;
	snowFlake.style.transform = `translate3d(${snowFlake.styles.x}px,${snowFlake.styles.y}px,0)`;
}

function getRandomNumber(n, m) {
	return Math.floor(Math.random() * (m - n + 1)) + n;
}

let speed = 0;
let direction = 0;
let delta = { x: 0, y: 0 };
let tmp = {};

// window.addEventListener("load", setup, false);

function setup() {
	snowFlakes.forEach((snowFlake) => {
		animate(snowFlake);

		function animate(snowFlake) {
			randomDestinationCoordinates(snowFlake);

			// speed = getRandomNumber(1, 2);
			// direction = [1, -1][getRandomNumber(0, 1)];
			// snowFlake.styles.accelAmount = speed * direction;

			snowFlake.styles.oldX = snowFlake.styles.x;
			snowFlake.styles.oldY = snowFlake.styles.y;

			tmp.x = snowFlake.styles.destinationX - snowFlake.styles.x;
			tmp.y = snowFlake.styles.destinationY - snowFlake.styles.y;
			snowFlake.styles.deltaDest = Math.sqrt(tmp.x * tmp.x + tmp.y * tmp.y);

			move();

			function move() {
				delta.x = snowFlake.styles.x - snowFlake.styles.oldX;
				delta.y = snowFlake.styles.y - snowFlake.styles.oldY;
				snowFlake.styles.deltaCurr = Math.sqrt(
					delta.x * delta.x + delta.y * delta.y
				);
				console.log(snowFlake.styles);
				if (snowFlake.styles.deltaCurr < snowFlake.styles.deltaDest) {
					console.log("hi");
					snowFlake.styles.x += 1;
					snowFlake.styles.y += 1;
					changeStyles(snowFlake);
					requestAnimationFrame(move);
				} else {
					randomCoordinates(snowFlake);
					snowFlake.styles.y = -51;
					changeStyles(snowFlake);
					animate(snowFlake);
				}
			}
		}
	});
}

function randomDestinationCoordinates(snowFlake) {
	snowFlake.styles.destinationX = getRandomNumber(0, 500);
	// snowFlake.styles.destinationY = getRandomNumber(550, 560);
	snowFlake.styles.destinationY = 501;
}
