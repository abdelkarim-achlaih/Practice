let lettersDiv = document.querySelector(".letters");
const letters = "abcdefghijklmnopqrseuvwxyz";
let alphabets = letters.split("");
alphabets.forEach((alpha) => {
	let div = document.createElement("div");
	div.classList.add("letter-box");
	div.innerText = alpha;
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

let cat = document.querySelector(".category span");
let wordsKeys = Object.keys(words);
let randomKey = wordsKeys[getRandomNumber(0, wordsKeys.length - 1)];
let word = words[randomKey][getRandomNumber(0, words[randomKey].length - 1)];
cat.innerText = word;
