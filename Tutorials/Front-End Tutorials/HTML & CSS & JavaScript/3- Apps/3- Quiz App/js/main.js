let cat = document.querySelector(".cat span");
let count = document.querySelector(".count span");

let title = document.querySelector(".quiz-area h2");

let answersArea = document.querySelector(".answers-area");

let submitBtn = document.querySelector(".submit-button");

let bulletsSpans = document.querySelector(".bullets .spans");

let countdown = document.querySelector(".countdown");

let results = document.querySelector(".results");

let first = true;

let currentQuestIndex = 0;
let theRightAnswer = "";
let data = "";
async function loadQuests() {
	let req = await fetch("../questions.json");
	data = await req.json();
	setup(data);
}
loadQuests();
function setup(data) {
	data = randomAllQuests(data);
	cat.innerHTML = "HTML";
	count.innerHTML = data.length;
	writeQuest(data[currentQuestIndex]);
	theRightAnswer = data[currentQuestIndex].right_answer;
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
		document
			.querySelector(`.bullets .spans span:nth-child(${currentQuestIndex + 1})`)
			.classList.add("on");
	}
}
function writeQuest(quest) {
	title.innerHTML = quest.title;
	let keys = Object.keys(quest);
	let writtenKeys = [];
	answersArea.innerHTML = "";
	first = true;
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
	let input = document.createElement("input");
	input.type = "radio";
	input.name = "answers";
	input.id = `answer_${index}`;
	input.answer = `${quest[keys[index]]}`;
	first ? (input.checked = true) : "";
	let label = document.createElement("label");
	label.htmlFor = `answer_${index}`;
	label.innerHTML = quest[keys[index]];
	let answer = document.createElement("div");
	answer.classList.add("answer");
	answer.appendChild(input);
	answer.appendChild(label);
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
submitBtn.addEventListener("click", checkAnswer, false);
let result = 0;
function checkAnswer() {
	if (currentQuestIndex < data.length - 1) {
		countS = duration;
		let submittedAnswer = document.querySelector(
			'.answer input[type="Radio"]:checked'
		).answer;
		if (submittedAnswer === theRightAnswer) {
			result++;
		}
		currentQuestIndex++;
		writeQuest(data[currentQuestIndex]);
		theRightAnswer = data[currentQuestIndex].right_answer;
		writeBullets(data, "update");
	} else {
		showResults();
	}
}
function showResults() {
	let span1 = document.createElement("span");
	let span2 = document.createElement("span");
	if (result === 10) {
		span1.innerHTML = "Perfect";
		span1.classList.add("perfect");
	} else if (result < 10 && result > 5) {
		span1.innerHTML = "Good";
		span1.classList.add("good");
	} else {
		span1.innerHTML = "Bad";
		span1.classList.add("bad");
	}
	span2.innerHTML = ` You answered ${result} from ${data.length}`;
	results.appendChild(span1);
	results.appendChild(span2);
	results.style.padding = "20px";
	submitBtn.remove();
	answersArea.remove();
	title.parentElement.remove();
	bulletsSpans.parentElement.remove();
	clearInterval(timer);
}
let duration = 60;
let countS = duration;
let timer = "";
function countDown() {
	timer = setInterval(() => {
		countdown.children[0].innerText = `0${Math.floor(countS / 60)}`;
		countdown.children[1].innerText = countS % 60;
		countdown.children[1].innerText =
			countS % 60 < 10 ? `0${countS % 60}` : countS % 60;
		if (countS > 0) {
			countS--;
		} else {
			checkAnswer();
			countS = duration;
		}
	}, 1000);
}
countDown();
