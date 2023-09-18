import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Ensure the environment variables are declared
declare const process: {
  env: {
    VITE_PUBLIC_API_URL: string;
  };
};

console.log(
  "🚀 ~ file: vite.config.ts:8 ~ process:",
  process.env.VITE_PUBLIC_API_URL
);
export default defineConfig({
  envDir: "./",
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    "process.env.VITE_PUBLIC_API_URL": JSON.stringify(
      process.env.VITE_PUBLIC_API_URL
    ),
  },
  publicDir: "public",
  build: {
    target: "esnext",
    sourcemap: true,
    chunkSizeWarningLimit: 1024,
  },
  resolve: {
    alias: {
      // @ts-ignore
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
