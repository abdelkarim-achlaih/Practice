// ------------------------------------------- Creating Animations in JavaScript ------------------------

let circle = document.querySelector("#circle");

let xPos = 0;
let yPos = 0;
let angle = 0;

function animate() {
	xPos += 5; // Moving our circle to the right by 10 pixels at every frame update.
	yPos = Math.round(50 * Math.sin(angle));
	angle += 0.1;

	circle.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

	if (Math.abs(xPos) >= 900) {
		xPos = -500;
	}
	if (angle > 2 * Math.PI) {
		angle = 0;
	}
	requestAnimationFrame(animate);
}
animate();
