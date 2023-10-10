// Challenge [26] *****************************************

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.round(Math.min(a, b, c, d)));

// console.log(a ** Math.round(d));

// console.log(parseInt(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));

// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2));
// console.log(Math.round((Math.floor(b) / Math.ceil(d)).toFixed(2)));

// Challenge [30] *****************************************

// let a = "Elzero Web School"

// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// console.log(a.slice(-4, -3).toUpperCase().repeat(8));

// console.log(a.split(" ", 1));

// console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);

// console.log(a[0].toLowerCase() + a.slice(1, -1).toUpperCase() + a[a.length - 1].toLowerCase());


//Assignments [23--26]*******************************************************

//Assignment 1

// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
// console.log(1e5); // 100000
// console.log(1_0_0_0_0_0); // 100000
// console.log(50000 + 50000); // 100000
// console.log(Math.pow(10, 5)); // 100000
// console.log(parseInt("100000")); // 100000
// console.log(Math.round(99999.6)); // 100000
// console.log(Math.ceil(99999.6)); // 100000
// console.log(Math.floor(100000.5)); // 100000
// console.log(Math.trunc(100000.5)); // 100000
// console.log(Math.max(1e0, 10e1, 10e2, 10e3, 10e4)); // 100000

//Assignment 2

// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//Assignment 3

// console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

//Assignment 4

// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

//Assignment 5

// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//Assignment 6

// let flt = 10.4;

// console.log(Number(flt.toFixed(0))); // 10
// console.log(parseInt(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.trunc(flt)); // 10

//Assignment 7

// console.log(Math.round(4 * Math.random())); // 0 || 1 || 2 || 3 || 4

//Assignments [27--30]*******************************************************

//Assignment 1

// let userName = "Elzero";
// console.log(userName.charAt(0).toLocaleLowerCase()); // e
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.slice(0, 1).toLowerCase()); // e
// console.log(userName.split("", 1)[0].toLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase()); // e
// console.log(userName.substr(0, 1).toLowerCase().repeat(3)); // eee

//Assignment 2

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.toLowerCase().startsWith(letterE)); // True
// console.log(word.toUpperCase().endsWith(letterO)); // True