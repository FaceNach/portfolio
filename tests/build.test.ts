import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { beforeAll, describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const SPANISH_A_ACUTE = 0x00e1;
const SPANISH_ENYE = 0x00f1;

const listFiles = (dir: string): string[] => {
	const out: string[] = [];
	for (const entry of readdirSync(dir)) {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) out.push(...listFiles(path));
		else out.push(path);
	}
	return out;
};

beforeAll(() => {
	execFileSync("pnpm", ["astro", "build"], { cwd: root, stdio: "inherit" });
}, 120_000);

describe("built site", () => {
	let html: string;
	let files: string[];

	beforeAll(() => {
		files = listFiles(dist);
		html = readFileSync(join(dist, "index.html"), "utf-8");
	});

	it("emits both language pages", () => {
		expect(existsSync(join(dist, "index.html"))).toBe(true);
		expect(existsSync(join(dist, "en", "index.html"))).toBe(true);
	});

	it("outputs no JavaScript files", () => {
		expect(files.some((file) => file.endsWith(".js"))).toBe(false);
	});

	it("preloads the latin subsets the page actually uses", () => {
		const preloadFiles = [
			...html.matchAll(/<link rel="preload" href="([^"]+\.woff2)"/g),
		].map((match) => match[1].split("/").pop());

		const faces = new Map(
			[...html.matchAll(/@font-face\s*\{([^}]*)\}/g)]
				.map(([, block]) => {
					const src =
						/src:url\(\s*["']?([^"')]+)["']?\s*\)/.exec(block)?.[1]
							.split("/")
							.pop();
					const range = /unicode-range:([^;]+);/.exec(block)?.[1];
					return src ? [src, range] : null;
				})
				.filter((entry): entry is [string, string] => Boolean(entry?.[1])),
		);

		const covers = (range: string, codePoint: number) =>
			range.split(",").some((token) => {
				const [, start, end] =
					/^U\+([0-9a-f]{4,6})(?:-([0-9a-f]{4,6}))?$/i.exec(
						token.trim(),
					) ?? [];
				const from = parseInt(start, 16);
				return codePoint >= from && codePoint <= (end ? parseInt(end, 16) : from);
			});

		expect(preloadFiles).toHaveLength(3);
		for (const file of preloadFiles) {
			const range = faces.get(file!);
			expect(range, `no @font-face for ${file}`).toBeDefined();
			expect(covers(range!, SPANISH_A_ACUTE)).toBe(true);
			expect(covers(range!, SPANISH_ENYE)).toBe(true);
		}
	});

	it("declares language alternates and x-default", () => {
		expect(html).toContain('rel="alternate" hreflang="es"');
		expect(html).toContain('rel="alternate" hreflang="en"');
		expect(html).toContain('rel="alternate" hreflang="x-default"');
	});

	it("keeps all scripts inline", () => {
		const external = html.match(/<script[^>]*src=/g) ?? [];
		expect(external).toEqual([]);
	});
});
