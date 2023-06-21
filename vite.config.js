import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import svgr from "vite-plugin-svgr";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/picsio-test-app/",
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@style": path.resolve(__dirname, "./src/style/"),
      "@page": path.resolve(__dirname, "./src/page"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@service": path.resolve(__dirname, "./src/service"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
  plugins: [
    { enforce: "pre", ...mdx() },
    react(),
    viteCommonjs(),
    svgr({
      svgrOptions: {},
    }),
  ],
});
