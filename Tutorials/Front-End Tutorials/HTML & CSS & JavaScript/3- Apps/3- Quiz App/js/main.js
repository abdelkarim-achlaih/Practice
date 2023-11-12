let cat = document.querySelector(".cat span");
let count = document.querySelector(".count span");

let title = document.querySelector(".quiz-area h2");

let answersArea = document.querySelector(".answers-area");

let submitBtn = document.querySelector(".submit-button");

let bulletsSpans = document.querySelector(".bullets .spans");

let countdown = document.querySelector(".countdown");

let first = true;

async function loadQuests() {
	let req = await fetch("../questions.json");
	let data = await req.json();
	setup(data);
}
loadQuests();
function setup(data) {
	data = randomAllQuests(data);
	cat.innerHTML = "HTML";
	count.innerHTML = data.length;
	let quest = data[0];
	writeQuest(quest);
	writeBullets(data, "setup");
}
function writeBullets(data, when) {
	if (when === "setup") {
		for (let i = 0; i < data.length; i++) {
			let span = document.createElement("span");
			if (i === 0) {
				span.classList.add("on");
			}
			bulletsSpans.append(span);
		}
	}
	if (when === "update") {
	}
}
function writeQuest(quest) {
	title.innerHTML = quest.title;
	let keys = Object.keys(quest);
	let writtenKeys = [];
	while (writtenKeys.length < keys.length - 1) {
		let index = getRandomNumber(1, keys.length - 1);
		if (!writtenKeys.includes(index)) {
			if (writtenKeys.length !== 0) first = false;
			writtenKeys.push(index);
			writeAnswer(quest, index);
		}
	}
}
function writeAnswer(quest, index) {
	let keys = Object.keys(quest);
	let answer = document.createElement("div");

	answer.innerHTML = `
	<input type="radio" name="answers" id="answer_${index}" data-answer=${
		quest[keys[index]]
	} ${first ? "checked" : ""}>
	<label for="answer_${index}">${quest[keys[index]]}</label>`;
	answer.classList.add("answer");
	answersArea.append(answer);
}
function randomAllQuests(data) {
	let tmpData = data;
	let output = [];
	while (output.length < tmpData.length) {
		let tmpIndex = getRandomNumber(0, tmpData.length - 1);
		if (!output.includes(tmpData[tmpIndex])) {
			output.push(tmpData[tmpIndex]);
		}
	}
	return output;
}
function getRandomNumber(n, m) {
	let tmp = Math.floor(Math.random() * (m - n + 1)) + n;
	return tmp;
}
