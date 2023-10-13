let canvas = document.getElementById("our-canvas");

let context = canvas.getContext("2d");

// ------------------------------------------------------------ Elzero Web School
// Videos [01 -- 06]

// let gradient = context.createLinearGradient(0, 0, 200, 0);

// gradient.addColorStop(0, "red");
// gradient.addColorStop(1, "blue");

// context.strokeStyle = gradient;

// context.font = "32px Tahoma";
// context.strokeRect(20, 20, 200, 100);
// context.strokeText("hello", 100, 170);

// Videos [06 -- 10]

// --------------------------------------------------------------------------- Kirupa -----------------------

// ********************** Drawing Basics / Lines **********************

// context.moveTo(160, 130);
// context.lineTo(75, 200);
// context.lineTo(150, 275);
// context.lineTo(250, 230);
// context.closePath();

// context.lineWidth = 5;
// context.strokeStyle = "#333333";
// context.fillStyle = "#FFCC00";

// context.fill();
// context.stroke();

// ********************** Drawing Curves **********************

// context.moveTo(50, 130);
// context.quadraticCurveTo(200, 400, 490, 100);
// context.bezierCurveTo(300, 50, 200, 400, 490, 100);
// context.lineTo(490, 300);
// context.lineTo(50, 300);
// context.closePath();

// context.lineWidth = 15;
// context.strokeStyle = "#FFCC00";
// context.fillStyle = "#FFDE58";
// context.stroke();
// context.fill();

// ********************** Drawing Multiple Things **********************

// context.beginPath();
// context.moveTo(160, 130);
// context.lineTo(75, 200);
// context.lineTo(150, 275);
// context.lineTo(250, 230);
// context.closePath();

// context.lineWidth = 5;
// context.strokeStyle = "#333333";
// context.fillStyle = "#FFCC00";

// context.fill();
// context.stroke();

// context.beginPath();
// context.moveTo(50, 50);
// context.lineTo(450, 300);
// context.closePath();

// context.lineWidth = 45;
// context.strokeStyle = "steelblue";

// context.stroke();

// ********************** Drawing Rectangles (and Squares) **********************

// context.beginPath();
// context.rect(20, 20, 200, 150);
// context.closePath();

// context.lineWidth = 10;
// context.strokeStyle = "#666666";

// context.stroke();

// context.fillStyle = "#51DCFF";
// context.fill();

// ********************** Drawing Triangles **********************

// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(100, 300);
// context.lineTo(300, 300);
// context.closePath();

// Equilateral Triangles

// let height = 200 * Math.cos(Math.PI / 6);

// context.beginPath();
// context.moveTo(100, 300);
// context.lineTo(300, 300);
// context.lineTo(200, 300 - height);
// context.closePath();

// context.lineWidth = 10;
// context.strokeStyle = "#666666";
// context.stroke();

// the fill color
// context.fillStyle = "#FFCC00";
// context.fill();

// ********************** Drawing Circles **********************

// context.beginPath();
// context.arc(200, 200, 93, 0, 2 * Math.PI, true);

// context.lineWidth = 20;
// context.strokeStyle = "#666666";
// context.stroke();

// context.fillStyle = "#FFCC00";
// context.fill();

// ********************** Working with Colors -- Gradients **********************

// context.beginPath();
// context.rect(75, 100, 250, 150);

// let linGradient = context.createLinearGradient(75, 0, 325, 0);

// linGradient.addColorStop(0.1, "#DDDDDD");
// linGradient.addColorStop(0.75, "#2D7BEC");
// linGradient.addColorStop(0.9, "#31FFFF");

// context.fillStyle = linGradient;
// context.fill();

// context.lineWidth = 5;
// context.strokeStyle = "#535353";
// context.stroke();

// let radGradient = context.createRadialGradient(150, 175, 0, 150, 175, 100);

// radGradient.addColorStop(0, "#FFCC00");
// radGradient.addColorStop(0.5, "#B4CB02");
// radGradient.addColorStop(1, "red");

// context.fillStyle = radGradient;
// context.fill();

// context.lineWidth = 5;
// context.strokeStyle = "#535353";
// context.stroke();

// ********************** Drawing Text **********************

// context.font = "bold 96px Helvetica, Arial, sans-serif";
// context.textBaseline = "alphabetic"; // Top, hanging, middle, [alphabetic], ideographic, and bottom
// context.fillStyle = "steelblue";
// context.fillText("Canvas!", 40, 125);
// context.strokeStyle = "#173b79";
// context.strokeText("Canvas!", 40, 275);

// ********************** Drawing Images **********************

// let myImage = new Image();
// myImage.src = "images/orange.svg";

// myImage.addEventListener("load", loadImage, false);

// function loadImage(e) {
// 	context.drawImage(myImage, 0, 0, 150, 150);
// }

// ********************** From Pixels to Objects **********************

// Make the code more reusable with functions

// function draw(xPos, yPos, radius, color) {
// 	context.beginPath();

// 	context.arc(xPos, yPos, radius, 0, 2 * Math.PI, true);
// 	context.closePath();

// 	context.fillStyle = color;
// 	context.fill();
// }

// function drawCircle() {
// 	draw(200, 150, 75, "#51D6FF");
// }
// drawCircle();

// Make the code more reusable with classses and objects

// class Circle {
// 	constructor(xPos, yPos, radius, color) {
// 		this.radius = radius;
// 		this.xPos = xPos;
// 		this.yPos = yPos;
// 		this.color = color;
// 	}
// 	static clearAll(canvas, context) {
// 		context.clearRect(0, 0, canvas.width, canvas.height);
// 	}
// 	setPosition(xPos, yPos) {
// 		this.xPos = xPos;
// 		this.yPos = yPos;
// 	}

// 	setRadius(radius) {
// 		this.radius = radius;
// 	}

// 	setColor(color) {
// 		this.color = color;
// 	}
// 	draw() {
// 		context.beginPath();

// 		context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, true);
// 		context.closePath();

// 		context.fillStyle = this.color;
// 		context.fill();
// 	}
// }
// // function drawCircle() {
// // 	let blueCircle = new Circle(200, 150, 75, "#51D6FF");
// // 	blueCircle.draw();

// // 	Circle.clearAll(canvas, context);
// // 	blueCircle.setPosition(50, 50);
// // 	blueCircle.draw();
// // }
// // drawCircle();
// let circles = [];
// function drawCircle() {
// 	for (let i = 0; i < 40; i++) {
// 		let r = Math.round(15 + Math.random() * 150);
// 		let xPos = Math.round(Math.random() * canvas.width);
// 		let yPos = Math.round(Math.random() * canvas.height);

// 		let newCircle = new Circle(xPos, yPos, r, "rgba(41, 170, 255, .1)");
// 		newCircle.draw();
// 		circles.push(newCircle); //keeping track of these objects for access and modification later.
// 	}
// }

// drawCircle();

// canvas.addEventListener("click", changeColor, false);

// function changeColor(e) {
// 	Circle.clearAll(canvas, context);
// 	circles.forEach((circle) => {
// 		circle.setColor("rgba(251, 80, 18, .3)");
// 		circle.draw();
// 	});
// }

// ********************** Creating Animations on the Canvas **********************

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let xPos = -500;
function drawCircle() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);

	// color in the background
	context.fillStyle = "#F8F8F8";
	context.fillRect(0, 0, canvasWidth, canvasHeight);

	// draw the circle
	context.beginPath();

	let radius = 175;
	context.arc(xPos, 225, radius, 0, Math.PI * 2, false);
	context.closePath();

	context.fillStyle = "#FFCC00";
	context.fill();

	context.lineWidth = 10;
	context.strokeStyle = "#DCB001";
	context.stroke();

	xPos > 1000 ? (xPos = -500) : (xPos += 5);

	requestAnimationFrame(drawCircle);
}
drawCircle();
