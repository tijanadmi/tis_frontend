import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export function createViteConfig(base) {
  const packageRoot = new URL("../../", import.meta.url);
  return defineConfig({
    base,
    plugins: [react()],
    build: { outDir: "build-output", emptyOutDir: false },
    resolve: { alias: {
      "@tis/ui": fileURLToPath(new URL("ui/src", packageRoot)),
      "@tis/auth": fileURLToPath(new URL("auth/src", packageRoot)),
      "@tis/api-client": fileURLToPath(new URL("api-client/src", packageRoot)),
      "@tis/hooks": fileURLToPath(new URL("hooks/src", packageRoot)),
        "@tis/utils": fileURLToPath(new URL("utils/src", packageRoot)),
        "@tis/config": fileURLToPath(new URL("config/src", packageRoot))
    }}
  });
}
