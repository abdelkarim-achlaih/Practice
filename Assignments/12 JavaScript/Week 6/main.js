// Challenge [47] *****************************************

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.pop();
// my.pop();
// my = my.reverse();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

// console.log(
// 	my[zero].slice(--zero, -counter) +
// 		my[--counter].slice(my.length / my.length + ++zero)
// ); // "Elzero"

// console.log(my[++zero][my.length] + my[zero][my.length + --zero].toUpperCase()); // "rO"
//Assignments [40--47]*******************************************************

//Assignment 1

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.length = num;
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//Assignment 2

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// friends.shift();
// friends.pop();

// console.log(friends); // ["Eman", "Osama"]

//Assignment 3

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// finalArr = arrOne.concat(arrTwo).sort().reverse();

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Assignment 4

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words.pop().shift().slice(website.length).toUpperCase()); // ZERO

//Assignment 5

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions

// if (haystack.indexOf(needle)) {
// 	console.log("Found");
// }
// if (haystack.lastIndexOf(needle)) {
// 	console.log("Found");
// }
// if (haystack.includes(needle)) {
// 	console.log("Found");
// }

//Assignment 6

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = arr1.concat(arr2).sort().slice(-arr1.length).join("").toLowerCase();

// console.log(allArrs); // fxy
