// Challenge [63] *****************************************

//It's the assignment number 4...

//Assignments [57--63]*******************************************************

//Assignment 1

// function sayHello(theName, theGender) {
// 	if (theGender === "Male") {
// 		console.log(`Hello Mr ${theName}`);
// 	} else if (theGender === "Female") {
// 		console.log(`Hello Mrs ${theName}`);
// 	} else {
// 		console.log(`Hello ${theName}`);
// 	}
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

//Assignment 2

// function calculate(firstNum, secondNum, operation) {
// 	if (secondNum === undefined) {
// 		console.log("Second Number Not Found");
// 	} else {
// 		switch (operation) {
// 			case "add":
// 			case undefined:
// 				console.log(firstNum + secondNum);
// 				break;
// 			case "subtract":
// 				console.log(firstNum - secondNum);
// 				break;
// 			case "multiply":
// 				console.log(firstNum * secondNum);
// 				break;
// 		}
// 	}
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600

//Assignment 3

// function ageInTime(theAge) {
// 	if (theAge < 10 || theAge > 100) {
// 		console.log("Age Out Of Range");
// 	} else {
// 		console.log(
// 			`${theAge * 12} Months
// ${theAge * 12 * 51} Weeks
// ${theAge * 12 * 51 * 7} Days
// ${theAge * 12 * 51 * 7 * 24} Hours
// ${theAge * 12 * 51 * 7 * 24 * 3600} Seconds`
// 		);
// 	}
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

//Assignment 4

// function checkStatus(a, b, c) {
// 	let ta = typeof a;
// 	let tb = typeof b;
// 	let name = "";
// 	let age = 0;
// 	let status = true;
// 	ta === "string" ? (name = a) : tb === "string" ? (name = b) : (name = c);
// 	ta === "number" ? (age = a) : tb === "number" ? (age = b) : (age = c);
// 	ta === "boolean"
// 		? (status = a)
// 		: tb === "boolean"
// 		? (status = b)
// 		: (status = c);
// 	status === true
// 		? console.log(
// 				`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
// 		  )
// 		: console.log(
// 				`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`
// 		  );
// }

// // // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//Assignment 5

// function createSelectBox(startYear, endYear) {
// 	document.write(`<select>`);
// 	for (let i = startYear; i <= endYear; i++) {
// 		document.write(`<option value="${i}">${i}</option>`);
// 	}
// 	document.write(`</select>`);
// }
// createSelectBox(2000, 2021);

//Assignment 6

// function multiply(...numbers) {
// 	let result = 1;
// 	let flag = false;
// 	for (let i = 0; i < numbers.length; i++) {
// 		if (typeof numbers[i] === "number") {
// 			flag = true;
// 			result *= parseInt(numbers[i]);
// 		}
// 	}
//   if (flag) {
//     console.log(result);
//   }
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000
