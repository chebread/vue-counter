import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";

const port = 8080;
export default defineConfig({
  plugins: [vue(), basicSsl()],
  server: {
    port,
    open: {
      app: {
        name: "Google Chrome",
      },
    },
    https: true,
  },
});
