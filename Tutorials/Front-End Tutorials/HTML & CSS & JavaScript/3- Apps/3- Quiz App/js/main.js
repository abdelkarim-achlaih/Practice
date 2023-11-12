let cat = document.querySelector(".cat span");
let count = document.querySelector(".count span");

let title = document.querySelector(".quiz-area h2");

let answersArea = document.querySelector(".answers-area");

let submitBtn = document.querySelector(".submit-button");

let bulletsSpans = document.querySelector(".bullets .spans");

let countdown = document.querySelector(".countdown");

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
	for (let i = 1; i < keys.length; i++) {
		let answer = document.createElement("div");
		answer.innerHTML = `
        <input type="radio" name="answers" id="answer_${i}">
        <label for="answer_${i}">${quest[keys[i]]}</label>`;
		answer.classList.add("answer");
		answersArea.append(answer);
	}
}

// function randomQuests(data) {
// 	let randomObj = data[getRandomNumber(0, data.length)];
// 	console.log(randomObj);
// 	return randomObj;
// }

function randomAllQuests(data) {
	let tmpData = data;
	let output = [];
	while (output.length < tmpData.length) {
		let tmpIndex = getRandomNumber(0, tmpData.length - 1);
		if (!output.includes(tmpData[tmpIndex])) {
			randomAnswers(tmpData[tmpIndex]);
			output.push(tmpData[tmpIndex]);
		}
	}
	return output;
}
// function randomAnswers(quest) {
// 	let tmpIndex = getRandomNumber(1, Object.keys(quest).length - 1);
// 	console.log(tmpIndex);
// 	let output = {};
// 	let tmpKeys = [];
// 	if (!tmpKeys.includes(quest[tmpIndex])) {
// 		tmpKeys.push(quest[tmpIndex]);
// 		let tmp = tmpKeys[tmpKeys.length - 1];
// 		output[tmp] = quest[tmpIndex];
// 	}
// 	console.log(output);
// 	// return randomObj;
// }
function getRandomNumber(n, m) {
	let tmp = Math.floor(Math.random() * (m - n + 1)) + n;
	return tmp;
}

let questions = {
	title: "In HTML, which tag is used to define the document type?",
	right_answer: "&lt;!DOCTYPE html&gt;",
	answer_1: "&lt;doctype&gt;",
	answer_2: "&lt;type&gt;",
	answer_3: "&lt;doc&gt;",
	answer_4: "&lt;!DOCTYPE&gt;",
};

// function randomAnswers(questions) {
// 	let tmpKeys = Object.keys(questions);
// 	let tmpValues = Object.values(questions);
// 	let tmpLength = tmpKeys.length;
// 	console.log("object length", tmpLength);
// 	console.log("Init output");
// 	let output = {};
// 	console.log(output);
// 	console.log(Object.keys(output).length);
// 	// while (Object.keys(output).length < tmpKeys.length) {
// 	for (let i = 0; i < 10; i++) {
// 		let tmpIndex = getRandomNumber(1, tmpLength - 1);
// 		console.log("random number", tmpIndex);
// 		if (!output.hasOwnProperty(tmpKeys[tmpIndex])) {
// 			console.log("nope");
// 			let key = tmpKeys[tmpIndex];
// 			let value = questions[key];
// 			output[key] = value;
// 		}
// 		console.log("Iteration output");
// 		console.log(output);
// 	}
// 	output = Object.assign(output, {
// 		"tmpKeys[0]": tmpValues[0],
// 		"tmpKeys[1]": tmpValues[1],
// 	});

// 	console.log("final output");
// 	console.log(output);
// }
// randomAnswers(questions);

function randomAnswers(question) {}
