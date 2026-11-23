import type { Preview } from "@storybook/react-vite";
import type { CSSProperties } from "react";
import "uime/styles.css";

const canvasStyle: CSSProperties = {
  minHeight: "100%",
  padding: "1.5rem",
  backgroundColor: "var(--uime-surface-canvas)",
  backgroundImage: "var(--uime-surface-canvas-gradient)",
  color: "var(--uime-text-primary)",
  fontFamily: "var(--uime-font-family-sans)",
  borderRadius: "var(--uime-radius-lg)",
  transition: "background-color 200ms ease, color 200ms ease",
};

const splitGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
  gap: "1rem",
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "uime Atmospheric Theme Mode",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "dark", title: "Atmospheric Dark", icon: "moon" },
          { value: "light", title: "Atmospheric Light", icon: "sun" },
          { value: "side-by-side", title: "Side-by-Side Split", icon: "sidebyside" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = (context.globals["theme"] as string | undefined) ?? "dark";

      if (selectedTheme === "side-by-side") {
        return (
          <div style={splitGridStyle}>
            <div data-theme="dark" style={canvasStyle}>
              <Story />
            </div>
            <div data-theme="light" style={canvasStyle}>
              <Story />
            </div>
          </div>
        );
      }

      return (
        <div data-theme={selectedTheme} style={canvasStyle}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
