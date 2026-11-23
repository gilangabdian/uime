/**
 * Tier 3: Component Design Tokens
 * Scoped token contracts for individual UI components referencing Tier 1 & Tier 2 tokens.
 * Consumers can override these variables to theme a specific component without mutating global tokens.
 */
export const components = {
  button: {
    radius: "var(--uime-radius-md)",
    fontWeight: "var(--uime-font-weight-medium)",
    transitionDuration: "var(--uime-motion-duration-fast)",
    transitionEase: "var(--uime-motion-ease-spring)",
    glassBg: "var(--uime-surface-glass-elevated)",
    glassBorder: "var(--uime-border-subtle)",
    glassBackdropBlur: "var(--uime-blur-md)",
  },
  input: {
    radius: "var(--uime-radius-md)",
    bg: "var(--uime-surface-glass-subtle)",
    border: "var(--uime-border-subtle)",
    focusBorder: "var(--uime-border-focus)",
    backdropBlur: "var(--uime-blur-sm)",
  },
  card: {
    radius: "var(--uime-radius-lg)",
    bg: "var(--uime-surface-glass-elevated)",
    border: "var(--uime-border-subtle)",
    shadow: "var(--uime-shadow-glass)",
    backdropBlur: "var(--uime-blur-lg)",
  },
  modal: {
    radius: "var(--uime-radius-xl)",
    bg: "var(--uime-surface-glass-overlay)",
    border: "var(--uime-border-strong)",
    shadow: "var(--uime-shadow-elevated)",
    backdropBlur: "var(--uime-blur-xl)",
  },
} as const;

export type ComponentTokens = typeof components;
