import { describe, expect, it } from "vitest";
import {
	DEFAULT_LOCALE,
	LOCALES,
	dict,
	isLocale,
	localeHome,
	otherLocale,
	toLocale,
} from "./index";
import en from "./dataEn";
import es from "./dataEs";

describe("locale resolution", () => {
	it("treats the default locale as valid", () => {
		expect(LOCALES).toContain(DEFAULT_LOCALE);
		expect(isLocale(DEFAULT_LOCALE)).toBe(true);
	});

	it("isLocale only accepts configured locales", () => {
		expect(isLocale("es")).toBe(true);
		expect(isLocale("en")).toBe(true);
		expect(isLocale("fr")).toBe(false);
		expect(isLocale(undefined)).toBe(false);
	});

	it("toLocale falls back to the default", () => {
		expect(toLocale("en")).toBe("en");
		expect(toLocale(undefined)).toBe("es");
		expect(toLocale("fr")).toBe("es");
	});

	it("otherLocale flips between the two locales", () => {
		expect(otherLocale("es")).toBe("en");
		expect(otherLocale("en")).toBe("es");
		expect(otherLocale(undefined)).toBe("en");
	});

	it("localeHome maps the default to the root", () => {
		expect(localeHome("es")).toBe("/");
		expect(localeHome("en")).toBe("/en/");
	});

	it("dict resolves the right dictionary", () => {
		expect(dict("es")).toBe(es);
		expect(dict("en")).toBe(en);
		expect(dict(undefined)).toBe(es);
	});
});

describe("dictionary parity", () => {
	const shape = (value: unknown): unknown => {
		if (Array.isArray(value)) return value.map(shape);
		if (value && typeof value === "object") {
			return Object.keys(value)
				.sort()
				.map((key) => [key, shape((value as Record<string, unknown>)[key])]);
		}
		return null;
	};

	it("en mirrors the key structure of es exactly", () => {
		expect(shape(en)).toEqual(shape(es));
	});

	it("en lists the same projects in the same order", () => {
		expect(en.projectList.map((project) => project.slug)).toEqual(
			es.projectList.map((project) => project.slug),
		);
		expect(en.projectList).toHaveLength(es.projectList.length);
	});

	it("both stack groups stay in sync", () => {
		const groups = (dict: typeof es) =>
			dict.stack.groups.map((group) => group.items);
		expect(groups(en)).toEqual(groups(es));
	});
});
