import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { TokenExplorer } from "./TokenExplorer.js";

const meta = {
  title: "Foundations/Design Tokens",
  component: TokenExplorer,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    section: {
      control: "inline-radio",
      options: ["all", "surfaces", "colors", "scales"],
      description: "Filter which token tier and category to inspect.",
    },
  },
} satisfies Meta<typeof TokenExplorer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTokens: Story = {
  args: {
    section: "all",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const subtleCopyButton = canvas.getByRole("button", {
      name: /--uime-surface-glass-subtle/i,
    });
    await userEvent.click(subtleCopyButton);
    await expect(subtleCopyButton).toHaveTextContent("✓ Copied!");
  },
};

export const AtmosphericGlassSurfaces: Story = {
  args: {
    section: "surfaces",
  },
};

export const SemanticColorPalette: Story = {
  args: {
    section: "colors",
  },
};

export const GeometryAndSpringMotion: Story = {
  args: {
    section: "scales",
  },
};
