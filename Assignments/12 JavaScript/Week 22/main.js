//Assignments [179--188]*******************************************************

//Assignment 1

// function getData(url) {
// 	return new Promise((resolve, reject) => {
// 		let req = new XMLHttpRequest();
// 		req.open("GET", url);
// 		req.send();
// 		req.onreadystatechange = function () {
// 			if (this.readyState === 4 && this.status === 200) {
// 				resolve(JSON.parse(this.responseText));
// 			} else {
// 				reject("Connection to server is failed");
// 			}
// 		};
// 	});
// }
// function showData(data) {
// 	data.forEach((ele) => {
// 		let h = `
// 		<div>
// 			<h3>${ele.title}</h3>
// 			<p>${ele.description}</p>
// 		</div>`;
// 		document.body.innerHTML += h;
// 	});
// }

// getData("./data.json")
// 	.then((res) => {
// 		res.length = 5;
// 		return res;
// 	})
// 	.then(showData);

//Assignment 2

async function getData(url) {
	try {
		let req = await fetch(url);
	return await req.json();
	} catch (e) {
		console.log("Connection to server is failed");
	}
}
function showData(data) {
	data.forEach((ele) => {
		let h = `
		<div>
			<h3>${ele.title}</h3>
			<p>${ele.description}</p>
		</div>`;
		document.body.innerHTML += h;
	});
}

getData("./data.json")
	.then((res) => {
		res.length = 5;
		return res;
	})
	.then(showData);
