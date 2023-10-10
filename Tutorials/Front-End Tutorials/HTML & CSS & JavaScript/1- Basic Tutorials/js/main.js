// ******************* Random Element From Sequence

// let arr = ["Ahmed", "Sayed", "Ali"];

// console.log(arr[Math.round(Math.random() * arr.length)]);

// ******************* Random Background Color

// let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// let handle = setInterval(() => {
// 	let color = "#";
// 	for (let i = 0; i < 6; i++) {
// 		color += hex[Math.floor(Math.random() * hex.length)];
// 	}
// 	document.body.style.backgroundColor = color;
// }, 500);

// setTimeout(() => {
// 	clearInterval(handle);
// }, 5000);

// ******************* Scroll To Top

// let scroll = document.querySelector(".scroll");
// let hero = document.querySelector(".scroll .hero");
// let btn = document.querySelector(".scroll .btn");

// let heroHeight = hero.offsetHeight;

// window.onscroll = function () {
// 	if (window.scrollY > heroHeight) {
// 		btn.style.opacity = 1;
// 	} else {
// 		btn.style.opacity = 0;
// 	}
// };

// btn.onclick = function () {
// 	window.scrollTo(0, 0);
// };

// ******************* Create Page Scroll Progress

// let scroll = document.querySelector(".scroll");
// let container = document.querySelector(".container");

// window.onscroll = function () {
// 	let fullHeight =
// 		document.documentElement.scrollHeight -
// 		document.documentElement.clientHeight;
// 	console.log(fullHeight);
// 	let fullWidth = document.documentElement.offsetWidth;
// 	scroll.style.width = `${(this.scrollY / fullHeight) * fullWidth}px`;
// };

// ******************* Generate Random Serial Number

// let serial = document.querySelector(".serial");
// let generate = document.querySelector(".generate");
// let range = [
// 	0,
// 	1,
// 	2,
// 	3,
// 	4,
// 	5,
// 	6,
// 	7,
// 	8,
// 	9,
// 	"a",
// 	"b",
// 	"c",
// 	"d",
// 	"e",
// 	"f",
// 	"g",
// 	"h",
// 	"i",
// 	"j",
// 	"k",
// 	"l",
// 	"m",
// 	"n",
// 	"o",
// 	"p",
// 	"q",
// 	"r",
// 	"s",
// 	"t",
// 	"u",
// 	"v",
// 	"w",
// 	"x",
// 	"y",
// 	"z",
// 	"A",
// 	"B",
// 	"C",
// 	"D",
// 	"E",
// 	"F",
// 	"G",
// 	"H",
// 	"I",
// 	"J",
// 	"K",
// 	"L",
// 	"M",
// 	"N",
// 	"O",
// 	"P",
// 	"Q",
// 	"R",
// 	"S",
// 	"T",
// 	"U",
// 	"V",
// 	"W",
// 	"X",
// 	"Y",
// 	"Z",
// ];
// generate.onclick = function () {
// 	let code = "";
// 	for (let i = 0; i < 20; i++) {
// 		code += range[Math.floor(Math.random() * range.length)];
// 	}
// 	if (serial.hasChildNodes) {
// 		serial.removeChild(serial.firstChild);
// 	}
// 	serial.append(code);
// };

// ******************* Count Input Characters And Fill Borders

// let input = document.querySelector("input");
// let left = document.querySelector(".left span");
// let fill = document.querySelector(".fill");
// let max = input.getAttribute("maxlength");
// left.innerHTML = max;
// input.oninput = function () {
// 	let count = input.value.length;
// 	left.innerHTML = max - count;
// 	fill.style.width = `${(count / max) * 100}%`;
// };

// ******************* Create Tabs
// let lis = document.querySelectorAll("li");
// let tabs = document.querySelectorAll(".tab");

// tabs[0].style.display = "block";
// lis.forEach((li) => {
// 	li.onclick = function () {
// 		lis.forEach((li) => {
// 			li.classList.remove("active");
// 		});
// 		this.classList.add("active");
// 		tabs.forEach((tab) => {
// 			if (tab.dataset.type === this.innerHTML) {
// 				tab.style.display = "block";
// 			} else {
// 				tab.style.display = "none";
// 			}
// 		});
// 	};
// });

// ******************* Full Screen Navigation

// let nav = document.querySelector(".navigation");
// let toogler = document.querySelector(".toogler");
// let tooglerSpans = document.querySelectorAll(".toogler span");
// let menu = document.querySelector(".menu");
// let close = document.querySelector(".close");

// toogler.onclick = function () {
// 	if (toogler.dataset.expand === "false") {
// 		toogler.dataset.expand = "true";
// 		nav.style.backgroundColor = `rgb(67, 67, 67)`;
// 		menu.style.top = 0;
// 		tooglerSpans.forEach((span) => {
// 			span.style.backgroundColor = `white`;
// 		});
// 		close.style.display = `flex`;
// 		toogler.style.display = `none`;
// 	}
// };
// close.onclick = closeMenu;
// addEventListener("keydown", function (e) {
// 	if (e.key === "Escape") {
// 		closeMenu();
// 	}
// });

// function closeMenu() {
// 	if (toogler.dataset.expand === "true") {
// 		toogler.dataset.expand = "false";
// 		nav.style.backgroundColor = `white`;
// 		menu.style.top = `-1000px`;
// 		tooglerSpans.forEach((span) => {
// 			span.style.backgroundColor = `black`;
// 		});
// 		close.style.display = `none`;
// 		toogler.style.display = `flex`;
// 	}
// }

// ******************* Create Image Slider

let holders = document.querySelectorAll(".slider .images .img-holder");
let tooglers_nums = document.querySelectorAll(".slider ul li");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

tooglers_nums.forEach((num) => {
	num.onclick = (_) => {
		tooglers_nums.forEach((num) => {
			num.classList.remove("active");
		});
		num.classList.add("active");
		holders.forEach((holder) => {
			holder.classList.remove("active");
		});
		holders.forEach((holder) => {
			if (holder.dataset.number === num.innerHTML) {
				holder.classList.add("active");
			}
		});
	};
});
prev.onclick = (_) => {
	let active_holder = document.querySelector(
		".slider .images .img-holder.active"
	);
	let active_num = document.querySelector(".slider ul li.active");
	if (active_num !== tooglers_nums[0]) {
		active_holder.previousElementSibling.classList.add("active");
		active_holder.classList.remove("active");
		active_num.previousElementSibling.classList.add("active");
		active_num.classList.remove("active");
	}
};
next.onclick = (_) => {
	let active_holder = document.querySelector(
		".slider .images .img-holder.active"
	);
	let active_num = document.querySelector(".slider ul li.active");
	if (active_num !== tooglers_nums[tooglers_nums.length - 1]) {
		active_holder.nextElementSibling.classList.add("active");
		active_holder.classList.remove("active");
		active_num.nextElementSibling.classList.add("active");
		active_num.classList.remove("active");
	}
};
