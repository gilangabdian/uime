/**
 * Tier 1: Primitive Design Tokens
 * Raw palette values, alpha channels, blur scales, spacing, radii, typography, and motion physics.
 * Components should never consume primitive tokens directly in CSS — use Tier 2 Semantic or Tier 3 Component tokens.
 */
export const primitives = {
  color: {
    slate: {
      "950": "#07090e",
      "900": "#0c1017",
      "850": "#111722",
      "800": "#161e2e",
      "700": "#232f46",
      "600": "#364663",
      "500": "#556987",
      "400": "#7c91b1",
      "300": "#a9bad4",
      "200": "#cfd9ea",
      "100": "#e8eef7",
      "50": "#f5f8fc",
    },
    alabaster: {
      "50": "#ffffff",
      "100": "#f8fafd",
      "200": "#f1f5fb",
      "300": "#e3eaf6",
    },
    indigo: {
      "600": "#4f46e5",
      "500": "#6366f1",
      "400": "#818cf8",
      "300": "#a5b4fc",
    },
    emerald: {
      "500": "#10b981",
      "400": "#34d399",
    },
    amber: {
      "500": "#f59e0b",
      "400": "#fbbf24",
    },
    coral: {
      "500": "#f43f5e",
      "400": "#fb7185",
    },
  },
  alpha: {
    white: {
      "03": "rgba(255, 255, 255, 0.03)",
      "06": "rgba(255, 255, 255, 0.06)",
      "10": "rgba(255, 255, 255, 0.10)",
      "14": "rgba(255, 255, 255, 0.14)",
      "20": "rgba(255, 255, 255, 0.20)",
      "65": "rgba(255, 255, 255, 0.65)",
      "80": "rgba(255, 255, 255, 0.80)",
      "92": "rgba(255, 255, 255, 0.92)",
    },
    black: {
      "04": "rgba(7, 9, 14, 0.04)",
      "08": "rgba(7, 9, 14, 0.08)",
      "14": "rgba(7, 9, 14, 0.14)",
      "24": "rgba(7, 9, 14, 0.24)",
      "45": "rgba(7, 9, 14, 0.45)",
      "65": "rgba(7, 9, 14, 0.65)",
      "80": "rgba(7, 9, 14, 0.80)",
    },
  },
  blur: {
    none: "0px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "40px",
  },
  space: {
    "0": "0px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
  },
  radius: {
    xs: "0.375rem",
    sm: "0.5rem",
    md: "0.625rem",
    lg: "0.875rem",
    xl: "1.25rem",
    full: "9999px",
  },
  font: {
    family: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, monospace",
    },
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "0.9375rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.75rem",
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    leading: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.65",
    },
  },
  motion: {
    ease: {
      spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      out: "cubic-bezier(0.22, 1, 0.36, 1)",
      inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
    },
    duration: {
      fast: "120ms",
      normal: "200ms",
      slow: "320ms",
    },
  },
} as const;

export type Primitives = typeof primitives;
