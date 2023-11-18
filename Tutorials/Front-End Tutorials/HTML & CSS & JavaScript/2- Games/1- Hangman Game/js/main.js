let lettersDiv = document.querySelector(".letters");
const letters = "abcdefghijklmnopqrstuvwxyz";
let alphabets = letters.split("");
alphabets.forEach((alpha) => {
	let div = document.createElement("div");
	div.classList.add("letter-box");
	div.innerText = alpha;
	div.addEventListener("click", check, false);
	lettersDiv.appendChild(div);
});

const words = {
	programming: [
		"php",
		"javascript",
		"go",
		"scala",
		"fortran",
		"r",
		"mysql",
		"python",
	],
	movies: [
		"Prestige",
		"Inception",
		"Parasite",
		"Interstellar",
		"Whiplash",
		"Memento",
		"Coco",
		"Up",
	],
	people: [
		"Albert Einstein",
		"Hitchcock",
		"Alexander",
		"Cleopatra",
		"Mahatma Ghandi",
	],
	countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

function getRandomNumber(n, m) {
	let tmp = Math.floor(Math.random() * (m - n + 1)) + n;
	return tmp;
}

let wordsKeys = Object.keys(words);
let randomKey = wordsKeys[getRandomNumber(0, wordsKeys.length - 1)];
let word = words[randomKey][getRandomNumber(0, words[randomKey].length - 1)];
document.querySelector(".category span").innerText = word;

let letterGuess = document.querySelector(".letters-guess");
Array.from(word).forEach((letter) => {
	let span = document.createElement("span");
	letterGuess.append(span);
});
let correct = 0;
function check(e) {
	let ele = e.target.innerText.toLowerCase();
	word = word.toLowerCase();
	if (correct < word.length) {
		if (word.includes(ele)) {
			let indexes = getAllIndexesOf(word, ele);
			indexes.forEach((index) => {
				letterGuess.querySelector(`span:nth-child(${index + 1})`).innerText =
					ele;
				correct++;
			});
			displayPopup();
		} else {
			console.log("no");
		}
	}
}
function getAllIndexesOf(str, search) {
	let tmp = [];
	Array.from(str).forEach((letter, index) => {
		letter === search ? tmp.push(index) : "";
	});
	return tmp;
}
function displayPopup() {}
