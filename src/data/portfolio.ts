export interface Project {
	title: string;
	desc: string;
	tags: string[];
	/** Link real del proyecto. Poné `null` para mostrar el placeholder de captura. */
	url: string | null;
}

export const profile = {
	name: "Ignacio Gunst",
	initials: "IG.",
	role: "Software Developer — Backend · Analista de Sistemas",
	tagline:
		"Construyo sistemas backend robustos y APIs escalables, con foco en arquitectura limpia y buenas prácticas.",
	email: "ignacio@example.com",
	github: "https://github.com/",
	linkedin: "https://linkedin.com/",
};

export const about = [
	"[Placeholder] Soy desarrollador de software especializado en backend, con formación como Analista de Sistemas. Me interesa el diseño de arquitecturas escalables, el modelado de datos y la resolución de problemas complejos con código simple y mantenible.",
	"[Placeholder] Trabajo principalmente con APIs REST, bases de datos relacionales y herramientas de contenedores, siempre buscando aprender y mejorar procesos. Editá este texto con tu propia historia.",
];

export const skillGroups: { title: string; items: string[] }[] = [
	{ title: "Lenguajes", items: ["Python", "Java", "TypeScript", "C#"] },
	{
		title: "Frameworks / Runtime",
		items: ["Node.js", "Spring Boot", ".NET", "Express"],
	},
	{ title: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
	{ title: "Herramientas", items: ["Docker", "Git", "Linux", "AWS"] },
];

export const projects: Project[] = [
	{
		title: "API de inventario",
		desc: "Backend REST en Node.js con auth JWT y control de stock en tiempo real.",
		tags: ["Node.js", "PostgreSQL", "Docker"],
		url: "https://example.com",
	},
	{
		title: "Sistema de turnos",
		desc: "Plataforma para gestión de turnos médicos con notificaciones automáticas.",
		tags: ["Java", "Spring Boot", "MySQL"],
		url: "https://example.com",
	},
	{
		title: "Motor de recomendaciones",
		desc: "Servicio de recomendaciones basado en historial de compras.",
		tags: ["Python", "Redis", "FastAPI"],
		url: "https://example.com",
	},
	{
		title: "Gateway de pagos",
		desc: "Integración con pasarelas de pago y conciliación automática.",
		tags: ["C#", ".NET", "SQL Server"],
		url: "https://example.com",
	},
	{
		title: "Panel de métricas",
		desc: "Dashboard interno para monitoreo de servicios y alertas.",
		tags: ["TypeScript", "Express", "Grafana"],
		url: "https://example.com",
	},
	{
		title: "Migrador de datos",
		desc: "Herramienta CLI para migrar datos entre bases legacy y nuevas.",
		tags: ["Python", "ETL", "AWS"],
		url: "https://example.com",
	},
];

/** Lo que se muestra en la barra de direcciones del mock. */
export const displayUrl = (url: string | null) =>
	url ? url.replace(/^https?:\/\//, "") : "sin preview";
