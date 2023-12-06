let blocksConta = document.querySelector(".memory-game-blocks");
let triesSpan = document.querySelector(".tries span");
let duration = 1000;
function setup() {
	let techs = [
		"fa-brands fa-html5",
		"fa-brands fa-css3-alt",
		"fa-brands fa-square-js",
		"fa-brands fa-bootstrap",
		"fa-brands fa-sass",
		"fa-brands fa-wordpress",
		"fa-brands fa-php",
		"fa-solid fa-database",
		"fa-brands fa-linkedin-in",
		"fa-brands fa-github",
	];
	techs.forEach((tech) => {
		let div = document.createElement("div");
		div.classList.add("game-block");
		div.dataset.technology = tech;
		div.innerHTML = `
    <div class="face front"></div>
		<div class="face back">
			<i class="${tech}"></i>
		</div>
    `;
		let div2 = div.cloneNode(true);
		div.addEventListener("click", flipBlock);
		div2.addEventListener("click", flipBlock);
		blocksConta.append(div);
		blocksConta.append(div2);
	});
	blocks = Array.from(document.querySelectorAll(".game-block"));
	let indexes = shuffle([...Array.from(Array(blocks.length).keys())]);
	blocks.forEach((block, index) => {
		block.style.order = indexes[index];
	});
}
let blocks;
setup();
function flipBlock(e) {
	let block = e.target.parentNode;
	block.classList.add("is-flipped");
	let flippedBlocks = blocks.filter((block) => {
		return block.classList.contains("is-flipped");
	});
	if (flippedBlocks.length == 2) {
		blocksConta.classList.add("no-clicking");
		if (
			flippedBlocks[0].dataset.technology ===
			flippedBlocks[1].dataset.technology
		) {
			setTimeout(() => {
				flippedBlocks[0].classList.add("has-match");
				flippedBlocks[1].classList.add("has-match");
			}, duration);
		} else {
			triesSpan.innerHTML++;
		}
		setTimeout(() => {
			flippedBlocks[0].classList.remove("is-flipped");
			flippedBlocks[1].classList.remove("is-flipped");
			blocksConta.classList.remove("no-clicking");
		}, duration);
	}
}
function shuffle(array) {
	let tmp = [];
	while (array.length > 0) {
		let rand = Math.floor(Math.random() * array.length);
		tmp.push(array[rand]);
		array.splice(rand, 1);
	}
	return tmp;
}
let startSpan = document.querySelector(".control-buttons span");
let nameSpan = document.querySelector(".name span");
startSpan.onclick = function () {
	let name = prompt("What is your name ?");
	if (name == null || name == "") {
		nameSpan.innerHTML = "Unknown";
	} else {
		nameSpan.innerHTML = name;
	}
	startSpan.parentNode.remove();
};
