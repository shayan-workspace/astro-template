import { persistentAtom } from "@nanostores/persistent";

type ResolvedTheme = "light" | "dark";

type Theme = ResolvedTheme | "system";

export const theme = persistentAtom<Theme>("theme", "system");

export const resolvedTheme = persistentAtom<ResolvedTheme>(
  "resolved-theme",
  "light"
);

export function useTheme(newTheme: Theme) {
  if (newTheme === "system") {
    if (matchMedia("(prefers-color-scheme: dark)").matches) {
      resolvedTheme.set("dark");
    }

    if (matchMedia("(prefers-color-scheme: light)").matches) {
      resolvedTheme.set("light");
    }
  } else {
    resolvedTheme.set(newTheme);
  }

  if (resolvedTheme.get() === "dark") {
    document.documentElement.classList.add("dark");
    return;
  }

  if (resolvedTheme.get() === "light") {
    document.documentElement.classList.remove("dark");
    return;
  }
}

export function setTheme(newTheme: Theme) {
  theme.set(newTheme);
}

export function toggleTheme() {
  if (resolvedTheme.get() === "dark") {
    theme.set("light");
    return;
  }

  if (resolvedTheme.get() === "light") {
    theme.set("dark");
    return;
  }
}
