import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), svelte(), vue()],
});
