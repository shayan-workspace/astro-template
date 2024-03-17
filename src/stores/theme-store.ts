import { persistentAtom } from "@nanostores/persistent";
import { isClient } from "~/lib/platform";

type ResolvedTheme = "light" | "dark";

type Theme = ResolvedTheme | "system";

export const theme = persistentAtom<Theme>("theme", "system");

export const resolvedTheme = persistentAtom<ResolvedTheme>(
  "resolved-theme",
  "light"
);

theme.subscribe((newTheme) => {
  if (isClient) {
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
  }
});

resolvedTheme.subscribe((newResolvedTheme) => {
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
  if (resolvedTheme.get() === "dark") {
    theme.set("light");
    return;
  }

  if (resolvedTheme.get() === "light") {
    theme.set("dark");
    return;
  }
}

export function setTheme(newTheme: Theme) {
  theme.set(newTheme);
}
