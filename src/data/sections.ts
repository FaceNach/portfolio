import type { Dict } from "../i18n/dataEs";

export const SECTION = {
	top: "top",
	about: "sobre",
	stack: "stack",
	projects: "proyectos",
	contact: "contacto",
} as const;

export const sectionsFor = (t: Dict) =>
	[
		{ id: SECTION.about, label: t.nav.about },
		{ id: SECTION.stack, label: t.nav.stack },
		{ id: SECTION.projects, label: t.nav.projects },
		{ id: SECTION.contact, label: t.nav.contact },
	] as const;
