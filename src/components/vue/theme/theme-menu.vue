<script setup lang="ts">
  import { effect } from "vue";
  import { Sun, Moon } from "lucide-vue-next";
  import { useStore } from "@nanostores/vue";
  import { theme, useTheme, setTheme } from "~/stores/theme-store"
  import { Button } from "~/components/vue/ui/button";
  import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "~/components/vue/ui/dropdown-menu";

  const $theme = useStore(theme)

  effect(() => {
    useTheme($theme.value)
  })
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="() => setTheme('light')">Light</DropdownMenuItem>
      <DropdownMenuItem @click="() => setTheme('dark')">Dark</DropdownMenuItem>
      <DropdownMenuItem @click="() => setTheme('system')">System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
