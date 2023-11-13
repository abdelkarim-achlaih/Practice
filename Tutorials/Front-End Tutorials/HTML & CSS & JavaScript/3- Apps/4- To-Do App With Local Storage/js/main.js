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
let arrayOfTasks = [];
function structureTask(taskText) {
	const taskObj = {
		id: Date.now(),
		completed: false,
		title: taskText,
	};
	arrayOfTasks.push(taskObj);
}
function writeTasks(arrayOfTasks) {
	tasks.innerHTML = "";
	arrayOfTasks.forEach((task) => {
		let taskEle = document.createElement("div");
		taskEle.classList.add("task");
		taskEle.innerHTML = task.title;
		tasks.appendChild(taskEle);
	});
}
function storeTask(taskText) {}
