// Challenge [37] *****************************************

// let a = 10;

// a < 10
// 	? console.log("< 10")
// 	: a >= 10 && a <= 40
// 	? console.log("10 to 40")
// 	: a > 40
// 	? console.log("> 40")
// 	: console.log("Unknown");

// let st = "Elzero Web School";

// if (st.repeat(2).length.toString() === "34") {
// 	console.log("1 Good");
// }

// if (st[st.indexOf("W")].toLowerCase() === "w") {
// 	console.log("2 Good");
// }

// if (st.length !== "string") {
// 	console.log("3 Good");
// }

// if (typeof st.length === "number") {
// 	console.log("4 Good");
// }

// if (st.split(" ", 1)[0].repeat(2) === "ElzeroElzero") {
// 	console.log("5 Good");
// }

// Challenge [39] *****************************************

// let job = "";
// let salary = 0;

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(salary);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(salary);
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(salary);
//     break;
//     default:
//     salary = 4000;
//     console.log(salary);
// }

// let holidays = 5;
// let money = 0;

// if (holidays === 0) {
// 	money = 5000;
// } else if (holidays === 1 || holidays === 2) {
// 	money = 3000;
// } else if (holidays === 3) {
// 	money = 2000;
// } else if (holidays === 4) {
// 	money = 1000;
// } else if (holidays === 5) {
// 	money = 0;
// } else {
// 	money = 0;
// }
// console.log(`My money is ${money}`);

//Assignments [31--32]*******************************************************

//Assignment 1

// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 > 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof -50  === typeof +"-40"); // true
// console.log(typeof 10 === typeof -"-40"); // true
// console.log(typeof "10" !== typeof 10); // true
// console.log(typeof 20 !== false); // true

//Assignment 2

// let num1 = 10;
// let num2 = 20;

// console.log(typeof num1 === typeof num2); // true
// console.log(num2 > num1); // true
// console.log(num1 < num2); // true
// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log(!(num1 == num2)); // true

//Assignment 3

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a < b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true

//Assignments [33--37]*******************************************************

//Assignment 1

// Test Case 1
// let num = 20; // "009"

// Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"

// if(num < 10) {
//   console.log("00" + num);
// } else if (num > 10 && num < 100) {
//   console.log("0" + num);
// } else {
//   console.log(num);
// }

//Assignment 2

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");

// if (num1 == str) {
// 	console.log(`{num1} Is The Same Value As {str}`);
// }
// if (num1 == str && typeof num1 == typeof str) {
// 	console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
// }
// if (num1 != str2 || typeof num1 == typeof str2) {
// 	console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`);
// }
// if (typeof str === typeof str2 && str != str2) {
// 	console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
// }

//Assignment 3

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// // Needed Output
// ("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

// if (num1 < num3 && typeof num2 !== typeof num3) {
// 	console.log(
// 		`${num3} Is Larger Than ${num1} And Type ${typeof num3} is Not The Same Type As ${typeof num2}`
// 	);
// 	if (num2 == num3) {
// 		console.log(
// 			`${num3} Is Larger Than ${num1} And ${num3} Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}`
// 		);
//   }
//   if(num1 !== num3){
//     console.log(
// 			`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
// 		);
//   }
// }
//Assignment 4

// Edit What You Want Here

// let num1 = 15;
// let num2 = 4;
// let num3 = 15;
// let num4 = 47;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

//Assignments [38--39]*******************************************************

//Assignment 1

// let day = "   friday  ";

// day = day.trim();
// day = day[0].toUpperCase() + day.slice(1);
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// switch (day) {
// 	case "Friday":
// 	case "Saturday":
// 	case "Sunday":
// 		console.log("No Appointments Available");
// 		break;
// 	case "Monday":
// 	case "Thursday":
// 		console.log("From 10:00 AM To 5:00 PM");
// 		break;
// 	case "Tuesday":
// 		console.log("From 10:00 AM To 6:00 PM");
// 		break;
// 	case "Wednesday":
// 		console.log("From 10:00 AM To 7:00 PM");
// 		break;
// 	default:
// 		console.log("Its Not A Valid Day");
// }