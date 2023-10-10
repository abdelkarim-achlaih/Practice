// Challenge [56] *****************************************

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
// 	"Amgad",
// 	"Samah",
// 	"Ameer",
// 	"Omar",
// 	"Othman",
// 	"Amany",
// 	"Samia",
// ];
// let counter = 0;
// for (let i = 0; i < myAdmins.length; i++) {
// 	if (myAdmins[i] !== "Stop") {
// 		counter++;
// 	} else {
// 		break;
// 	}
// }
// document.write(`<div>We have ${counter} admins</div><hr>`);
// counter = 0;
// for (i = 0; i < myAdmins.length; i++) {
// 	if (myAdmins[i] !== "Stop") {
// 		document.write(`<div>The Admin for team ${++counter} is ${myAdmins[i]}
// 		<h3>Teams Memebers : </h3>`);
// 		let k =0;
// 		for (let j = 0; j < myEmployees.length; j++) {
// 			if (myEmployees[j].startsWith(myAdmins[i].charAt(0))) {
// 				document.write(`<p>- ${++k} ${myEmployees[j]}</p>`);
// 			}
// 		}
// 		document.write(`</div><hr>`);
// 	} else {
// 		break;
// 	}
// }

//Assignments [48--53]*******************************************************

//Assignment 1

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i += start) {
// 	if (i === exclude) {
// 		continue;
// 	}
// 	console.log(i);
// }

//Assignment 2

// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// for (let i = start; i > end; i--) {
// 	if (i < start) {
// 		console.log(`${end}` + i);
// 	} else {
// 		console.log(`` + i);
// 	}
// 	if (i === stop) {
// 		break;
// 	}
// }

//Assignment 3

// let start = 1;
// let end = 6;
// let breaker = 2;

// // Output
// for (let i = start; i <= end; i++) {
//   console.log(i);
// 	for (let j = breaker; j < end; j += breaker) {
//     console.log(`-- ${j}`);
//   }
// }

//Assignment 4

// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
// 	if (index > end) {
//     if (index === jump) {
//       index = index - jump;
//       continue;
// 		}
// 		console.log(index);
//     index = index - jump;
// 	} else {
// 		break;
// 	}
// }

//Assignment 5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// // Output
// let j = +false;
// for (let i = +false; i < friends.length; i++) {
// 	if (friends[i].startsWith(letter.toUpperCase())) {
// 		continue;
// 	} else {
// 		console.log(`${++j} => ${friends[i]}`);
// 	}
// }

//Assignment 6

// let start = 0;
// let swappedName = "elZerO";

// // Output
// let newString = [];
// for (let i = start; i < swappedName.length; i++) {
//   if(swappedName.toLowerCase()[i] === swappedName[i]) {
//     newString[i] = swappedName[i].toUpperCase();
//   }
//   else {
//     newString[i] = swappedName[i].toLowerCase();
//   }
// }
// newString = newString.join("");
// console.log(newString);

//Assignment 7

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// // Output

// for (let i = start; i < mix.length; i++) {
// 	if (typeof mix[i] === "number") {
// 		if (mix[i] === +true) {
// 			continue;
// 		}
// 		console.log(mix[i]);
// 	}
// }

//Assignments [54--56]*******************************************************

//Assignment 1

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// let letter = "A";

// // Output
// let j = +false;
// for (let i = +false; i < friends.length; i++) {
// 	if (typeof friends[i] ==="number" || friends[i].startsWith(letter)) {
// 		continue;
// 	} else {
// 		console.log(`${++j} => ${friends[i]}`);
// 	}
// }
