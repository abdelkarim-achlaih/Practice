function setup() {
	let blocks = document.querySelector(".memory-game-blocks");
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
		blocks.append(div);
		blocks.append(div2);
	});
}
setup();
