import { persistentAtom } from "@nanostores/persistent";

export type ResolvedTheme = "light" | "dark";

export type Theme = ResolvedTheme | "system";

export const themeStore = persistentAtom<Theme>("theme", "system");

export const resolvedThemeStore = persistentAtom<ResolvedTheme>(
	"resolved-theme",
	"light",
);

themeStore.subscribe((newTheme) => {
	if (globalThis.window) {
		if (newTheme === "system") {
			if (matchMedia("(prefers-color-scheme: dark)").matches) {
				resolvedThemeStore.set("dark");
			}

			if (matchMedia("(prefers-color-scheme: light)").matches) {
				resolvedThemeStore.set("light");
			}
		} else {
			resolvedThemeStore.set(newTheme);
		}
	}
});

resolvedThemeStore.subscribe((newResolvedTheme) => {
	if (globalThis.window) {
		if (newResolvedTheme === "dark") {
			document.documentElement.classList.add("dark");
			return;
		}

		if (newResolvedTheme === "light") {
			document.documentElement.classList.remove("dark");
			return;
		}
	}
});
