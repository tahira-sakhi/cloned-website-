import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/cloned-website/", // Replace 'cloned-website' with your repository name
});
