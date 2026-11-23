/**
 * Tier 2: Semantic Theme Tokens ("Atmospheric & Translucent")
 * Maps primitive tokens to intentional surfaces, frosted glass layers, specular hairline borders,
 * glowing focus rings, and text hierarchy across Dark (default) and Light atmospheric themes.
 */
export interface SemanticThemeTokens {
  surface: {
    canvas: string;
    canvasGradient: string;
    glassSubtle: string;
    glassElevated: string;
    glassOverlay: string;
    interactiveHover: string;
    interactiveActive: string;
  };
  border: {
    subtle: string;
    strong: string;
    focus: string;
    highlightTop: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
    onAccent: string;
  };
  accent: {
    primary: string;
    primaryHover: string;
    glow: string;
    success: string;
    warning: string;
    danger: string;
  };
  shadow: {
    glass: string;
    elevated: string;
    focusRing: string;
    specular: string;
  };
}

export const semantic: Record<"dark" | "light", SemanticThemeTokens> = {
  dark: {
    surface: {
      canvas: "var(--uime-color-slate-950)",
      canvasGradient:
        "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.16) 0%, rgba(12, 16, 23, 0) 70%)",
      glassSubtle: "var(--uime-alpha-white-03)",
      glassElevated: "var(--uime-alpha-white-06)",
      glassOverlay: "rgba(17, 23, 34, 0.72)",
      interactiveHover: "var(--uime-alpha-white-10)",
      interactiveActive: "var(--uime-alpha-white-14)",
    },
    border: {
      subtle: "var(--uime-alpha-white-10)",
      strong: "var(--uime-alpha-white-20)",
      focus: "var(--uime-color-indigo-400)",
      highlightTop: "var(--uime-alpha-white-14)",
    },
    text: {
      primary: "var(--uime-color-slate-50)",
      secondary: "var(--uime-color-slate-300)",
      muted: "var(--uime-color-slate-500)",
      onAccent: "#ffffff",
    },
    accent: {
      primary: "var(--uime-color-indigo-500)",
      primaryHover: "var(--uime-color-indigo-400)",
      glow: "rgba(99, 102, 241, 0.38)",
      success: "var(--uime-color-emerald-400)",
      warning: "var(--uime-color-amber-400)",
      danger: "var(--uime-color-coral-400)",
    },
    shadow: {
      glass:
        "0 8px 32px -4px var(--uime-alpha-black-45), inset 0 1px 0 0 var(--uime-border-highlight-top)",
      elevated:
        "0 20px 48px -12px var(--uime-alpha-black-65), inset 0 1px 0 0 var(--uime-border-highlight-top)",
      focusRing:
        "0 0 0 2px var(--uime-color-slate-950), 0 0 0 4px var(--uime-border-focus), 0 0 16px 0 var(--uime-accent-glow)",
      specular: "inset 0 1px 0 0 var(--uime-border-highlight-top)",
    },
  },
  light: {
    surface: {
      canvas: "var(--uime-color-alabaster-100)",
      canvasGradient:
        "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.10) 0%, rgba(248, 250, 253, 0) 70%)",
      glassSubtle: "var(--uime-alpha-white-65)",
      glassElevated: "var(--uime-alpha-white-80)",
      glassOverlay: "var(--uime-alpha-white-92)",
      interactiveHover: "var(--uime-alpha-black-04)",
      interactiveActive: "var(--uime-alpha-black-08)",
    },
    border: {
      subtle: "var(--uime-alpha-black-08)",
      strong: "var(--uime-alpha-black-14)",
      focus: "var(--uime-color-indigo-500)",
      highlightTop: "var(--uime-alpha-white-92)",
    },
    text: {
      primary: "var(--uime-color-slate-900)",
      secondary: "var(--uime-color-slate-600)",
      muted: "var(--uime-color-slate-400)",
      onAccent: "#ffffff",
    },
    accent: {
      primary: "var(--uime-color-indigo-600)",
      primaryHover: "var(--uime-color-indigo-500)",
      glow: "rgba(79, 70, 229, 0.24)",
      success: "var(--uime-color-emerald-500)",
      warning: "var(--uime-color-amber-500)",
      danger: "var(--uime-color-coral-500)",
    },
    shadow: {
      glass:
        "0 8px 24px -4px var(--uime-alpha-black-08), inset 0 1px 0 0 var(--uime-border-highlight-top)",
      elevated:
        "0 20px 40px -12px var(--uime-alpha-black-14), inset 0 1px 0 0 var(--uime-border-highlight-top)",
      focusRing:
        "0 0 0 2px var(--uime-color-alabaster-50), 0 0 0 4px var(--uime-border-focus), 0 0 14px 0 var(--uime-accent-glow)",
      specular: "inset 0 1px 0 0 var(--uime-border-highlight-top)",
    },
  },
} as const;
