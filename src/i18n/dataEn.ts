import { buildDate } from "./buildDate";
import type { Dict, Project } from "./dataEs";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const date = buildDate(MONTHS);

const en: Dict = {
	locale: "en",
	localeLabel: "EN",

	meta: {
		title: "Ignacio Gunst — Backend developer",
		description:
			"Software developer focused on backend, systems integration and process automation.",
	},

	nav: {
		about: "ABOUT",
		stack: "STACK",
		projects: "PROJECTS",
		contact: "CONTACT",
		skipToContent: "Skip to content",
		sectionsLabel: "Sections",
		languageLabel: "Language",
		switchLanguage: "Ver en español",
	},

	hero: {
		host: "system:ignacio-gunst",
		lastSession: `last session: ${date}`,
		nameFirst: "IGNACIO",
		nameLast: "GUNST",
		role: "backend · systems integration · process automation",
		intro:
			"I build backend services, REST APIs, integrations with external services and database-backed applications.",
	},

	about: {
		label: "§ ABOUT",
		heading: "How I work",
		body: [
			"I focus on building maintainable solutions, tuning SQL/NoSQL queries, stabilising existing systems and improving processes through automation.",
			"I also have hands-on experience with AI projects, vector databases and modern AI-assisted development tools.",
		],
		facts: [
			{ key: "experience", value: "2 years" },
			{ key: "location", value: "Argentina" },
			{ key: "education", value: "Systems Analyst" },
			{ key: "focus", value: "backend · integration · automation" },
		],
	},

	stack: {
		label: "§ STACK",
		heading: "What I work with",
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
				name: "databases",
				items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "ChromaDB"],
			},
			{
				name: "tools",
				items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "n8n"],
			},
			{
				name: "ai",
				items: ["Ollama", "Claude Code", "Copilot"],
			},
			{ name: "other", items: ["Unity", "Unreal Engine"] },
		],
	},

	projects: {
		label: "§ PROJECTS",
		heading: "Projects",
		detailLabel: "detail",
		noteLabel: "what I learned",
		visit: "view live",
		source: "code",
		noLinks: "no public link",
	},

	contact: {
		label: "§ CONTACT",
		heading: "Email me",
		body: "If you have a project, an opening or a technical question, send me an email. I answer all of them.",
		email: "ignacioijg@gmail.com",
		emailLabel: "email",
		emailAction: "copy email",
		emailCopied: "email copied",
		emailFailed: "couldn't copy",
		github: "https://github.com/facenach",
		githubLabel: "github",
		linkedin: "https://www.linkedin.com/in/ignaciogunst/",
		linkedinLabel: "linkedin",
		footer: "built with Astro · no frameworks I didn't need",
	},

	projectList: [
		{
			slug: "localteacher",
			name: "Local AI English tutor",
			tech: ["Go", "Ollama", "whisper.cpp", "Piper", "FFmpeg"],
			detail:
				"CLI to practise spoken English with an AI tutor. You type or talk and it answers back in text and out loud. Everything runs locally, with Ollama, whisper.cpp and Piper.",
			note: "Working with audio and models running locally. Building a CLI tool that works the same on every OS.",
			url: null,
			repo: "https://github.com/FaceNach/LocalTeacher",
		},
		{
			slug: "wsticket",
			name: "Ticket queue system",
			tech: ["Bun", "TypeScript", "WebSocket", "React", "Zod", "Tailwind"],
			detail:
				"Real-time ticket queues. WebSocket server in Bun, React frontend. Several screens see the same changes instantly, without refreshing.",
			note: "Working with WebSockets and real-time sync. Designing my own message protocol and validating all of it.",
			url: null,
			repo: "https://github.com/FaceNach/wsTicket",
		},
		{
			slug: "snippetsnippet",
			name: "Pastebin",
			tech: ["Go", "MySQL", "HTML", "CSS", "JavaScript"],
			detail:
				"Web app in Go to create and manage text snippets. User accounts, sessions in MySQL, server-side validation. Templates and static files embedded, ships as a single binary.",
			note: "Building by hand what a framework hands you. Go has no sessions, no middleware chain and no form validation, so you pick every piece and fit it yourself.",
			url: null,
			repo: "https://github.com/FaceNach/SnippetSnippet",
		},
		{
			slug: "bulky-web",
			name: "Online store",
			tech: ["C#", ".NET", "ASP.NET Core", "EF Core", "SQL Server", "Bootstrap"],
			detail:
				"A store built with ASP.NET Core and .NET 8. It has the customer catalogue and a separate admin panel where you load categories and products with their image. Accounts and roles come from Identity.",
			note: "Building a layered app with a generic repository and unit of work over EF Core. Handling authentication and roles with Identity.",
			url: null,
			repo: "https://github.com/FaceNach/Bulky-Web",
		},
		{
			slug: "couldvebeenanywhere",
			name: "Country roulette",
			tech: ["TypeScript", "React", "Vite", "Tailwind", "shadcn/ui", "D3"],
			detail:
				"It tells you how likely you were to be born in your country and then rolls again to give you another one, weighted by real population. Whatever comes up is shown on a map.",
			note: "Building a weighted random algorithm. Making maps that scale themselves to the size of each territory.",
			url: null,
			repo: "https://github.com/FaceNach/couldvebeenanywhere",
		},
		{
			slug: "chatroom-signalr",
			name: "Real-time chat",
			tech: ["C#", ".NET", "ASP.NET Core", "SignalR", "JavaScript", "Bootstrap"],
			detail:
				"Real-time chat room with ASP.NET Core and SignalR. You pick a room, you type, and the message reaches everyone else instantly. It also announces when someone joins.",
			note: "Working with SignalR, a big library from the .NET ecosystem. Handling rooms and real-time broadcast.",
			url: null,
			repo: "https://github.com/FaceNach/Basic-ChatRoom-with-SignalR-no-DB",
		},
		{
			slug: "crawler",
			name: "Web crawler",
			tech: ["Go", "goquery", "HTML", "JSON"],
			detail:
				"Command-line crawler in Go. You give it a URL and it walks the pages of that same domain collecting links, images and text, and leaves everything in a JSON file. It runs in parallel with a cap.",
			note: "Scraping websites. Working with concurrency in Go, coordinating goroutines with mutexes and buffered channels.",
			url: null,
			repo: "https://github.com/FaceNach/crawler",
		},
		{
			slug: "gator",
			name: "RSS aggregator",
			tech: ["Go", "PostgreSQL", "RSS", "sqlc", "goose"],
			detail:
				"Command-line RSS aggregator in Go. You follow feeds, leave the loop running in another terminal pulling posts into Postgres, and read them with a command. Duplicates get filtered by URL.",
			note: "Writing SQL by hand and generating the data access layer with sqlc. Building a background process that decides what to fetch and when.",
			url: null,
			repo: "https://github.com/FaceNach/gator",
		},
		{
			slug: "linko",
			name: "URL shortener",
			tech: [
				"Go",
				"OpenTelemetry",
				"Prometheus",
				"Grafana",
				"Jaeger",
				"Docker",
			],
			detail:
				"URL shortener in Go, deliberately small. What matters is everything hanging off it. Structured logs with slog, metrics in Prometheus, traces in Jaeger and profiling with pprof.",
			note: "Instrumenting a whole service with structured logs, metrics, traces and profiling. Bringing the stack up with Docker Compose and reading it in Grafana. Learning what to look at to spot that something is wrong.",
			url: null,
			repo: "https://github.com/FaceNach/linko-starter",
		},
		{
			slug: "postman-clone",
			name: "Postman clone",
			tech: ["C#", ".NET", "WinForms", "JSON"],
			detail:
				"Desktop client to test APIs, like Postman but minimal. You pick the method, paste the URL, it sends the request and shows you the response with the JSON indented. WinForms on .NET 8.",
			note: "Understanding the HTTP protocol from the inside by rebuilding a tool like Postman. Using WinForms to put together a desktop app.",
			url: null,
			repo: "https://github.com/FaceNach/Postman-clone",
		},
		{
			slug: "whatvania",
			name: "2D platformer",
			tech: ["Unity", "C#", "Cinemachine"],
			detail:
				"2D platformer in Unity. You run, jump, shoot, pick things up and move through levels, with score and lives that carry across scenes. Input System, Cinemachine and 2D tilemaps.",
			note: "Working with Unity and thinking in frames instead of request and response. Programming movement, enemies and state that survives between levels.",
			url: null,
			repo: "https://github.com/FaceNach/WhatVania",
		},
		{
			slug: "aijob",
			name: "AI job search",
			tech: ["React", "Vite", "Express", "Zustand", "Zod", "OpenAI"],
			detail:
				"Job listing search with AI-generated summaries. You filter, you page through, you open a listing and the summary shows up word by word while the model writes it. React with Vite and Express.",
			note: "Working with streamed responses from a model. Building the context it gets and putting a request limit on it.",
			url: null,
			repo: "https://github.com/FaceNach/AIJob",
		},
		{
			slug: "wsmaps",
			name: "Shared map",
			tech: ["Bun", "TypeScript", "WebSocket", "React", "Mapbox", "Zod"],
			detail:
				"Shared map in real time. You come in with a name and a colour, and everyone shows up as a marker the others watch move while you drag it. Server in Bun, map with Mapbox.",
			note: "Working with maps and coordinates in real time over WebSockets. Defining explicit contracts between the front and the back.",
			url: null,
			repo: "https://github.com/FaceNach/wsMaps",
		},
		{
			slug: "political-parties",
			name: "Live vote count",
			tech: ["Bun", "TypeScript", "WebSocket", "React", "Chart.js", "Zod"],
			detail:
				"Live vote counting. You load parties, you vote, and the bar chart moves right away on every connected screen. Server in Bun with pub/sub, frontend in React with Chart.js.",
			note: "Working with charts that update themselves in real time. Building a whole CRUD over WebSocket, with no REST.",
			url: null,
			repo: "https://github.com/FaceNach/political-parties",
		},
	] satisfies Project[],
};

export default en;
