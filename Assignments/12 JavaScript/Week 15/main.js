// Video [112] *****************************************

// let lis = document.querySelectorAll("li");
// let apply = document.querySelector(".apply");
// window.onload = function () {
// 	if (window.localStorage.applyColor === "undefined") {
// 		apply.style.backgroundColor = "red";
// 	} else {
// 		apply.style.backgroundColor = window.localStorage.applyColor;
// 		lis.forEach(function (li) {
// 			if (li.getAttribute("data-color") === window.localStorage.applyColor) {
// 				li.classList.add("active");
// 			} else {
// 				li.classList.remove("active");
// 			}
// 		});
// 	}
// };

// lis.forEach(function (li) {
// 	li.onclick = function () {
// 		lis.forEach(function (li) {
// 			li.classList.remove("active");
// 		});
// 		li.classList.add("active");
// 		window.localStorage.applyColor = li.getAttribute("data-color");
// 		apply.style.backgroundColor = window.localStorage.applyColor;
// 	};
// });

// Challenge [114] *****************************************

let input = document.querySelector(`input[name = "task"]`);
let tasks = document.querySelector(`.tasks`);

let addTask = function (a) {
	let taskText = document.createTextNode(a);
	let task = document.createElement("div");
	task.className = "task";
	task.dataset.title = a;
	let span = document.createElement("span");
	span.innerText = "Delete";
	span.addEventListener("click", function (e) {
		span.parentNode.remove();
		let ta = [];
		ta = JSON.parse(window.localStorage.getItem("tasks"));
		ta.forEach((t, index) => {
			if (t.title === e.target.parentNode.dataset.title) {
				ta.splice(index, 1);
				window.localStorage.setItem("tasks", JSON.stringify(ta));
				console.log("Local storage after deleting");
			}
		});
	});
	task.appendChild(taskText);
	task.appendChild(span);
	tasks.prepend(task);
};

if (window.localStorage.getItem("tasks")) {
	let allTasks = JSON.parse(window.localStorage.getItem("tasks"));
	allTasks.forEach((task) => {
		addTask(task.title);
	});
}

document.forms[0].onsubmit = function (e) {
	if (input.value !== "") {
		addTask(input.value);
		let taskObj = {
			id: Math.trunc(10000000000 * Math.random()),
			title: input.value,
		};
		let allTasks = [];
		if (window.localStorage.getItem("tasks")) {
			allTasks = JSON.parse(window.localStorage.getItem("tasks"));
		}
		allTasks.push(taskObj);
		window.localStorage.setItem("tasks", JSON.stringify(allTasks));
		input.value = "";
	}
	e.preventDefault();
};

//Assignments [111--114]*******************************************************

//Assignment 1

// let size = document.getElementById("size");
// let selects = document.querySelectorAll("select");

// for (let i = 16; i <= 30; i++) {
// 	let option = document.createElement("option");
// 	option.value = i;
// 	option.innerHTML = i;
// 	size.appendChild(option);
// }
// selects[2].firstElementChild.setAttribute("selected", "");
// let tags = document.querySelectorAll("*");

// let props = [];
// selects.forEach((select) => {
// 	props.push(select.name);
// });

// props.forEach((prop) => {
// 	if (window.localStorage.getItem(prop)) {
// 		tags.forEach((tag) => {
// 			if (prop === props[2]) {
// 				tag.style.setProperty(
// 					prop,
// 					`${parseFloat(window.localStorage.getItem(prop))}px`
// 				);
// 			} else {
// 				tag.style.setProperty(prop, window.localStorage.getItem(prop));
// 			}
// 		});

// 		let options = document.querySelectorAll(`select[name = "${prop}"] option`);

// 		options.forEach((option) => {
// 			option.removeAttribute("selected");
// 		});

// 		if (prop === props[2]) {
// 			let selectedOption = document.querySelector(
// 				`select[name= "${prop}"] option[value= "${
// 					window.localStorage.getItem(prop).split("px")[0]
// 				}"] `
// 			);
// 			selectedOption.setAttribute("selected", "");
// 		} else {
// 			let selectedOption = document.querySelector(
// 				`select[name= "${prop}"] option[value= "${window.localStorage.getItem(
// 					prop
// 				)}"] `
// 			);
// 			selectedOption.setAttribute("selected", "");
// 		}
// 	}
// });

// selects.forEach((select) => {
// 	select.addEventListener("input", function () {
// 		tags.forEach((tag) => {
// 			if (select.name === props[2]) {
// 				tag.style.setProperty(select.name, `${parseFloat(select.value)}px`);
// 				window.localStorage.setItem(
// 					select.name,
// 					`${parseFloat(select.value)}px`
// 				);
// 			} else {
// 				tag.style.setProperty(select.name, select.value);
// 				window.localStorage.setItem(select.name, select.value);
// 			}
// 		});
// 		let options = document.querySelectorAll(
// 			`select[name = "${select.name}"] option`
// 		);
// 		options.forEach((option) => {
// 			option.removeAttribute("selected");
// 		});
// 		let selectedOption = document.querySelector(
// 			`select[name = "${select.name}"] option[value= "${select.value}"]`
// 		);
// 		selectedOption.setAttribute("selected", "");
// 	});
// });

//Assignment 2

// let inputs = document.querySelectorAll("form input");
// let skill = document.querySelector("select");
// let skills = document.querySelectorAll("select option");
// let keys = [];

// inputs.forEach((input) => {
// 	keys.push(input.name);
// });
// keys.push(skill.name);

// keys.forEach((key, index) => {
// 	if (window.sessionStorage.getItem(key)) {
// 		if (index === 3) {
// 			skills.forEach((skill) => {
// 				if (skill.value === window.sessionStorage.getItem(key)) {
// 					skill.setAttribute("selected", "");
// 				}
// 			});
// 		} else {
// 			document.querySelector(`input[name= "${key}"]`).value =
// 				window.sessionStorage.getItem(key);
// 		}
// 	}
// });

// inputs.forEach((input) => {
// 	input.oninput = (_) => window.sessionStorage.setItem(input.name, input.value);
// });
// skill.oninput = (_) => window.sessionStorage.setItem(skill.name, skill.value);
