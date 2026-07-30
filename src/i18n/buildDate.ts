export const buildDate = (months: readonly string[]) => {
	const now = new Date();
	const day = String(now.getDate()).padStart(2, "0");
	return `${day} ${months[now.getMonth()]} ${now.getFullYear()}`;
};
