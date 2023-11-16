let lettersDiv = document.querySelector(".letters");
const letters = "abcdefghijklmnopqrseuvwxyz";
let alphabets = letters.split("");
console.log(alphabets);
alphabets.forEach((alpha) => {
	let div = document.createElement("div");
	div.classList.add("letter-box");
	div.innerText = alpha;
	lettersDiv.appendChild(div);
});
