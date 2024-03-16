<script setup lang="ts">
  import { effect } from "vue";
  import { Sun, Moon } from "lucide-vue-next";
  import { useStore } from "@nanostores/vue";

  import { Button } from "~/components/vue/ui/button";


  import { theme, useTheme, toggleTheme } from "~/stores/theme-store";

  const $theme = useStore(theme)

  effect(() => {
    useTheme($theme.value);
  });
</script>

<template>
  <Button @click="toggleTheme" variant="outline" size="icon">
    <Sun class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <Moon class="absolute h-[1.2rem] w-[1.2rem] dark:-rotate-90 scale-100 transition-all rotate-0 dark:scale-0" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
