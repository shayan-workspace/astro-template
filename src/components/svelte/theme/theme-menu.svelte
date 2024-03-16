<script lang="ts">
  import { Sun, Moon } from "lucide-svelte";
  import { theme, useTheme, setTheme } from "~/stores/theme-store";
  import { Button } from "~/components/svelte/ui/button";
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "~/components/svelte/ui/dropdown-menu";

  $effect(() => {
    useTheme($theme);
  });
</script>

<DropdownMenu>
  <DropdownMenuTrigger asChild let:builder>
    <Button builders={[builder]} variant="outline" size="icon">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem on:click={() => setTheme("light")}>Light</DropdownMenuItem
    >
    <DropdownMenuItem on:click={() => setTheme("dark")}>Dark</DropdownMenuItem>
    <DropdownMenuItem on:click={() => setTheme("system")}
      >System</DropdownMenuItem
    >
  </DropdownMenuContent>
</DropdownMenu>
