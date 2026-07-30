import en from "./dataEn";
import es, { type Dict } from "./dataEs";

export const DEFAULT_LOCALE = "es";
export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

const DICTS: Record<Locale, Dict> = { es, en };

export const isLocale = (value: string | undefined): value is Locale =>
	LOCALES.includes(value as Locale);

export const toLocale = (value: string | undefined): Locale =>
	isLocale(value) ? value : DEFAULT_LOCALE;

export const dict = (value: string | undefined): Dict => DICTS[toLocale(value)];

export const otherLocale = (value: string | undefined): Locale =>
	toLocale(value) === "es" ? "en" : "es";

export const localeHome = (locale: Locale) =>
	locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
