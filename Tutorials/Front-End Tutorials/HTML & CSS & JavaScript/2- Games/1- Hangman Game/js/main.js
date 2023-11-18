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
document.querySelector(".category span").innerText = randomKey;

let letterGuess = document.querySelector(".letters-guess");
Array.from(word).forEach((letter) => {
	let span = document.createElement("span");
	letter == " " ? span.classList.add("with-space") : "";
	letterGuess.append(span);
});

let correct;
let failed = 0;
let draws = document.querySelectorAll(".failed");
word.includes(" ") ? (correct = 1) : (correct = 0);

function check(e) {
	if (failed < draws.length - 1) {
		e.target.classList.add("clicked");
		let ele = e.target.innerText.toLowerCase();
		let wordL = word.toLowerCase();
		if (wordL.includes(ele)) {
			let indexes = getAllIndexesOf(wordL, ele);
			indexes.forEach((index) => {
				letterGuess.querySelector(`span:nth-child(${index + 1})`).innerText =
					ele;
				document.querySelector(".good").play();
				correct++;
				if (correct == word.length) {
					displayPopup(true);
				}
			});
		} else {
			draws[failed].style.display = `block`;
			document.querySelector(".fail").play();
			failed++;
			console.log("no");
		}
	} else {
		draws.forEach((draw) => {
			draw.style.display = `block`;
		});
		displayPopup(false);
	}
}

function getAllIndexesOf(str, search) {
	let tmp = [];
	Array.from(str).forEach((letter, index) => {
		letter === search ? tmp.push(index) : "";
	});
	return tmp;
}

function displayPopup(status) {
	document.querySelectorAll(".letter-box").forEach((div) => {
		div.removeEventListener("click", check);
	});
	let div = document.createElement("div");
	div.classList.add("pop");
	if (status) {
		div.classList.add("good");
		div.innerText = "Good";
		document.querySelector(".congrats").play();
	} else {
		div.classList.add("bad");
		div.innerText = `The right word is: ${word}`;
		document.querySelector(".hradluck").play();
	}
	document.body.append(div);
}
