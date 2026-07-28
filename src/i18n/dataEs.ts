/**
 * Todo el contenido del sitio vive acá.
 *
 * Cuando sumemos inglés, `en.ts` exporta un objeto del mismo tipo (`Dict`) y
 * TypeScript falla el build si falta una clave. Ningún componente lleva texto
 * hardcodeado, así que agregar un idioma no toca los componentes.
 */

export type JobStatus = "prod" | "curso" | "archivado";

export interface Job {
	/** Identificador del job. Es el orden en que los construiste. */
	id: string;
	name: string;
	stack: string[];
	status: JobStatus;
	/** Cuánto llevó, en la voz del sitio: "14 meses", "3 semanas". */
	elapsed: string;
	/** Qué es y qué resolvía. Dos o tres frases. */
	detail: string;
	/** Lo más interesante que tuviste que resolver. Es lo que se lee de verdad. */
	note: string;
	url: string | null;
	repo: string | null;
}

const es = {
	locale: "es",
	localeLabel: "ES",

	meta: {
		title: "Ignacio Gunst — Desarrollador backend",
		description:
			"Desarrollador de software orientado a backend, integración de sistemas y automatización de procesos.",
	},

	nav: {
		about: "SOBRE",
		stack: "STACK",
		jobs: "OBRA",
		contact: "CONTACTO",
		skipToContent: "Saltar al contenido",
	},

	hero: {
		host: "sistema:ignacio-gunst",
		lastSession: "última sesión: 28 jul 2026",
		nameFirst: "IGNACIO",
		nameLast: "GUNST",
		role: "backend · integración de sistemas · automatización de procesos",
		intro:
			"Desarrollo servicios backend, APIs REST, integraciones con servicios externos y aplicaciones respaldadas por bases de datos.",
	},

	about: {
		label: "§ SOBRE",
		heading: "Cómo trabajo",
		body: [
			"Me enfoco en construir soluciones mantenibles, optimizar consultas SQL/NoSQL, estabilizar sistemas existentes y mejorar procesos mediante automatización.",
			"También tengo experiencia práctica en proyectos con IA, bases de datos vectoriales y herramientas modernas de desarrollo asistido por IA.",
		],
		facts: [
			{ key: "ubicación", value: "Argentina" },
			{ key: "formación", value: "Analista de Sistemas" },
			{ key: "foco", value: "backend · integración · automatización" },
			{ key: "estado", value: "abierto a propuestas" },
		],
	},

	stack: {
		label: "§ STACK",
		heading: "Con qué trabajo",
		groups: [
			{ name: "backend", items: ["C#", ".NET", "Go", "Node.js", "Supabase"] },
			{
				name: "frontend",
				items: ["TypeScript", "JavaScript", "React", "HTML", "CSS"],
			},
			{
				name: "bases de datos",
				items: ["PostgreSQL", "SQL", "NoSQL", "Redis", "ChromaDB"],
			},
			{
				name: "herramientas",
				items: ["Docker", "Git", "GitHub Actions", "CI/CD", "n8n"],
			},
			{
				name: "ia",
				items: ["Copilot", "Codex", "Claude Code", "Kilo Code", "Opencode", "Aider"],
			},
			{ name: "otras", items: ["Unity", "Unreal Engine", "Scrum"] },
		],
	},

	jobs: {
		label: "§ OBRA",
		heading: "Cola de trabajos",
		note: "Abrí cualquiera para ver el detalle.",
		columns: {
			id: "JOB",
			name: "NOMBRE",
			stack: "STACK",
			status: "ESTADO",
			elapsed: "ELAPSED",
		},
		status: {
			prod: "EN PROD",
			curso: "EN CURSO",
			archivado: "ARCHIVADO",
		},
		detailLabel: "detalle",
		noteLabel: "lo interesante",
		visit: "ver en vivo",
		source: "código",
		noLinks: "sin link público",
	},

	contact: {
		label: "§ CONTACTO",
		heading: "Escribime",
		body: "Si tenés un proyecto, una vacante o una duda técnica, mandá un mail. Contesto todos.",
		email: "ignacio@example.com",
		github: "https://github.com/",
		githubLabel: "github",
		linkedin: "https://linkedin.com/",
		linkedinLabel: "linkedin",
		footer: "hecho con Astro · sin frameworks de más",
	},

	jobsList: [
		{
			id: "0001",
			name: "API de inventario",
			stack: ["Node.js", "PostgreSQL", "Docker"],
			status: "prod",
			elapsed: "14 meses",
			detail:
				"[Placeholder] API REST para control de stock en tiempo real, con autenticación JWT y roles por sucursal.",
			note: "[Placeholder] Contá acá el problema difícil: la condición de carrera que tuviste que resolver, la decisión de modelado que cambió todo, el número que mejoró.",
			url: null,
			repo: null,
		},
		{
			id: "0002",
			name: "Sistema de turnos",
			stack: ["Java", "Spring Boot", "MySQL"],
			status: "prod",
			elapsed: "8 meses",
			detail:
				"[Placeholder] Gestión de turnos médicos con notificaciones automáticas y agenda por profesional.",
			note: "[Placeholder] Qué aprendiste manejando husos horarios, recordatorios y cancelaciones tardías.",
			url: null,
			repo: null,
		},
		{
			id: "0003",
			name: "Motor de recomendaciones",
			stack: ["Python", "FastAPI", "Redis"],
			status: "curso",
			elapsed: "3 meses",
			detail:
				"[Placeholder] Servicio de recomendaciones sobre historial de compras, servido detrás de una cache.",
			note: "[Placeholder] Cómo mediste si las recomendaciones eran buenas.",
			url: null,
			repo: null,
		},
		{
			id: "0004",
			name: "Gateway de pagos",
			stack: ["C#", ".NET", "SQL Server"],
			status: "prod",
			elapsed: "11 meses",
			detail:
				"[Placeholder] Integración con pasarelas de pago y conciliación automática de movimientos.",
			note: "[Placeholder] Idempotencia, reintentos y qué pasa cuando la pasarela responde dos veces.",
			url: null,
			repo: null,
		},
		{
			id: "0005",
			name: "Panel de métricas",
			stack: ["TypeScript", "Express", "Grafana"],
			status: "archivado",
			elapsed: "5 meses",
			detail:
				"[Placeholder] Dashboard interno de monitoreo de servicios con alertas por umbral.",
			note: "[Placeholder] Por qué lo archivaste — reemplazado, discontinuado, o cumplió su ciclo.",
			url: null,
			repo: null,
		},
		{
			id: "0006",
			name: "Migrador de datos",
			stack: ["Python", "ETL", "AWS"],
			status: "archivado",
			elapsed: "3 semanas",
			detail:
				"[Placeholder] CLI para migrar datos entre una base legacy y el esquema nuevo.",
			note: "[Placeholder] El registro sucio que te obligó a repensar la validación entera.",
			url: null,
			repo: null,
		},
	] satisfies Job[],
};

export type Dict = typeof es;
export default es;
