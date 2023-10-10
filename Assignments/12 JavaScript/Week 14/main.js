//Assignments [102--110]*******************************************************

//Assignment 1

// let msg = prompt(`Print Number From – To`, `Example: 5-20`);
// let numbers = msg.split("-");
// numbers[0] = parseInt(numbers[0]);
// numbers[1] = parseInt(numbers[1]);
// if (numbers[0] < numbers[1]) {
// 	var min = numbers[0];
// 	var max = numbers[1];
// } else {
// 	var min = numbers[1];
// 	var max = numbers[0];
// }
// for (let i = min; i <= max; i++) {
// 	let div = document.createElement("div");
// 	div.innerText = i;
// 	document.body.appendChild(div);
// }

//Assignment 2

// let popup = function () {
// 	let popupDiv = document.createElement("div");
// 	popupDiv.className = "popup";
// 	let close = document.createElement("div");
// 	close.innerText = "X";
//   close.addEventListener("click", function () {
//     this.parentNode.remove();
//   })
// 	let title = document.createElement("h3");
// 	title.innerText = "Welcome";
// 	let desc = document.createElement("p");
// 	desc.innerText = `Welcome To Elzero Web School`;
// 	popupDiv.appendChild(close);
// 	popupDiv.appendChild(title);
// 	popupDiv.appendChild(desc);
//   document.body.appendChild(popupDiv);
// };
// setTimeout(popup, 5000);
// setInterval(function () {
//   let pop = document.querySelector(".popup");
//   if(! pop) {
//     popup();
//   }
// }, 1);
// let pop = document.querySelector(".popup");
// console.log(pop)

//Assignment 3 & 4

// let counter = document.querySelector(".counter");

// let msg = "Done! You will be redirected now";
// let count = setInterval(function () {
// 	if (counter.innerHTML !== msg) {
// 		if (counter.innerHTML !== "1") {
// 			counter.innerHTML -= 1;
// 		} else {
// 			counter.innerHTML = msg;
// 		}
// 	} else {
// 		clearInterval(count);
// 		console.log(msg);
// 		location.href = "https://elzero.org";
// 	}
// }, 1000);

//Assignment 5

let counter = document.querySelector(".counter");

let msg = "Done! You will be redirected now";
let count = setInterval(function () {
	if (counter.innerHTML !== msg) {
		if (counter.innerHTML !== "1") {
			counter.innerHTML -= 1;
		} else {
			counter.innerHTML = msg;
		}
	} else {
		clearInterval(count);
		console.log(msg);
		window.open("https://elzero.org", "", "width= 400, height=600")
	}
}, 1000);