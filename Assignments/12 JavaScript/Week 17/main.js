// Challenge [133] (Assignment 8) *****************************************

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(
// 	parseInt(
// 		Array.from(
// 			new Set([
// 				...Array.from(new Set(n1[n2.length].toString())),
// 				...Array.from(new Set(Math.min(...n1).toString())),
// 			])
// 		)
// 			.sort()
// 			.reverse()
// 			.join("")
// 	)
// );

//Assignments [123--133]*******************************************************

//Assignment 1

// let numbers = new Set([10]);
// numbers.add(20).add(numbers.size);
// console.log(numbers);
// console.log([...numbers][2]);

//Assignment 2

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// // Needed Output
// let orderedFriends = [...new Set(myFriends)].sort();

// console.log(orderedFriends);

// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

//Assignment 3

// let myInfo = {
// 	username: "Osama",
// 	role: "Admin",
// 	country: "Egypt",
// };

// const keys = new Set(Object.keys(myInfo));
// const values = new Set(Object.values(myInfo));

// const keysArr = keys.keys();
// const valuesArr = values.keys();

// let ke = Object.keys(myInfo);

// let myInfoMap = new Map([
// 	[keysArr.next().value, valuesArr.next().value],
// 	[keysArr.next().value, valuesArr.next().value],
// 	[keysArr.next().value, valuesArr.next().value],
// ]);

// console.log(myInfoMap);
// console.log(myInfoMap.size);

// let searched = "role";

// console.log(
// 	ke.some(function (ele) {
// 		return ele == this;
// 	}, searched)
// );

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

//Assignment 4

// let theNumber = 100020003000;

// console.log(
// 	parseInt(
// 		[...new Set([...theNumber.toString()])].reduce(function (acc, ele) {
// 			return ele != "0" ? acc + ele : acc;
// 		})
// 	)
// );

//Assignment 5

// let theName = "Elzero";

// console.log(theName.split(""));
// console.log([...theName]);
// console.log(Array.from(theName));
// console.log([...new Set(theName)])

// let mySet = new Set(theName);
// let newArr = [];
// mySet.forEach((key) => newArr.push(key));
// console.log(newArr);

//Assignment 6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// let charsStr = chars.filter((char) => {
// 	return typeof char === "string";
// });

// let charsNum = chars.filter((char) => {
// 	return typeof char === "number";
// });

// let newchars = [...charsNum, ...charsStr];

// newchars.copyWithin(0, charsNum.length, charsNum.length * 2);

// console.log(newchars);

//Assignment 7

// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// let concat1 = numsOne.concat(numsTwo);
// console.log(concat1);

// let concat2 = [...numsOne, ...numsTwo];
// console.log(concat2);

// let concat3 = numsOne;
// concat3.push(...numsTwo);
// console.log(concat3);
