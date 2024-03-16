import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useStore } from "@nanostores/react";

import { Button } from "~/components/react/ui/button";

import { theme, useTheme, toggleTheme } from "~/stores/theme-store";

export default function ThemeToggle() {
  const $theme = useStore(theme);

  useEffect(() => {
    useTheme($theme);
  });

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
