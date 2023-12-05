const words = [
	"Hello",
	"Programming",
	"Code",
	"Javascript",
	"Town",
	"Country",
	"Testing",
	"Youtube",
	"Linkedin",
	"Twitter",
	"Github",
	"Leetcode",
	"Internet",
	"Python",
	"Scala",
	"Destructuring",
	"Paradigm",
	"Styling",
	"Cascade",
	"Documentation",
	"Coding",
	"Funny",
	"Working",
	"Dependencies",
	"Task",
	"Runner",
	"Roles",
	"Test",
	"Rust",
	"Playing",
];

let time = 3;

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Defaults
lvlNameSpan.innerHTML = "Normal";
secondsSpan.innerHTML = time;
timeLeftSpan.innerHTML = time;
scoreGot.innerHTML = 0;
scoreTotal.innerHTML = words.length;

//Disable input paste event

input.onpaste = (_) => {
	return false;
};
