//Assignments [159--168]*******************************************************

//Assignment 1

// let myBirthday = new Date("1999 july 25");
// let nowDate = Date.now();
// let diff = nowDate - myBirthday;
// console.log(`${Math.trunc(diff)} MiliSeconds`);
// console.log(`${Math.trunc(diff / 1000)} Seconds`);
// console.log(`${Math.trunc(diff / 1000 / 60)} Minutes`);
// console.log(`${Math.trunc(diff / 1000 / 60 / 60)} Hours`);
// console.log(`${Math.trunc(diff / 1000 / 60 / 60 / 24)} Days`);
// console.log(`${Math.trunc(diff / 1000 / 60 / 60 / 24 / 31)} Months`);
// console.log(`${Math.trunc(diff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);

//Assignment 2

// let myDate = new Date(0);
// myDate.setFullYear(1980);
// myDate.setSeconds(1);
// console.log(myDate);

// // Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

//Assignment 3

// let myDate = new Date();
// myDate.setDate(0);
// console.log(myDate);
// let months = [
// 	"January",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December",
// ];
// console.log(
// 	`Previous Month Is ${
// 		months[myDate.getMonth()]
// 	} And Last Day Is ${myDate.getDate()}`
// );

//Assignment 4

// let myBirthday = Date.parse("1999 July 25");
// console.log(new Date(myBirthday));

// let birthday = new Date();
// birthday.setTime(myBirthday);
// console.log(birthday);

// let myBirth = new Date("1999 July 25");
// console.log(myBirth);

//Assignment 5

// let start = performance.now();

// for (let i = 0; i<99999 ;i++) {
//   console.log(i)
// }

// let end = performance.now();
// console.log(`Loop Took ${Math.trunc(end - start)} Milliseconds.`);

//Assignment 6

// function* gen() {
// 	let num = 14;
// 	let i = 0;
// 	while (true) {
// 		yield num;
// 		num += 140 + 200 * i++;
// 	}
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

//Assignment 7

function* genNumbers() {
	yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
	yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here

// function* genAll() {
// 	let numbers = [];
// 	let letters = [];
// 	let generatorNumbers = genNumbers();
// 	let generatorLetters = genLetters();
// 	for (let value of generatorNumbers) {
// 		numbers.push(value);
// 	}
// 	for (let value of generatorLetters) {
// 		letters.push(value);
// 	}
//   yield * new Set([...numbers, ...letters]);
// }


// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}

//Assignment 8

// main.js File

import calc, {modOne} from "./mod-one.js"

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

