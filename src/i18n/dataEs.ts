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
			slug: "bulky-web",
			name: "Tienda online",
			tech: ["C#", ".NET", "ASP.NET Core", "EF Core", "SQL Server", "Bootstrap"],
			detail:
				"Una tienda hecha en ASP.NET Core y .NET 8. Tiene el catálogo para el cliente y un panel aparte donde cargás categorías y productos con su imagen. Las cuentas y los roles salen de Identity.",
			note: "Las imágenes viven en disco y los datos en la base, y eso se desincroniza fácil. Cuando cambiás la foto de un producto tenés que borrar la vieja a mano, si no te van quedando archivos huérfanos.",
			url: null,
			repo: "https://github.com/FaceNach/Bulky-Web",
		},
		{
			slug: "couldvebeenanywhere",
			name: "Ruleta de países",
			tech: ["TypeScript", "React", "Vite", "Tailwind", "shadcn/ui", "D3"],
			detail:
				"Te dice qué probabilidad tenías de nacer en tu país y después tira el dado de nuevo para darte otro, sorteado por población real. El que sale te lo muestra en un mapa.",
			note: "El mapa. Para encajar un país en pantalla calculás su caja y de ahí el zoom, pero los que cruzan el antimeridiano devuelven un ancho negativo. Rusia y Fiji salían con un zoom absurdo hasta sumarle 360.",
			url: null,
			repo: "https://github.com/FaceNach/couldvebeenanywhere",
		},
		{
			slug: "chatroom-signalr",
			name: "Chat en tiempo real",
			tech: ["C#", ".NET", "ASP.NET Core", "SignalR", "JavaScript", "Bootstrap"],
			detail:
				"Sala de chat en tiempo real con ASP.NET Core y SignalR. Elegís una sala, escribís, y el mensaje le llega al resto al instante. Avisa también cuando alguien entra.",
			note: "Sin base no hay historial. Las salas son un diccionario estático en el controlador y los mensajes solo viven en las pestañas abiertas. Si refrescás perdés todo, y el que entra tarde no ve lo anterior.",
			url: null,
			repo: "https://github.com/FaceNach/Basic-ChatRoom-with-SignalR-no-DB",
		},
		{
			slug: "crawler",
			name: "Crawler web",
			tech: ["Go", "goquery", "HTML", "JSON"],
			detail:
				"Crawler de consola en Go. Le pasás una URL y recorre las páginas del mismo dominio juntando links, imágenes y texto, y te deja todo en un JSON. Corre en paralelo con un tope.",
			note: "Preguntar si ya visité una URL y anotarla tienen que pasar dentro del mismo candado. Separadas parecen andar, pero dos goroutines pasan el chequeo a la vez y bajan la misma página dos veces.",
			url: null,
			repo: "https://github.com/FaceNach/crawler",
		},
		{
			slug: "gator",
			name: "Agregador de RSS",
			tech: ["Go", "PostgreSQL", "RSS", "sqlc", "goose"],
			detail:
				"Agregador de RSS de consola en Go. Seguís feeds, dejás el loop corriendo en otra terminal bajando posts a Postgres, y los leés con un comando. Los repetidos los filtra por URL.",
			note: "Elegir qué feed toca es un ORDER BY por la última vez que lo bajaste. En Postgres los nulos van al final por defecto, así que a un feed recién agregado no le tocaba nunca hasta que puse NULLS FIRST.",
			url: null,
			repo: "https://github.com/FaceNach/gator",
		},
		{
			slug: "linko",
			name: "Acortador de URLs",
			tech: [
				"Go",
				"OpenTelemetry",
				"Prometheus",
				"Grafana",
				"Jaeger",
				"Docker",
			],
			detail:
				"Acortador de URLs en Go, chico a propósito. Lo que importa es lo que tiene colgado. Logs estructurados con slog, métricas en Prometheus, traces en Jaeger y profiling con pprof.",
			note: "Para loguear el status y los bytes hay que envolver el ResponseWriter, porque no te los deja leer. Y si el handler nunca llama a WriteHeader igual salió un 200, así que ese default lo ponés a mano.",
			url: null,
			repo: "https://github.com/FaceNach/linko-starter",
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
