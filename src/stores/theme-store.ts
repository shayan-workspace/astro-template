import { persistentAtom } from "@nanostores/persistent";
import { isClient } from "~/lib/platform";

type ResolvedTheme = "light" | "dark";

type Theme = ResolvedTheme | "system";

export const themeStore = persistentAtom<Theme>("theme", "system");

export const resolvedThemeStore = persistentAtom<ResolvedTheme>(
  "resolved-theme",
  "light"
);

themeStore.subscribe((newTheme) => {
  if (isClient) {
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
  if (isClient) {
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

export function toggleTheme() {
  if (resolvedThemeStore.get() === "dark") {
    themeStore.set("light");
    return;
  }

  if (resolvedThemeStore.get() === "light") {
    themeStore.set("dark");
    return;
  }
}

export function setTheme(newTheme: Theme) {
  themeStore.set(newTheme);
}
