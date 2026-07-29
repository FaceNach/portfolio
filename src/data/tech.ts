import {
	siAstro,
	siBootstrap,
	siBun,
	siClaude,
	siCss,
	siDocker,
	siDotnet,
	siFfmpeg,
	siGit,
	siGithubactions,
	siGithubcopilot,
	siGo,
	siHtml5,
	siJavascript,
	siKubernetes,
	siMongodb,
	siMysql,
	siN8n,
	siNodedotjs,
	siOllama,
	siOpencode,
	siPostgresql,
	siRabbitmq,
	siReact,
	siReactrouter,
	siRedis,
	siSqlite,
	siSupabase,
	siTailwindcss,
	siTypescript,
	siUnity,
	siUnrealengine,
	siVite,
	siZod,
} from "simple-icons";

export interface Tech {
	name: string;
	icon: { path: string } | null;
}

export const TECH: Tech[] = [
	{ name: "C#", icon: null },
	{ name: ".NET", icon: siDotnet },
	{ name: "Go", icon: siGo },
	{ name: "Node.js", icon: siNodedotjs },
	{ name: "Supabase", icon: siSupabase },
	{ name: "RabbitMQ", icon: siRabbitmq },
	{ name: "TypeScript", icon: siTypescript },
	{ name: "JavaScript", icon: siJavascript },
	{ name: "React", icon: siReact },
	{ name: "Astro", icon: siAstro },
	{ name: "HTML", icon: siHtml5 },
	{ name: "CSS", icon: siCss },
	{ name: "PostgreSQL", icon: siPostgresql },
	{ name: "MySQL", icon: siMysql },
	{ name: "SQLite", icon: siSqlite },
	{ name: "MongoDB", icon: siMongodb },
	{ name: "Redis", icon: siRedis },
	{ name: "ChromaDB", icon: null },
	{ name: "SQL", icon: null },
	{ name: "NoSQL", icon: null },
	{ name: "Docker", icon: siDocker },
	{ name: "Kubernetes", icon: siKubernetes },
	{ name: "Git", icon: siGit },
	{ name: "GitHub Actions", icon: siGithubactions },
	{ name: "n8n", icon: siN8n },
	{ name: "FFmpeg", icon: siFfmpeg },
	{ name: "Copilot", icon: siGithubcopilot },
	{ name: "Codex", icon: null },
	{ name: "Claude Code", icon: siClaude },
	{ name: "Kilo Code", icon: null },
	{ name: "Opencode", icon: siOpencode },
	{ name: "Aider", icon: null },
	{ name: "Ollama", icon: siOllama },
	{ name: "Unity", icon: siUnity },
	{ name: "Unreal Engine", icon: siUnrealengine },
	{ name: "Scrum", icon: null },
	{ name: "Bun", icon: siBun },
	{ name: "Zod", icon: siZod },
	{ name: "Vite", icon: siVite },
	{ name: "React Router", icon: siReactrouter },
	{ name: "Tailwind", icon: siTailwindcss },
	{ name: "Bootstrap", icon: siBootstrap },
	{ name: "WebSocket", icon: null },
];

export type TechWithIcon = Tech & { icon: { path: string } };

export const techByName = new Map(TECH.map((item) => [item.name, item]));

export const iconsFor = (names: readonly string[]): TechWithIcon[] => [
	...new Map(
		names
			.map((name) => techByName.get(name))
			.filter((item): item is TechWithIcon => Boolean(item?.icon))
			.map((item) => [item.name, item] as const),
	).values(),
];
