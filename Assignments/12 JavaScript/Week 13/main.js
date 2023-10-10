// Challenge [101] *****************************************

//Creating Header

let body = document.body;
let header = document.createElement("header");
let headerLogo = document.createElement("div");
let headerLogoText = document.createTextNode("Elzero");
headerLogo.appendChild(headerLogoText);
header.appendChild(headerLogo);
let headerNavUl = document.createElement("ul");
let headerNavLinksLi = [];
let headerNavLinksA = [];
let headerNavLinksAText = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < 4; i++) {
	headerNavLinksLi[i] = document.createElement("li");
	headerNavLinksA[i] = document.createElement("a");
	headerNavLinksLi[i].appendChild(headerNavLinksA[i]);
	headerNavLinksA[i].appendChild(
		document.createTextNode(headerNavLinksAText[i])
	);
	headerNavLinksA[i].href = `#${headerNavLinksAText[i]}`;
	headerNavUl.appendChild(headerNavLinksLi[i]);
	headerNavLinksLi[i].style.cssText = `
    margin-left: 20px;
  `;
	headerNavLinksA[i].style.cssText = `
    text-decoration: none;
    color: black;
  `;
}
header.appendChild(headerNavUl);
body.appendChild(header);

body.style.cssText = `
  margin: 0;
	padding: 0;
	font-family: Arial, Helvetica, sans-serif;
`;
header.style.cssText = `
  display: flex;
	justify-content: space-between;
	padding: 20px;
`;
headerLogo.style.cssText = `
  color: green;
	font-weight: bold;
`;
headerNavUl.style.cssText = `
  list-style-type: none;
	display: flex;
	padding: 0;
	margin: 0;
`;

//Creating Content

let content = document.createElement("div");
content.className = "content";
content.style.cssText = `
	display: flex;
	flex-wrap: wrap;
	background-color: #eee;
	justify-content: space-evenly;
	padding: 20px 0 0;
	min-height = calc(100vh - (2 * 58px));
`;

for (let i = 0; i < 15; i++) {
	let product = document.createElement("div");
	product.className = "product";
	let num = document.createElement("div");
	num.innerText = `${i + 1}`;
	let txt = document.createElement("div");
	txt.innerText = `Product`;
	product.style.cssText = `
		flex-basis: calc(95% / 3);
		margin-bottom: 20px;
		background-color: white;
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
	`;
	num.style.cssText = `font-size: 20px; font-weight: bold;`;
	txt.style.cssText = `font-size: 13px;`;
	product.appendChild(num);
	product.appendChild(txt);
	content.appendChild(product);
}
body.appendChild(content);

//Creating Footer

let footer = document.createElement("footer");
footer.innerText = `Copyright 2021`;

footer.style.cssText = `
	text-align: center;
	padding: 20px;
	box-sizing: border-box;
	background-color: #52ad00d9;
	color: white;
`;
body.appendChild(footer);

//Assignments [94--101]*******************************************************

//Assignment 2

// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector(".assign div:first-of-type");
// let classes = document.querySelector(".classes-list div");

// let show = function () {
// 	console.log(`Before: ${classes.childNodes.length} spans`);
// 	if (classes.childNodes.length > 0) {
// 		while (classes.childNodes.length > 0) {
// 			classes.firstChild.remove();
// 		}
// 	}
// 	console.log(`After: ${classes.children.length} spans`);
// 	if (current.classList.length > 0) {
// 		for (let i = 0; i < current.classList.length; i++) {
// 			let span = document.createElement("span");
// 			span.innerText = current.classList[i];
// 			classes.append(span);
// 		}
// 	} else {
// 		classes.innerText = "No Classes To Show";
// 	}
// };
// window.onload = show();

// add.onblur = function () {
// 	if (add.value !== "") {
// 		let classesToAdd = add.value.split(" ");
// 		for (let i = 0; i < classesToAdd.length; i++) {
// 			classesToAdd[i] = classesToAdd[i].toLowerCase();
// 			current.classList.add(classesToAdd[i]);
// 		}
// 	}
// 	add.value = "";
// 	show();
// };

// remove.onblur = function () {
// 	if (remove.value !== "") {
// 		let classesToRemove = remove.value.split(" ");
// 		for (let i = 0; i < classesToRemove.length; i++) {
// 			classesToRemove[i] = classesToRemove[i].toLowerCase();
// 			current.classList.remove(classesToRemove[i]);
// 		}
// 	}
// 	remove.value = "";
// 	show();
// };

//Assignment 3

// let div = document.querySelector("div");
// let p = document.querySelector("p");

// p.remove();

// let start = document.createElement("div");
// let end = document.createElement("div");

// start.className = "start";
// end.className = "end";

// start.title = "Start Element";
// end.title = "End Element";

// start.setAttribute("data-value", "Start");
// end.setAttribute("data-value", "end");

// start.innerText = "Start";
// end.innerText = "End";

// div.before(start);
// div.after(end);

//Assignment 4

// document.querySelector("div span").remove();

// console.log(document.querySelector("div").innerText);

//Assignment 5

// let elements = document.querySelectorAll("body *");

// elements.forEach(element => {
//   element.onclick = function () {
//     console.log(`This is ${element.nodeName}`)
//   }
// });
