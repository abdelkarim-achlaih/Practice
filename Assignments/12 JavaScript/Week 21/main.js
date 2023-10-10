//Assignments [169--178]*******************************************************

//Assignment 1

//Assignment 2 & 3 & 4

let req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
req.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200) {
		let mainData = JSON.parse(this.responseText);
		mainData.forEach((e) => {
			e.category = "All";
			console.log(e);
		});
		let updatedData = JSON.stringify(mainData);
		console.log(updatedData);
    let data = document.createElement("div");
    data.id = "data";
    document.body.appendChild(data);
		mainData.forEach((e) => {
			data.innerHTML += `<div>
    <h2>${e.title}</h2>
    <p>${e.content}</p>
    <p>${e.author}</p>
    <p>${e.category}</p>
  </div>`;
		});
	}
};
req.onloadend = function () {
	console.log("Data Loaded");
};
