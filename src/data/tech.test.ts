import { describe, expect, it } from "vitest";
import { ICON_DB_ID, ICON_LANG_ID, ICON_LIB_ID } from "./icons";
import { TECH, iconsFor, techByName, techMarkId } from "./tech";
import es from "../i18n/dataEs";
import en from "../i18n/dataEn";

describe("tech catalogue", () => {
	it("indexes every technology by name", () => {
		expect(techByName.size).toBe(TECH.length);
		expect(techByName.get("Go")).toBeDefined();
	});

	it("iconsFor returns unique entries, only ones with an icon", () => {
		const names = ["Go", "Node.js", "Go", "Scrum", "ChromaDB"];
		const result = iconsFor(names).map((item) => item.name);
		expect(result).toEqual(["Go", "Node.js"]);
	});
});

describe("data integrity", () => {
	const named = (dict: typeof es) => [
		...dict.stack.groups.flatMap((group) => group.items),
		...dict.projectList.flatMap((project) => project.tech),
	];

	const dictionaries = [
		["es", es],
		["en", en],
	] as const;

	for (const [label, dict] of dictionaries) {
		describe(`${label}`, () => {
			it("every stack and project technology exists in the catalogue", () => {
				const missing = [...new Set(named(dict))].filter(
					(name) => !techByName.has(name),
				);
				expect(missing).toEqual([]);
			});
		});
	}
});

describe("techMarkId", () => {
	it("uses the icon id when a logo exists", () => {
		expect(techMarkId("Go")).toBe("icon-go");
		expect(techMarkId("C#")).toBe("icon-c");
	});

	it("falls back to a kind icon when the logo is missing", () => {
		expect(techMarkId("SQL Server")).toBe(ICON_DB_ID);
		expect(techMarkId("SQL")).toBe(ICON_LANG_ID);
	});

	it("falls back to the generic library icon otherwise", () => {
		expect(techMarkId("Scrum")).toBe(ICON_LIB_ID);
		expect(techMarkId("Nope")).toBe(ICON_LIB_ID);
	});
});
