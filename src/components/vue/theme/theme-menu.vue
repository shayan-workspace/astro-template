<script setup lang="ts">
  import { useStore } from "@usevue/core"
  import { Sun, Moon } from "lucide-vue-next";

  import { Button } from "~/components/vue/ui/button";
  import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "~/components/vue/ui/dropdown-menu";

  import { themeStore } from "~/stores/theme-store"

  const theme = useStore(themeStore)
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
      <DropdownMenuItem @click="() => { theme.value = 'light' }">Light</DropdownMenuItem>
      <DropdownMenuItem @click="() => { theme.value = 'dark' }">Dark</DropdownMenuItem>
      <DropdownMenuItem @click="() => { theme.value = 'system' }">System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
