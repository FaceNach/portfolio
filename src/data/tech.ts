/**
 * Registro único de tecnologías.
 *
 * Lo consumen dos lugares con reglas distintas:
 *   · TechMarquee — descarta las que no tienen logo (una cinta de iconos con
 *     huecos de texto suelto se ve rota).
 *   · La barra de cada proyecto — NO puede descartar nada: si el proyecto está
 *     hecho en C# y C# no tiene logo, omitirlo sería mentir sobre el stack.
 *     Ahí cae a etiqueta de texto.
 *
 * Por eso el icono puede ser null y decide cada consumidor, no el registro.
 */
import {
	siAstro,
	siClaude,
	siCss,
	siDocker,
	siDotnet,
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
	siOpencode,
	siPostgresql,
	siRabbitmq,
	siReact,
	siRedis,
	siSqlite,
	siSupabase,
	siTypescript,
	siUnity,
	siUnrealengine,
} from "simple-icons";

export interface Tech {
	name: string;
	icon: { path: string } | null;
}

/** Orden por área, igual que los grupos del stack. */
export const TECH: Tech[] = [
	// backend
	{ name: "C#", icon: null },
	{ name: ".NET", icon: siDotnet },
	{ name: "Go", icon: siGo },
	{ name: "Node.js", icon: siNodedotjs },
	{ name: "Supabase", icon: siSupabase },
	{ name: "RabbitMQ", icon: siRabbitmq },
	// frontend
	{ name: "TypeScript", icon: siTypescript },
	{ name: "JavaScript", icon: siJavascript },
	{ name: "React", icon: siReact },
	{ name: "Astro", icon: siAstro },
	{ name: "HTML", icon: siHtml5 },
	{ name: "CSS", icon: siCss },
	// bases de datos
	{ name: "PostgreSQL", icon: siPostgresql },
	{ name: "MySQL", icon: siMysql },
	{ name: "SQLite", icon: siSqlite },
	{ name: "MongoDB", icon: siMongodb },
	{ name: "Redis", icon: siRedis },
	{ name: "ChromaDB", icon: null },
	{ name: "SQL", icon: null },
	{ name: "NoSQL", icon: null },
	// herramientas
	{ name: "Docker", icon: siDocker },
	{ name: "Kubernetes", icon: siKubernetes },
	{ name: "Git", icon: siGit },
	{ name: "GitHub Actions", icon: siGithubactions },
	{ name: "n8n", icon: siN8n },
	// ia
	{ name: "Copilot", icon: siGithubcopilot },
	{ name: "Codex", icon: null },
	{ name: "Claude Code", icon: siClaude },
	{ name: "Kilo Code", icon: null },
	{ name: "Opencode", icon: siOpencode },
	{ name: "Aider", icon: null },
	// otras
	{ name: "Unity", icon: siUnity },
	{ name: "Unreal Engine", icon: siUnrealengine },
	{ name: "Scrum", icon: null },
];

export const techByName = new Map(TECH.map((item) => [item.name, item]));

/** Solo las que tienen logo — lo que consume la cinta. */
export const TECH_WITH_ICON = TECH.filter(
	(item): item is Tech & { icon: { path: string } } => item.icon !== null,
);
