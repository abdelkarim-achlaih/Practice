//Assignments [86--93]*******************************************************

//Assignment 1

// console.log(document.getElementById('elzero'))
// console.log(document.getElementsByClassName('element')[0])
// console.log(document.getElementsByName('js')[0])
// console.log(document.getElementsByTagName('div')[0])
// console.log(document.body.firstElementChild)
// console.log(document.body.querySelectorAll("div")[0]);
// console.log(document.body.querySelectorAll(".element")[0]);
// console.log(document.body.querySelectorAll("#elzero")[0]);
// console.log(document.body.querySelector("div"));
// console.log(document.body.querySelector(".element"));
// console.log(document.body.querySelector("#elzero"));
// console.log(document.body.querySelector("[name = 'js'"));

//Assignment 2

// let images = document.images;

// console.log(images)
// for (let i = 0;i < images.length; i++) {
//   images[i].setAttribute(
// 		"src",
// 		"https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
// 	);
//   images[i].setAttribute(
// 		"alt",
// 		"Elzero Logo"
// 	);
// }

//Assignment 3

// let input = document.querySelector('input');
// let result = document.querySelector('div');

// input.oninput = function () {
//   let mul = 15.6;
//   if (result.innerText !== "") {
//     result.innerText = "";
//   }
//   let resultText = document.createTextNode(
// 		`${input.value} USD Dollar = ${Math.round(mul * input.value * 100) / 100} Egyptian Pound`
// 	);
//   result.appendChild(resultText);
// }

//Assignment 4

// let div1 = document.querySelector(".one");
// let div2 = document.querySelector(".two");

// let div1Class = div1.className;
// let div2Class = div2.className;

// div1.title = div1Class;
// div2.title = div2Class;

// let div1Text = div1.textContent;
// let div2Text = div2.textContent;

// div1.textContent = div2Text;
// div2.textContent = `${div1Text} ${document.getElementsByTagName("div").length}`;

//Assignment 5

// let images = document.images;

// for (let i = 0; i<images.length; i++) {
//   if (images[i].hasAttribute('alt')) {
//     images[i].alt = 'Old';
//   } else {
//     images[i].alt = "Elzero New";
//   }
// }

//Assignment 6

let elements = document.querySelector("[name = 'elements']");
let texts = document.querySelector("[name = 'texts']");
let type = document.querySelector("[name = 'type']");
let resultsDiv = document.querySelector(".results-div");

document.forms[0].onsubmit = function (e) {
	while (resultsDiv.children.length !== 0) {
    resultsDiv.removeChild(resultsDiv.firstElementChild);
  }
	for (let i = 0; i < elements.value; i++) {
		let text = document.createTextNode(texts.value);
		let createdElement = document.createElement(type.value);
		createdElement.appendChild(text);
    createdElement.className = "box";
    createdElement.title = "Element";
    createdElement.id = `id-${i + 1}`;
		resultsDiv.appendChild(createdElement);
	}
	e.preventDefault();
};
