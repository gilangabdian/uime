import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.mdx",
    "../../../packages/ui/src/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    viteConfig.resolve = viteConfig.resolve ?? {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias ?? {}),
      "uime/styles.css": resolve(
        __dirname,
        "../../../packages/ui/dist/styles.css",
      ),
      "uime/tokens": resolve(
        __dirname,
        "../../../packages/ui/src/tokens/index.ts",
      ),
      uime: resolve(__dirname, "../../../packages/ui/src/index.ts"),
    };
    return viteConfig;
  },
};

export default config;
