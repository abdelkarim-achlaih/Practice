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

context.moveTo(160, 130);
context.lineTo(75, 200);
context.lineTo(150, 275);
context.lineTo(250, 230);
context.closePath();

context.lineWidth = 5;
context.strokeStyle = "#333333";
context.fillStyle = "#FFCC00";

context.fill();
context.stroke();
