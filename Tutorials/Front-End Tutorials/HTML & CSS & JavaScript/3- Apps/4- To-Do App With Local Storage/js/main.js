let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

submit.addEventListener("click", addTask, false);

function addTask(e) {
	let taskText = input.value;
	input.value = "";
	if (taskText !== "") {
		structureTask(taskText);
		writeTasks(arrayOfTasks);
	} else {
		input.placeholder = "Enter a valid task";
	}
}
let arrayOfTasks;
getData();
function getData() {
	let data = window.localStorage.getItem("tasks");
	if (data) {
		arrayOfTasks = JSON.parse(data);
		writeTasks(arrayOfTasks);
	} else {
		arrayOfTasks = [];
	}
}
function structureTask(taskText) {
	const taskObj = {
		id: Date.now(),
		completed: false,
		title: taskText,
	};
	arrayOfTasks.push(taskObj);
	storeTasks(arrayOfTasks);
}
function writeTasks(arrayOfTasks) {
	tasks.innerHTML = "";
	arrayOfTasks.forEach((task) => {
		let taskEle = document.createElement("div");
		taskEle.classList.add("task");
		taskEle.setAttribute("data-id", task.id);
		task.completed ? taskEle.classList.add("done") : "";
		taskEle.innerHTML = task.title;
		taskEle.addEventListener("click", update, false);
		let span = document.createElement("span");
		span.innerHTML = "Delete";
		span.addEventListener("click", del, false);
		taskEle.appendChild(span);
		tasks.appendChild(taskEle);
	});
}
function storeTasks(arrayOfTasks) {
	window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function del(e) {
	e.target.parentElement.remove();
	arrayOfTasks = arrayOfTasks.filter(
		(task) => task.id != e.target.parentElement.dataset.id
	);
	storeTasks(arrayOfTasks);
}
function update(e) {
	e.target.classList.toggle("done");
	arrayOfTasks.forEach((task) => {
		if (task.id == e.target.dataset.id) {
			task.completed == true
				? (task.completed = false)
				: (task.completed = true);
		}
	});
	storeTasks(arrayOfTasks);
}
