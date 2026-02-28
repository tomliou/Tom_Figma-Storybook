

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/react-vite",
  // GitHub Pages 專案站點路徑為 /<repo-name>/，建置時設 BASE_PATH 讓資源路徑正確
  viteFinal: async (config) => {
    const base = process.env.BASE_PATH;
    if (base) {
      config.base = base.startsWith("/") && base.endsWith("/") ? base : `/${base.replace(/^\/|\/$/g, "")}/`;
    }
    return config;
  },
};
export default config;