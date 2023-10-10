// Challenge [78] *****************************************

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_S,c,h,o,o,l,2,0,Z";

let solution = myString
	.split("", myString.lastIndexOf(","))
	.filter(function (ele) {
		return isNaN(parseInt(ele));
	}).map(function(ele) {
		return ele === "," ? "" : ele === "_" ? " " : ele
	}).reduce(function (acc, ele) {
		return acc + ele;
	}).slice(true);

console.log(solution);
//Assignments [71--78]*******************************************************

//Assignment 1

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let word = mix
// 	.map(function (ele) {
// 		return typeof ele === "string" ? ele : "";
// 	})
// 	.reduce(function (acc, ele) {
// 		return `${acc}${ele}`;
// 	});
// console.log(word);

// Elzero

//Assignment 2

// let myString = "EElllzzzzzzzeroo";

// let filtredString = myString.split("").filter(function (ele, index, arr) {
// 	return ! arr.includes(ele, index + 1)
// }).join("");

// console.log(filtredString);
// Elzero

//Assignment 3

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newAray = myArray.reduce(function (call, element, index) {
// 	return Array.isArray(element)
// 		? call +
// 				myArray[index].reduce(function (call, element) {
// 					return call + element;
// 				})
// 		: call + element;
// });

// console.log(newAray);
// Elzero

//Assignment 4

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let solution = numsAndStrings
// 	.filter((element) => typeof element === "number")
// 	.map((element) => -element);

//   console.log(solution);
// [-1, -10, 10, 20, -5, -3]

//Assignment 5

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let solution = nums.reduce(function (acc, element, index, array) {
//   return element % 2 === 1 ? acc + element : acc * element
// }, 1);

// console.log(solution)
// 500
