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

var myImage = new Image();
myImage.src = "images/orange.svg";

myImage.addEventListener("load", loadImage, false);

function loadImage(e) {
	context.drawImage(myImage, 0, 0, 150, 150);
}
