<script lang="ts">
  import { useStore } from "@usesvelte/core";

  import { Sun, Moon } from "lucide-svelte";
  import { Button } from "~/components/svelte/ui/button";

  import { themeStore, resolvedThemeStore } from "~/stores/theme-store";

  const theme = useStore(themeStore);
  const resolvedTheme = useStore(resolvedThemeStore);

  function toggleTheme() {
    switch (resolvedTheme.value) {
      case "dark":
        theme.value = "light";
        break;
      case "light":
        theme.value = "dark";
        break;
    }
  }
</script>

<Button on:click={toggleTheme} variant="outline" size="icon">
  <Sun
    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
