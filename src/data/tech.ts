import { ICON_CSHARP, ICON_DB_ID, ICON_LANG_ID, ICON_LIB_ID, iconId } from "./icons";
import {
	siAstro,
	siBootstrap,
	siBun,
	siChartdotjs,
	siClaude,
	siCss,
	siD3,
	siDocker,
	siDotnet,
	siExpress,
	siFfmpeg,
	siGit,
	siGithubactions,
	siGithubcopilot,
	siGo,
	siGrafana,
	siHtml5,
	siJaeger,
	siJavascript,
	siJson,
	siKubernetes,
	siMapbox,
	siMongodb,
	siMysql,
	siN8n,
	siNextdotjs,
	siNodedotjs,
	siOllama,
	siOpencode,
	siOpentelemetry,
	siPostgresql,
	siPrometheus,
	siRabbitmq,
	siReact,
	siReactrouter,
	siRedis,
	siRss,
	siShadcnui,
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
	kind?: "lang" | "db";
}

export const TECH: Tech[] = [
	{ name: "C#", icon: { path: ICON_CSHARP }, kind: "lang" },
	{ name: ".NET", icon: siDotnet },
	{ name: "Go", icon: siGo },
	{ name: "gRPC", icon: null },
	{ name: "Node.js", icon: siNodedotjs },
	{ name: "Supabase", icon: siSupabase },
	{ name: "RabbitMQ", icon: siRabbitmq },
	{ name: "TypeScript", icon: siTypescript },
	{ name: "JavaScript", icon: siJavascript },
	{ name: "React", icon: siReact },
	{ name: "Next", icon: siNextdotjs },
	{ name: "Astro", icon: siAstro },
	{ name: "HTML", icon: siHtml5 },
	{ name: "CSS", icon: siCss },
	{ name: "PostgreSQL", icon: siPostgresql },
	{ name: "pgvector", icon: null, kind: "db" },
	{ name: "MySQL", icon: siMysql },
	{ name: "SQLite", icon: siSqlite },
	{ name: "MongoDB", icon: siMongodb },
	{ name: "Redis", icon: siRedis },
	{ name: "ChromaDB", icon: null },
	{ name: "whisper.cpp", icon: null },
	{ name: "Piper", icon: null },
	{ name: "SQL", icon: null, kind: "lang" },
	{ name: "NoSQL", icon: null, kind: "lang" },
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
	{ name: "ASP.NET Core", icon: null },
	{ name: "EF Core", icon: null },
	{ name: "SQL Server", icon: null, kind: "db" },
	{ name: "SignalR", icon: null },
	{ name: "WinForms", icon: null },
	{ name: "Cinemachine", icon: null },
	{ name: "Express", icon: siExpress },
	{ name: "Zustand", icon: null },
	{ name: "OpenAI", icon: null },
	{ name: "Mapbox", icon: siMapbox },
	{ name: "Chart.js", icon: siChartdotjs },
	{ name: "shadcn/ui", icon: siShadcnui },
	{ name: "D3", icon: siD3 },
	{ name: "JSON", icon: siJson },
	{ name: "goquery", icon: null },
	{ name: "RSS", icon: siRss },
	{ name: "sqlc", icon: null },
	{ name: "goose", icon: null },
	{ name: "OpenTelemetry", icon: siOpentelemetry },
	{ name: "Prometheus", icon: siPrometheus },
	{ name: "Grafana", icon: siGrafana },
	{ name: "Jaeger", icon: siJaeger },
];

export type TechWithIcon = Tech & { icon: { path: string } };

export const techByName = new Map(TECH.map((item) => [item.name, item]));

const FALLBACK_ID: Record<NonNullable<Tech["kind"]>, string> = {
	lang: ICON_LANG_ID,
	db: ICON_DB_ID,
};

export const techMarkId = (name: string): string => {
	const item = techByName.get(name);
	if (item?.icon) return iconId(item.name);
	return (item?.kind && FALLBACK_ID[item.kind]) || ICON_LIB_ID;
};

export const iconsFor = (names: readonly string[]): TechWithIcon[] => [
	...new Map(
		names
			.map((name) => techByName.get(name))
			.filter((item): item is TechWithIcon => Boolean(item?.icon))
			.map((item) => [item.name, item] as const),
	).values(),
];
