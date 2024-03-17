import { persistentAtom } from "@nanostores/persistent";
import { isClient } from "~/lib/platform";

type ResolvedTheme = "light" | "dark";

type Theme = ResolvedTheme | "system";

const theme = persistentAtom<Theme>("theme", "system");

const resolvedTheme = persistentAtom<ResolvedTheme>("resolved-theme", "light");

theme.subscribe((newTheme) => {
  if (isClient) {
    if (newTheme === "system") {
      if (matchMedia("(prefers-color-scheme: dark)").matches) {
        setResolvedTheme("dark");
      }

      if (matchMedia("(prefers-color-scheme: light)").matches) {
        setResolvedTheme("light");
      }
    } else {
      setResolvedTheme(newTheme);
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

export function getResolvedTheme() {
  return resolvedTheme.get();
}

export function setResolvedTheme(newResolvedTheme: ResolvedTheme) {
  resolvedTheme.set(newResolvedTheme);
}

export function getTheme() {
  return theme.get();
}

export function setTheme(newTheme: Theme) {
  theme.set(newTheme);
}

export function toggleTheme() {
  if (getResolvedTheme() === "dark") {
    setTheme("light");
    return;
  }

  if (getResolvedTheme() === "light") {
    setTheme("dark");
    return;
  }
}
