import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ["src/**/*.vue"],
      reporter: ["lcov"],
    },
  },
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "gallery-vue3",
      fileName: (format) => `gallery-vue3.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        assetFileNames: `gallery-vue3.[ext]`,
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    dedupe: ["vue"],
  },
});
