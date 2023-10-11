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

context.beginPath();
context.rect(20, 20, 200, 150);
context.closePath();

context.lineWidth = 10;
context.strokeStyle = "#666666";

context.stroke();

context.fillStyle = "#51DCFF";
context.fill();
