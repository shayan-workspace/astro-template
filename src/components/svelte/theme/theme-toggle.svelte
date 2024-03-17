<script lang="ts">
  import { Sun, Moon } from "lucide-svelte";
  import { toggleTheme } from "~/stores/theme-store";
  import { Button } from "~/components/svelte/ui/button";
  import { useRef, useStore } from "~/lib/use.svelte";
  import { themeStore } from "~/stores/theme-store";

  const theme = useStore(themeStore);
  const count = useRef(0);

  function onClick() {
    count.value++;
    toggleTheme();
  }
</script>

{theme.value}
{count.value}
<Button on:click={onClick} variant="outline" size="icon">
  <Sun
    class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] dark:-rotate-90 scale-100 transition-all rotate-0 dark:scale-0"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
