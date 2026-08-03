import { describe, expect, it } from "vitest";
import { iconId, trimPath } from "./icons";

describe("iconId", () => {
	it("slugifies names into icon ids", () => {
		expect(iconId("C#")).toBe("icon-c");
		expect(iconId("C++")).toBe("icon-c");
		expect(iconId(".NET")).toBe("icon-net");
		expect(iconId("Node.js")).toBe("icon-node-js");
		expect(iconId("GitHub Actions")).toBe("icon-github-actions");
	});

	it("produces a stable id for the github logo", () => {
		expect(iconId("github")).toBe("icon-github");
	});
});

describe("trimPath", () => {
	it("rounds long decimals down to two places", () => {
		expect(trimPath("12.345")).toBe("12.35");
		expect(trimPath("-3.14159")).toBe("-3.14");
		expect(trimPath(".4567")).toBe(".46");
		expect(trimPath("0.40")).toBe(".4");
	});

	it("leaves short decimals alone", () => {
		expect(trimPath("1.5")).toBe("1.5");
		expect(trimPath("9.09")).toBe("9.09");
	});

	it("never rounds a number already shorter than its rounded form", () => {
		expect(trimPath("5.55")).toBe("5.55");
	});

	it("leaves integers unchanged", () => {
		expect(trimPath("10.000")).toBe("10.000");
	});
});
