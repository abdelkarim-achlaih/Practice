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
	// cat.innerHTML = "HTML";
	// count.innerHTML = data.length;
	// let quest = randomQuests(data);
	// title.innerHTML = quest.title;
	// writeQuest(quest);
	console.log(randomAllQuests(data));
}

function writeQuest(quest) {
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


function randomQuests(data) {
	let randomObj = data[getRandomNumber(0, data.length)];
	console.log(randomObj);
	return randomObj;
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
function randomAnswers(quest) {
	let tmpIndex = getRandomNumber(1, Object.keys(quest).length - 1);
  
	return randomObj;
}
function getRandomNumber(n, m) {
	let tmp = Math.floor(Math.random() * (m - n + 1)) + n;
	console.log(tmp);
	return tmp;
}
