import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@layouts": path.resolve(__dirname, "src/layouts/layouts.ts"),
            "@pages": path.resolve(__dirname, "src/pages/pages.ts"),
            "@configs": path.resolve(__dirname, "src/configs/configs.ts"),
            "@constants": path.resolve(__dirname, "src/constants/constants.ts"),
            "@components": path.resolve(__dirname, "src/components/components.ts"),
        },
    },
});
