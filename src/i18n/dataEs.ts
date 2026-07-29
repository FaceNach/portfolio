const MESES =["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const hoy = new Date();
const fecha = `${String(hoy.getDate()).padStart(2, "0")} ${MESES[hoy.getMonth()]} ${hoy.getFullYear()}`;

export interface Project {
	slug: string;
	name: string;
	tech: string[];
	images: string[];
	detail: string;
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
		projects: "PROYECTOS",
		contact: "CONTACTO",
		skipToContent: "Saltar al contenido",
	},

	hero: {
		host: "sistema:ignacio-gunst",
		lastSession: `última sesión: ${fecha}`,
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
		],
	},

	stack: {
		label: "§ STACK",
		heading: "Con qué trabajo",
		groups: [
			{
				name: "backend",
				items: ["C#", ".NET", "Go", "Node.js", "Supabase", "RabbitMQ"],
			},
			{
				name: "frontend",
				items: ["TypeScript", "JavaScript", "React", "Astro", "HTML", "CSS"],
			},
			{
				name: "bases de datos",
				items: [
					"PostgreSQL",
					"MySQL",
					"SQLite",
					"MongoDB",
					"Redis",
					"ChromaDB",
					"SQL",
					"NoSQL",
				],
			},
			{
				name: "herramientas",
				items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "n8n"],
			},
			{
				name: "ia",
				items: ["Copilot", "Codex", "Claude Code", "Kilo Code", "Opencode", "Aider"],
			},
			{ name: "otras", items: ["Unity", "Unreal Engine", "Scrum"] },
		],
	},

	projects: {
		label: "§ PROYECTOS",
		heading: "Proyectos",
		detailLabel: "detalle",
		noteLabel: "lo interesante",
		visit: "ver en vivo",
		source: "código",
		noLinks: "sin link público",
		noImage: "sin captura",
		shotLabel: "captura",
	},

	contact: {
		label: "§ CONTACTO",
		heading: "Escribime",
		body: "Si tenés un proyecto, una vacante o una duda técnica, mandá un mail. Contesto todos.",
		email: "ignacioijg@gmail.com",
		emailLabel: "mail",
		emailAction: "copiar mail",
		emailCopied: "mail copiado",
		emailFailed: "no se pudo copiar",
		github: "https://github.com/facenach",
		githubLabel: "github",
		linkedin: "https://www.linkedin.com/in/ignaciogunst/",
		linkedinLabel: "linkedin",
		footer: "hecho con Astro · sin frameworks de más",
	},

	projectList: [
		{
			slug: "api-inventario",
			name: "API de inventario",
			tech: ["C#", ".NET", "PostgreSQL", "Docker"],
			images: [],
			detail:
				"[Placeholder] API REST para control de stock en tiempo real, con autenticación y roles por sucursal.",
			note: "[Placeholder] Contá acá el problema difícil: la condición de carrera que resolviste, la decisión de modelado que cambió todo, el número que mejoró.",
			url: null,
			repo: null,
		},
		{
			slug: "sistema-turnos",
			name: "Sistema de turnos",
			tech: ["Node.js", "TypeScript", "MySQL", "Docker"],
			images: [],
			detail:
				"[Placeholder] Gestión de turnos con notificaciones automáticas y agenda por profesional.",
			note: "[Placeholder] Qué aprendiste manejando husos horarios, recordatorios y cancelaciones tardías.",
			url: null,
			repo: null,
		},
		{
			slug: "buscador-semantico",
			name: "Buscador semántico",
			tech: ["Go", "ChromaDB", "PostgreSQL"],
			images: [],
			detail:
				"[Placeholder] Búsqueda por similitud sobre documentos internos, con embeddings en base vectorial.",
			note: "[Placeholder] Cómo mediste si los resultados eran buenos.",
			url: null,
			repo: null,
		},
		{
			slug: "gateway-pagos",
			name: "Gateway de pagos",
			tech: ["C#", ".NET", "RabbitMQ", "SQL"],
			images: [],
			detail:
				"[Placeholder] Integración con pasarelas de pago y conciliación automática de movimientos.",
			note: "[Placeholder] Idempotencia, reintentos y qué pasa cuando la pasarela responde dos veces.",
			url: null,
			repo: null,
		},
		{
			slug: "automatizaciones",
			name: "Automatizaciones internas",
			tech: ["n8n", "Node.js", "Supabase"],
			images: [],
			detail:
				"[Placeholder] Workflows que reemplazaron tareas manuales recurrentes del equipo.",
			note: "[Placeholder] Cuántas horas por semana dejó de hacer alguien a mano.",
			url: null,
			repo: null,
		},
		{
			slug: "migrador-datos",
			name: "Migrador de datos",
			tech: ["Go", "MongoDB", "PostgreSQL", "Kubernetes"],
			images: [],
			detail:
				"[Placeholder] CLI para migrar datos entre una base legacy y el esquema nuevo.",
			note: "[Placeholder] El registro sucio que te obligó a repensar la validación entera.",
			url: null,
			repo: null,
		},
		{
			slug: "panel-metricas",
			name: "Panel de métricas",
			tech: ["TypeScript", "React", "PostgreSQL", "Docker"],
			images: [],
			detail:
				"[Placeholder] Dashboard interno de monitoreo de servicios con alertas por umbral.",
			note: "[Placeholder] Qué métrica resultó ser la que de verdad avisaba antes de que algo se cayera.",
			url: null,
			repo: null,
		},
		{
			slug: "integracion-erp",
			name: "Integración con ERP",
			tech: ["C#", ".NET", "RabbitMQ", "SQL"],
			images: [],
			detail:
				"[Placeholder] Sincronización de maestros y comprobantes entre el ERP y los servicios propios.",
			note: "[Placeholder] Cómo manejaste que el ERP no siempre estuviera disponible.",
			url: null,
			repo: null,
		},
		{
			slug: "scraper-precios",
			name: "Scraper de precios",
			tech: ["Go", "Redis", "Docker", "Kubernetes"],
			images: [],
			detail:
				"[Placeholder] Relevamiento periódico de precios de la competencia, con cache y reintentos.",
			note: "[Placeholder] El límite de rate que te obligó a repensar la estrategia de scheduling.",
			url: null,
			repo: null,
		},
		{
			slug: "prototipo-unity",
			name: "Prototipo en Unity",
			tech: ["Unity", "C#"],
			images: [],
			detail:
				"[Placeholder] Prototipo jugable armado para probar una mecánica concreta.",
			note: "[Placeholder] Qué te llevaste de trabajar con un loop de frames en vez de request/response.",
			url: null,
			repo: null,
		},
	] satisfies Project[],
};

export type Dict = typeof es;
export default es;
