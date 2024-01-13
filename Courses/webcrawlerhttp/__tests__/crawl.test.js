const { normalizeURL } = require("../crawl");
const { test, expect } = require("@jest/globals");

test("normalizeURL", () => {
	const input = "g";
	const actual = normalizeURL(input);
	const expected = "g";
	expect(actual).toEqual(expected);
});
