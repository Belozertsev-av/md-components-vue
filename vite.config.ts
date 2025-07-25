import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      styles: fileURLToPath(new URL("./src/styles", import.meta.url)),
      types: fileURLToPath(new URL("./src/types", import.meta.url)),
    },
  },
})
