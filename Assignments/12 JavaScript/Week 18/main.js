// Challenge [146] (Assignment 6) *********************************************

// let url1 = "elzero.org/index.html";
// let url2 = "http://elzero.org";
// let url3 = "https://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

// let re =
// 	/(https?:\/\/)?(w{3}\.)?(\w+\.\w{3,})(:\d{4})?\/?(\w+\.\w+)?(?:\?.+\=.+)?(?:\?.+\=.+)*/; // Write Your Pattern Here

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));

//Just something I wanted to do :)

// let parseURL = function (url) {
// 	console.log(`I'll tell you some informations about the valid URL you've entred oki ?, let's get started :

// Your Internet protocole is ${url.match(re)[1] || "Nothing"}
// You are ${url.match(re)[2] ? "" : "Not "}using ${
// 		url.match(re)[2] || `Any information system (WWW)`
// 	}
// Your domaine is ${url.match(re)[3] || "Nothing"}
// The port is ${url.match(re)[4] || "Nothing"}${
// 		url.match(re)[5]
// 			? `
// The page you browsing now is issued from a file called: ${url.match(re)[5]}`
// 			: ""
// 	}

// `);
// };

// parseURL(url2);

//Assignments [134--146]*******************************************************

//Assignment 1

// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let regex = /\d{4}:[a-z][a-z][0-9](:\d{4}){6}/g;
// console.log(ip.match(regex))

//Assignment 2

// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// let regex = /Os\d*O/g;
// 	console.log(specialNames.match(regex));

// Output
// ['Os10O', 'OsO', 'Os100O']

//Assignment 3

// let phone = "+(995)-123 (4567)";

// let regex = /^\+\(\d{3}\)-\d{3}\s\(\d{4}\)$/g;
// console.log(phone.match(regex));

//Assignment 4

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// console.log(
// 	re.test("https://hello-world.hello.c2om/regular-expressions-validate-url/")
// );
/*
https?:       => s may occur or not + ":"                                     => https:
\/\/          => skip slaches                                                 => https://
?:            => do not capture what is between parenthesis
(?:[-\w]+\.)? => (a word char or "-" one time or more + ".") may occur or not => https://(www.)
([-\w]+)\.    => a word char or "-" one time or more + "."                    => https://(www.)elzero.
\w+           => a word char one time or more                                 => https://(www.)elzero.org
(?:\.\w+)?    => (a "." + a word char one time or more) may occur or not      => https://(www.)elzero.(subdomain.)org
\/?.*         => (skip slache) may occur or not + (any char) may occur or not => https://(www.)elzero.(subdomain.)org(/javascript)
i: modifier => case-insensitive
*/

//Assignment 5

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}(\/| - | )\d{1,2}(\/| - | )(19)?\d{2}/; // Write Pattern Here
// console.log(date1.match(re)); // "25/10/1982"
// console.log(re.$1);
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"
