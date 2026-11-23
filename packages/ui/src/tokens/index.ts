import { primitives } from "./primitives.js";
import { semantic, type SemanticThemeTokens } from "./semantic.js";
import { components } from "./components.js";
import { ensureUimeStyles, UIME_TOKENS_CSS } from "./inject-styles.js";

ensureUimeStyles();

export { primitives, semantic, components, ensureUimeStyles, UIME_TOKENS_CSS };
export type { SemanticThemeTokens };

export const tokens = {
  primitives,
  semantic,
  components,
} as const;

/**
 * Formats a token path (e.g. "surface.glassElevated" or "color.indigo.500")
 * into its corresponding CSS Custom Property reference (`var(--uime-...)`).
 */
export function cssVar(path: string): string {
  const kebab = path
    .replace(/\./g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
  return `var(--uime-${kebab})`;
}
