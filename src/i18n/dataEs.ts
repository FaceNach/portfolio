import { buildDate } from "./buildDate";

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const fecha = buildDate(MESES);

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
		title: "Ignacio Gunst — Desarrollador de software",
		description:
			"Desarrollador de software. Backend y frontend, integración de sistemas y automatización de procesos.",
	},

	nav: {
		about: "SOBRE",
		stack: "STACK",
		projects: "PROYECTOS",
		contact: "CONTACTO",
		skipToContent: "Saltar al contenido",
		sectionsLabel: "Secciones",
		languageLabel: "Idioma",
		switchLanguage: "View in English",
	},

	hero: {
		host: "sistema:ignacio-gunst",
		lastSession: `última sesión: ${fecha}`,
		nameFirst: "IGNACIO",
		nameLast: "GUNST",
		role: "backend & frontend · integración de sistemas · automatización",
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
			{ key: "idiomas", value: "español nativo · inglés profesional" },
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
					"Next",
					"Astro",
					"HTML",
					"CSS",
					"Tailwind",
					"Bootstrap",
				],
			},
			{
				name: "bases de datos",
				items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "ChromaDB"],
			},
			{
				name: "herramientas",
				items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "n8n"],
			},
			{
				name: "ia",
				items: ["Ollama", "Claude Code", "Codex", "Copilot"],
			},
			{ name: "otras", items: ["Unity", "Unreal Engine"] },
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
		command: "connect --to ignacio",
		status: [
			{ key: "status", value: "disponible" },
			{ key: "location", value: "Argentina" },
			{ key: "timezone", value: "GMT-3" },
			{ key: "work", value: "remoto" },
			{ key: "focus", value: "backend · automatización · integraciones" },
		],
		lookingLabel: "buscando:",
		lookingFor: [
			"oportunidades backend",
			"proyectos freelance",
			"problemas técnicos interesantes",
		],
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
			name: "Tutor IA de inglés en local",
			tech: ["Go", "Ollama", "whisper.cpp", "Piper", "FFmpeg"],
			detail:
				"CLI para practicar inglés hablado con un tutor de IA. Escribís o hablás y te contesta por texto y en voz alta. Corre todo local, con Ollama, whisper.cpp y Piper.",
			note: "Trabajar con audio y modelos en local. Hacer una CLI tool que funcione en distintos OS",
			url: null,
			repo: "https://github.com/FaceNach/LocalTeacher",
		},
		{
			slug: "rideshare",
			name: "Uber de bolsillo",
			tech: ["Go", "gRPC", "RabbitMQ", "MongoDB", "Kubernetes", "Next"],
			detail:
				"Plataforma de ride-sharing event-driven con microservicios en Go: pedís un viaje, el trip service calcula ruta y tarifa con OSRM, el driver service matchea choferes cercanos con geohash, y el pago se cierra con Stripe Checkout. Todo coordinado por eventos de RabbitMQ y en tiempo real sobre WebSockets.",
			note: "Combinar llamadas síncronas con gRPC entre servicios y eventos asíncronos en RabbitMQ, con dead letter exchange y retries. Levantar el stack entero en Kubernetes con Tilt y seguir los traces en Jaeger con OpenTelemetry.",
			url: null,
			repo: "https://github.com/FaceNach/RideShare",
		},
		{
			slug: "rag-chat",
			name: "RAG Chat",
			tech: ["Go", "PostgreSQL", "pgvector", "OpenAI", "Tailwind", "Docker"],
			detail:
				"Chat RAG local en Go con interfaces de terminal y web. Ingiere documentos e imágenes, recupera fragmentos relevantes desde PostgreSQL con pgvector y los suma al contexto mientras transmite la respuesta del modelo.",
			note: "Construir el flujo RAG de punta a punta. Reescribir preguntas según la conversación, generar embeddings, recuperar por similitud y mantener el chat disponible aunque falle la base de datos vectorial.",
			url: null,
			repo: "https://github.com/FaceNach/rag-chat",
		},
		{
			slug: "wsticket",
			name: "Sistema de colas de tickets",
			tech: ["Bun", "TypeScript", "WebSocket", "React", "Zod", "Tailwind"],
			detail:
				"Colas de tickets en tiempo real. Servidor WebSocket en Bun, frontend en React. Varias pantallas ven los mismos cambios al instante, sin refrescar.",
			note: "Trabajar con WebSockets y sincronización en tiempo real. Diseñar un protocolo de mensajes propio y validarlo entero.",
			url: null,
			repo: "https://github.com/FaceNach/wsTicket",
		},
		{
			slug: "snippetsnippet",
			name: "Pastebin",
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
			note: "Armar una app en capas con repositorio genérico y unit of work sobre EF Core. Manejar autenticación y roles con Identity.",
			url: null,
			repo: "https://github.com/FaceNach/Bulky-Web",
		},
		{
			slug: "couldvebeenanywhere",
			name: "Ruleta de países",
			tech: ["TypeScript", "React", "Vite", "Tailwind", "shadcn/ui", "D3"],
			detail:
				"Te dice qué probabilidad tenías de nacer en tu país y después tira el dado de nuevo para darte otro, sorteado por población real. El que sale te lo muestra en un mapa.",
			note: "Armar un algoritmo de random ponderado. Hacer mapas que escalan solos al tamaño de cada territorio.",
			url: null,
			repo: "https://github.com/FaceNach/couldvebeenanywhere",
		},
		{
			slug: "chatroom-signalr",
			name: "Chat en tiempo real",
			tech: ["C#", ".NET", "ASP.NET Core", "SignalR", "JavaScript", "Bootstrap"],
			detail:
				"Sala de chat en tiempo real con ASP.NET Core y SignalR. Elegís una sala, escribís, y el mensaje le llega al resto al instante. Avisa también cuando alguien entra.",
			note: "Trabajar con SignalR, una librería grande del ecosistema .NET. Manejar salas y broadcast en tiempo real.",
			url: null,
			repo: "https://github.com/FaceNach/Basic-ChatRoom-with-SignalR-no-DB",
		},
		{
			slug: "crawler",
			name: "Crawler web",
			tech: ["Go", "goquery", "HTML", "JSON"],
			detail:
				"Crawler de consola en Go. Le pasás una URL y recorre las páginas del mismo dominio juntando links, imágenes y texto, y te deja todo en un JSON. Corre en paralelo con un tope.",
			note: "Hacer scraping de sitios web. Trabajar con concurrencia en Go, coordinando goroutines con mutex y canales con buffer.",
			url: null,
			repo: "https://github.com/FaceNach/crawler",
		},
		{
			slug: "gator",
			name: "Agregador de RSS",
			tech: ["Go", "PostgreSQL", "RSS", "sqlc", "goose"],
			detail:
				"Agregador de RSS de consola en Go. Seguís feeds, dejás el loop corriendo en otra terminal bajando posts a Postgres, y los leés con un comando. Los repetidos los filtra por URL.",
			note: "Escribir SQL a mano y generar el acceso a datos con sqlc. Armar un proceso de fondo que decide qué bajar y cuándo.",
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
				"Acortador de URLs en Go, chico a propósito. La app es mínima; el foco está en la observabilidad: logs estructurados con slog, métricas en Prometheus, traces en Jaeger y profiling con pprof.",
			note: "Instrumentar un servicio con logs estructurados, métricas, traces y profiling. Levantar el stack con Docker Compose y leerlo en Grafana. Entender qué mirar para detectar que algo anda mal.",
			url: null,
			repo: "https://github.com/FaceNach/linko-starter",
		},
		{
			slug: "postman-clone",
			name: "Clon de Postman",
			tech: ["C#", ".NET", "WinForms", "JSON"],
			detail:
				"Cliente de escritorio para probar APIs, tipo Postman pero mínimo. Elegís el método, pegás la URL, manda el request y te muestra la respuesta con el JSON indentado. WinForms sobre .NET 8.",
			note: "Entender el protocolo HTTP por dentro rehaciendo una herramienta tipo Postman. Usar WinForms para armar una app de escritorio.",
			url: null,
			repo: "https://github.com/FaceNach/Postman-clone",
		},
		{
			slug: "whatvania",
			name: "Plataformero 2D",
			tech: ["Unity", "C#", "Cinemachine"],
			detail:
				"Plataformero 2D en Unity. Corrés, saltás, disparás, juntás cosas y pasás de nivel, con puntaje y vidas que se mantienen entre escenas. Input System, Cinemachine y tilemaps 2D.",
			note: "Trabajar con Unity y pensar en frames en vez de request y respuesta. Programar movimiento, enemigos y estado que sobrevive entre niveles.",
			url: null,
			repo: "https://github.com/FaceNach/WhatVania",
		},
		{
			slug: "aijob",
			name: "Buscador de empleos con IA",
			tech: ["React", "Vite", "Express", "Zustand", "Zod", "OpenAI"],
			detail:
				"Buscador de ofertas de trabajo con resumen generado por IA. Filtrás, paginás, entrás a una oferta y el resumen va apareciendo palabra por palabra mientras el modelo lo escribe. React con Vite y Express.",
			note: "Trabajar con respuestas en streaming de un modelo. Armar el contexto que le llega y ponerle un límite de pedidos.",
			url: null,
			repo: "https://github.com/FaceNach/AIJob",
		},
		{
			slug: "wsmaps",
			name: "Mapa compartido",
			tech: ["Bun", "TypeScript", "WebSocket", "React", "Mapbox", "Zod"],
			detail:
				"Mapa compartido en tiempo real. Entrás con un nombre y un color, y cada uno se ve como un marcador que los demás miran moverse mientras lo arrastrás. Servidor en Bun, mapa con Mapbox.",
			note: "Trabajar con mapas y coordenadas en tiempo real sobre WebSockets. Definir contratos explícitos entre el front y el back.",
			url: null,
			repo: "https://github.com/FaceNach/wsMaps",
		},
		{
			slug: "political-parties",
			name: "Conteo de votos en vivo",
			tech: ["Bun", "TypeScript", "WebSocket", "React", "Chart.js", "Zod"],
			detail:
				"Conteo de votos en vivo. Cargás partidos, votás, y el gráfico de barras se mueve al toque en todas las pantallas conectadas. Servidor en Bun con pub/sub, front en React con Chart.js.",
			note: "Trabajar con gráficos que se actualizan solos en tiempo real. Hacer un CRUD entero por WebSocket, sin REST.",
			url: null,
			repo: "https://github.com/FaceNach/political-parties",
		},
	] satisfies Project[],
};

export type Dict = typeof es;
export default es;
