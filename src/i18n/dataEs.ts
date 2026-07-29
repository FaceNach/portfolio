const MESES =["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const hoy = new Date();
const fecha = `${String(hoy.getDate()).padStart(2, "0")} ${MESES[hoy.getMonth()]} ${hoy.getFullYear()}`;

export interface Project {
	slug: string;
	name: string;
	tech: string[];
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
				items: [
					"TypeScript",
					"JavaScript",
					"React",
					"Astro",
					"HTML",
					"CSS",
					"Tailwind",
					"Bootstrap",
				],
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
				items: [
					"Ollama",
					"Copilot",
					"Codex",
					"Claude Code",
					"Kilo Code",
					"Opencode",
					"Aider",
				],
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
			slug: "localteacher",
			name: "Tutor de inglés local",
			tech: ["Go", "Ollama", "whisper.cpp", "Piper", "FFmpeg"],
			detail:
				"CLI para practicar inglés hablado con un tutor de IA. Escribís o hablás y te contesta por texto y en voz alta. Corre todo local, con Ollama, whisper.cpp y Piper. Nada sale de tu máquina.",
			note: "El audio fue lo más pesado. Grabar, convertir a WAV de 16 kHz, transcribir, y recién ahí tenés texto para el modelo. Que instalara igual en Linux, macOS y Windows me llevó más que el tutor en sí.",
			url: null,
			repo: "https://github.com/FaceNach/LocalTeacher",
		},
		{
			slug: "wsticket",
			name: "Sistema de colas de tickets",
			tech: ["Bun", "TypeScript", "WebSocket", "React", "Zod", "Tailwind"],
			detail:
				"Colas de tickets en tiempo real. Servidor WebSocket en Bun, frontend en React. Varias pantallas ven los mismos cambios al instante, sin refrescar.",
			note: "Pasar de pedido y respuesta a un estado vivo que miran varias pantallas a la vez. Ahí aparecen cosas que con una API REST ni existen, tipo dos ventanas agarrando el mismo ticket.",
			url: null,
			repo: "https://github.com/FaceNach/wsTicket",
		},
		{
			slug: "snippetsnippet",
			name: "Gestor de snippets de texto",
			tech: ["Go", "MySQL", "HTML", "CSS", "JavaScript"],
			detail:
				"App web en Go para crear y administrar snippets de texto. Cuentas de usuario, sesiones en MySQL, validación del lado del servidor. Plantillas y estáticos embebidos, se despliega como un solo binario.",
			note: "Armar a mano lo que un framework te regala. En Go no hay sesiones, ni cadena de middleware, ni validación de formularios, así que elegís cada pieza y la encajás vos.",
			url: null,
			repo: "https://github.com/FaceNach/SnippetSnippet",
		},
		{
			slug: "gateway-pagos",
			name: "Gateway de pagos",
			tech: ["C#", ".NET", "RabbitMQ", "SQL"],
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
