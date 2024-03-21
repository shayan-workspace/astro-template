<script lang="ts">
import { useStore } from "@usesvelte/core";
import { Moon, Sun } from "lucide-svelte";

import { Button } from "~/components/svelte/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/svelte/ui/dropdown-menu";

import { themeStore } from "~/stores/theme-store";

const theme = useStore(themeStore);
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
    <DropdownMenuItem on:click={() => { theme.value = "light"; }}>
      Light
    </DropdownMenuItem>
    <DropdownMenuItem on:click={() => { theme.value = "dark"; }}>
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem on:click={() => { theme.value = "system"; }}>
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
