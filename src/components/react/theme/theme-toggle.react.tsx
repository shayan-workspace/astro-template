import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useStore } from "@nanostores/react";
import { theme, useTheme, toggleTheme } from "~/stores/theme-store";
import { Button } from "~/components/react/ui/button";

export default function ThemeToggle() {
  const $theme = useStore(theme);

  useEffect(() => {
    useTheme($theme);
  }, [$theme]);

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] dark:-rotate-90 scale-100 transition-all rotate-0 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
