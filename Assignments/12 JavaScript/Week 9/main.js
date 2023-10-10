// Challenges [70] *****************************************

//Challenge 1

// let names = function (...para) {
//   return `String [${para.join("], [")}] => Done !`;
// }

// let names = (...para) => `String [${para.join("], [")}] => Done !`;
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

//Challenge 2

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => {
// 	for (let i = +false; i < nums.length; i++) {
// 		one += nums[i];
// 	}
// 	return one + two;
// };
// let calc = function (one, two, ...nums) {
// 	for (let i = +false; i < nums.length; i++) {
// 		one += nums[i];
// 	}
// 	return one + two;
// };

// console.log(calc(10, myNumbers[+false], myNumbers[+true]));
//Assignments [64--70]*******************************************************

//Assignment 1

// function getDetails(zName, zAge, zCountry) {
// 	function namePattern(zName) {
// 		let splittedName = zName.split(" ");
// 		return `${splittedName[0]} ${splittedName[1][0].toUpperCase()}.`;
// 	}
// 	function ageWithMessage(zAge) {
// 		return `Your Age Is ${parseInt(zAge)}`;
// 	}
// 	function countryTwoLetters(zCountry) {
// 		return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
// 	}
// 	function fullDetails() {
// 		return `Hello ${namePattern(zName)}, ${ageWithMessage(
// 			zAge
// 		)}, ${countryTwoLetters(zCountry)}`;
// 	}
// 	return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

//Assignment 2

// function itsMe() {
//   return `Iam A Normal Function`;
// }

// console.log(itsMe()); // Iam A Normal Function

// let itsMe = (_) => `Iam A Normal Function`;
// console.log(itsMe());

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//Assignment 3

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }
// let checker = (zName, status, salary) =>
// 	status === "Available"
// 		? `${zName}, My Salary Is ${salary}`
// 		: `Iam Not Avaialble`;
// // console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Osama", "Available", 4000)); // Osama, My Salary Is 4000
// // console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// console.log(checker("Ahmed", "Not Available")); // Iam Not Avaialble

//Assignment 4

// function specialMix(...data) {
// 	let result = 0;
// 	for (let i = 0; i < data.length; i++) {
// 		if (typeof data[i] === "number") {
// 			result += data[i];
// 		} else if (typeof data[i] === "string") {
// 			let parsedNumber = parseInt(data[i]);
// 			if (!Number.isNaN(parsedNumber)) {
// 				result += parsedNumber;
// 			}
// 		}
// 	}
//   return result !== 0 ? result : `All Is Strings`;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
