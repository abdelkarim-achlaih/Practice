// ------------------------------------------- Creating Animations in JavaScript ------------------------

// let circle = document.querySelector("#circle");

// let xPos = 0;
// let yPos = 0;
// let angle = 0;

// function animate() {
// 	xPos += 5; // Moving our circle to the right by 10 pixels at every frame update.
// 	yPos = Math.round(50 * Math.sin(angle));
// 	angle += 0.1;

// 	circle.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

// 	if (Math.abs(xPos) >= 900) {
// 		xPos = -500;
// 	}
// 	if (angle > 2 * Math.PI) {
// 		angle = 0;
// 	}
// 	requestAnimationFrame(animate);
// }
// animate();

// ------------------------------------------- Web Animations and the Animate Method ------------------------

// let circle = document.querySelector("#circle");
// circle.animate(
// 	[
// 		{
// 			opacity: ".5",
// 			transform: "translate3d(100px, -800px, 0) scale(3, 3)",
// 		},
// 		{
// 			opacity: "1.0",
// 			transform: "translate3d(100px, 600px, 0) scale(.5, .5)",
// 		},
// 	],
// 	{
// 		direction: "normal",
// 		duration: 1000,
// 		iterations: Infinity,
// 	}
// );

// ------------------------------------------- Ensuring Consistent Animation Speeds ------------------------

// Fixing the Frame Rate to a Consistent Value :
/* On higher refresh rate devices, our visual updates are artificially slowed down to meet our target rate */

// let fps = 60;

// let interval = Math.floor(1000 / fps);
// let previousTime = startTime;

// let currentTime = 0;
// let deltaTime = 0;

// function animationLoop(timestamp) {
// 	currentTime = timestamp;
// 	deltaTime = currentTime - previousTime;

// 	if (deltaTime > interval) {
// 		previousTime = currentTime - (deltaTime % interval);

// 		// add your visual updates-related code
// 	}

// 	requestAnimationFrame(animationLoop);
// }
// requestAnimationFrame(animationLoop);

// Using a Delta Time Multiplier

/* 	We take advantage of higher refresh rate devices by letting our requestAnimationFrame run at whatever native speed it needs to run at. 
		We make our visual updates at exactly this same native speed. By using a delta time multiplier, 
		we account for the variation between our target frame rate and the actual device frame rate. 
		This accounting allows us to speed up or slow down the rate that we are changing the values (CSS Vlues) that feed into our final animation. */

// set the expected frame rate
// let fps = 60;
// let previousTime = performance.now();

// let frame_interval = 1000 / fps; // Our desired time between each frame update, determined by the target frame rate we want to achieve - usually 60fps.
// let delta_time_multiplier = 1;
// let delta_time = 0;

// function animationLoop(currentTime) {
// 	delta_time = currentTime - previousTime; //The elapsed time between each requestAnimationFrame call (native one)
// 	delta_time_multiplier = delta_time / frame_interval; //the amount we adjust our rate of change by

// 	rateOfChange -= 5 * delta_time_multiplier; // rateOfChange (aka left/right/opacity...) All of our animations have some code that changes a value by an amount at every frame tick.

// 	previousTime = currentTime;

// 	// add your visual update code

// 	requestAnimationFrame(animationLoop);
// }
// requestAnimationFrame(animationLoop);

// ------------------------------------------- Scroll Activated Animations ------------------------

// JavaScript Scroll Event Throttling

// let isScrolling = false;

// window.addEventListener("scroll", throttleScroll, false);

// function throttleScroll(e) {
// 	if (isScrolling == false) {
// 		window.requestAnimationFrame(function () {
// 			dealWithScrolling(e);
// 			isScrolling = false;
// 		});
// 	}
// 	isScrolling = true;
// }

// function dealWithScrolling(e) {
// 	// do epic stuff
// }

// Learn Intersection Observer

// let list = document.querySelectorAll("ul li");
// const options = { threshold: 0.5 };
// const observer = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		entry.target.classList.toggle("show", entry.isIntersecting);
// 	});
// }, options);
// list.forEach((li) => {
// 	observer.observe(li);
// });

// ------------------------------------------- Smooth Parallax Scrolling ------------------------

// let bigYellowCircle = document.querySelector("#bigYellowCircle");
// let blueSquare = document.querySelector("#blueSquare");
// let greenPentagon = document.querySelector("#greenPentagon");

// function setTranslate(xPos, yPos, el) {
// 	el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
// }

// window.addEventListener("load", scrollLoop, false);

// let xScrollPosition;
// let yScrollPosition;

// function scrollLoop() {
// 	xScrollPosition = window.scrollX;
// 	yScrollPosition = window.scrollY;
// 	setTranslate(0, yScrollPosition * -0.2, bigYellowCircle);
// 	setTranslate(0, yScrollPosition * -1.5, blueSquare);
// 	setTranslate(0, yScrollPosition * 0.5, greenPentagon);

// 	requestAnimationFrame(scrollLoop);
// }

// ------------------------------------------- Introduction to Easing in JavaScript ------------------------

// let circle = document.querySelector("#circle");

// let angle = 0;

// function moveThing() {
// 	angle += 0.05;

// 	xPos = 125 + 100 * Math.cos(angle);
// 	yPos = 5 + 100 * Math.sin(angle);

// 	circle.style.left = xPos + "px";
// 	circle.style.top = yPos + "px";

// 	requestAnimationFrame(moveThing);
// }
// moveThing();

// ------------------------------------------- Animating with Robert Penner's Easing Functions ------------------------

// let text = document.querySelector(".text");
// let currentValue,
// 	currentIteration = 0,
// 	startValue = 16,
// 	changeInValue = 112, // final value - start value
// 	totalIterations = 300; // fps * duration (60 * 5)`

// function animate() {
// 	currentValue = easeOutCubic(
// 		currentIteration,
// 		startValue,
// 		changeInValue,
// 		totalIterations
// 	);
// 	text.style.fontSize = `${currentValue}px`;
// 	currentIteration++;
// 	if (currentIteration < totalIterations) requestAnimationFrame(animate);
// }
// animate();

// ------------------------------------------- Animated Scroll to Top with Easing ------------------------

let stat = false;
let upBtn = document.getElementById("floatie");
upBtn.addEventListener("click", goUp, false);
window.addEventListener(
	"mousewheel",
	(e) => {
		stat = false;
	},
	false
);

function goUp(e) {
	if (scrollPosition() > 0) {
		stat = true;
		setupAnimation(scrollPosition());
	}
}
function scrollPosition() {
	return window.scrollY;
}
function setupAnimation(startValue) {
	let currentIteration = 0,
		totalIterations = 60 * 2,
		currentValue;
	animate();
	function animate() {
		currentValue = startValue;
		currentValue = easeInQuad(
			currentIteration,
			startValue,
			-startValue,
			totalIterations
		);
		window.scrollTo(0, currentValue);
		currentIteration++;
		if (currentIteration <= totalIterations && stat) {
			requestAnimationFrame(animate);
		}
	}
}
