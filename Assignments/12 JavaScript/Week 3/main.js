// Challenge 1 [22] *****************************************

// let a = 10; //a = 12
// let b = "20"; //b = 22
// let c = 80; //c = 81

// console.log(++a + +b++ + +c++ + +a++); // 11 + 20 + 80 + 11 = 122
// console.log(++a + -b + c++ - -a++ + +a); // 13 + (-21) + 81 - (-13) + 14 = 100
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 81 + 21 + 273 - 286 + 12 - 1 = 100

// Challenge 2 [22] *****************************************

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); //2000
// console.log((-(--d) % --e) * --f - true); //173

//Assignments [18-22]*******************************************************

//Assignment 1

// Replace ? With Arithmetic Operators
// console.log(10 * 20 - (15 % 3) + 190 + 10 - 400); // 0

//Assignment 2

// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num * num - num); // 6

// // Soultion Three
// console.log(num * (num - true)); // 6

// // Soultion Four
// console.log(num + num * true ); // 6

// // Solution Five
// console.log(num ** (true +true) - num); // 6

// // Solution Six
// console.log(num + true + true + true); // 6

//Assignment 3

// let num = "10";

// // Solution One
// console.log(+num + +num); // 20

// // Solution Two
// console.log(+num * (true + true)); // 20

// // Solution Three
// console.log((num * num) / (true + true + true + true + true)); // 20

// // Solution Four
// console.log(num * num - +num * (+num - true - true)); // 20

// // Solution Five
// console.log(num ** (true + true) - +num * (+num - true - true)); // 20

//Assignment 4

let points = 10;

points++;
points++;
points++;

console.log(points); // 13

points--;
points--;
points--;
points--;
points--;

console.log(points); // 8;
