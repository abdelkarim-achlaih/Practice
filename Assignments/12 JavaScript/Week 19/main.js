//Assignments [147--158]*******************************************************

//Assignment 1

// function Car(name, model, price) {
// 	this.n = name;
// 	this.m = model;
// 	this.p = price;
// }

// class Car {
// 	constructor(name, model, price) {
// 		this.n = name;
// 		this.m = model;
// 		this.p = price;
// 	}
// 	run () {
// 		console.log(`Car Is Running Now`);
// 	}
// 	stop () {
// 		console.log(`Car Is stopped Now`);
// 	}
// }

// let car1 = new Car("MG", 2022, 420000)
// let car2 = new Car("Dacia", 2022, 31000)
// let car3 = new Car("BMW", 2022, 60000)

// console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
// car1.run();
// // Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");

//Assignment 2

// class Phone {
// 	constructor(name, serial, price) {
// 		this.name = name;
// 		this.serial = serial;
// 		this.price = price;
// 	}
// }

// // Write Tablet Class Here

// class Tablet extends Phone {
// 	constructor(name, serial, price, size) {
// 		super(name, serial, price);
// 		this.size = size || "Unknown";
// 	}
// 	fullDetails() {
// 		return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
// 	}
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//Assignment 3

// Edit The Class
class User {
	#c;
	constructor(username, card) {
		this.u = username;
		this.#c = card;
	}
	get showData() {
		return `Hello ${this.u} Your Credit Card Number Is ${this.#parseCard()}`;
	}
	#parseCard() {
		let cardRegex = /\d{4}(?:\-\d{4}){3}/;
		if (cardRegex.test(this.#c)) {
			return this.#c;
		} else {
			//Idea 1
			// return this.#c.toString().match(/\d{4}/g).join("-");
			//Idea 2
			return this.#c
				.toString()
				.replaceAll(/(\d{4})/g, "$1-")
				.slice(0, -1);
		}
	}
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

//Assignment 4

// Write Your Code Here

// String.prototype.addLove = function () {
// 	return `I Love Elzero Web School`;
// };

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

//Assignment 5

// const myObj = {
// 	username: "Elzero",
// 	id: 100, //dont loop it
// 	score: 1000, //dont update it
// 	country: "Egypt", //dont loop it and dont access to it
// };

// Write Your Code Here

// Object.defineProperties(myObj, {
// 	id: {
// 		enumerable: false,
// 	},
// 	score: {
// 		writable: false,
// 	},
// 	country: {
// 		writable: false,
// 		enumerable: false,
// 		configurable: true,
// 	},
// });
// delete myObj.country;

// myObj.score = 500;

// for (let prop in myObj) {
// 	console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
