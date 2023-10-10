import { a, b, c } from "./mod-two.js";
export let modOne = {
	numOne: a,
	numTwo: b,
	numThree: c,
};
export default function (a, b, c) {
	return a + b + c;
}
