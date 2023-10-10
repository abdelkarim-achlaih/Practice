// Challenge [122] (Assignment 6) *****************************************

let chosen = 3;

let myFriends = [
	{ title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
	{ title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
	{ title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
	[
		{
			title: t,
			age: a,
			available: av,
			skills: [, s],
		},
		,
	] = myFriends;
} else if (chosen === 2) {
	[
		,
		{
			title: t,
			age: a,
			available: av,
			skills: [, s],
		},
	] = myFriends;
} else if (chosen === 3) {
	[
		,
		,
		{
			title: t,
			age: a,
			available: av,
			skills: [, s],
		},
	] = myFriends;
}
console.log(t);
console.log(a);
console.log(av === true ? "Available" : "Not Available");
console.log(s);

//Assignments [115--122]*******************************************************

//Assignment 1

// let myNumbers = [1, 2, 3, 4, 5];

// [a, , , , e] = myNumbers;

// console.log(a * e); // 5

//Assignment 2

// let mySkills = [
// 	"HTML",
// 	"CSS",
// 	"JavaScript",
// 	["PHP", "Python", ["Django", "Laravel"]],
// ];

// [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//Assignment 3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// [c, , , , , , , a, b] = arr1.concat(arr2, arr3);

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//Assignment 4

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// const {age:a, working: w, country:c, hobbies: [h1, , h3]} = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

//Assignment 5

// const game = {
// 	title: "YS",
// 	developer: "Falcom",
// 	releases: {
// 		"Oath In Felghana": ["USA", "Japan"],
// 		"Ark Of Napishtim": {
// 			US: "20 USD",
// 			JAP: "10 USD",
// 		},
// 		Origin: "30 USD",
// 	},
// };

// const {
// 	title: t,
// 	developer: d,
// 	releases: {
// 		o = Object.keys(game.releases)[0],
// 		"Oath In Felghana": [u, j],
// 		a = Object.keys(game.releases)[1],
// 		"Ark Of Napishtim": { US: u_price, JAP: j_price },
// 		Origin: or,
// 	},
// } = game;

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD
