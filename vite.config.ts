import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ridhwandev.github.io/bookshelf/",
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["@mui/icons-material"],
  },
  define: {
    "process.env": process.env,
    "window.global": {},
  },
});
