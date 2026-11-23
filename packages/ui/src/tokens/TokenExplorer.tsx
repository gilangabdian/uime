import { useState } from "react";
import { primitives } from "./primitives.js";
import styles from "./TokenExplorer.module.css";

export interface TokenExplorerProps {
  section?: "all" | "surfaces" | "colors" | "scales";
}

const SURFACE_LAYERS = [
  {
    id: "subtle",
    title: "Glass Subtle",
    cssVar: "--uime-surface-glass-subtle",
    description:
      "Low-elevation translucent surface for quiet containers, inputs, and secondary cards.",
  },
  {
    id: "elevated",
    title: "Glass Elevated",
    cssVar: "--uime-surface-glass-elevated",
    description:
      "Primary interactive card surface with 1px inner top specular highlight and medium frost.",
  },
  {
    id: "overlay",
    title: "Glass Overlay",
    cssVar: "--uime-surface-glass-overlay",
    description:
      "High-elevation floating surface for modals, drawers, command palettes, and popovers.",
  },
] as const;

const SEMANTIC_SWATCHES = [
  { label: "Accent Primary", cssVar: "--uime-accent-primary" },
  { label: "Accent Hover", cssVar: "--uime-accent-primary-hover" },
  { label: "Accent Glow", cssVar: "--uime-accent-glow" },
  { label: "Status Success", cssVar: "--uime-accent-success" },
  { label: "Status Warning", cssVar: "--uime-accent-warning" },
  { label: "Status Danger", cssVar: "--uime-accent-danger" },
  { label: "Text Primary", cssVar: "--uime-text-primary" },
  { label: "Text Secondary", cssVar: "--uime-text-secondary" },
  { label: "Text Muted", cssVar: "--uime-text-muted" },
  { label: "Border Subtle", cssVar: "--uime-border-subtle" },
  { label: "Border Strong", cssVar: "--uime-border-strong" },
  { label: "Specular Top Highlight", cssVar: "--uime-border-highlight-top" },
] as const;

export function TokenExplorer({ section = "all" }: TokenExplorerProps) {
  const [copiedVar, setCopiedVar] = useState<string | null>(null);

  const handleCopy = (variableName: string) => {
    const formatted = `var(${variableName})`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      void navigator.clipboard.writeText(formatted);
    }
    setCopiedVar(variableName);
  };

  const showSurfaces = section === "all" || section === "surfaces";
  const showColors = section === "all" || section === "colors";
  const showScales = section === "all" || section === "scales";

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>uime Design System • 3-Tier Tokens</span>
        <h1 className={styles.title}>Atmospheric &amp; Translucent Foundations</h1>
        <p className={styles.subtitle}>
          All tokens are compiled into zero-runtime CSS Custom Properties inside{" "}
          <code>uime/styles.css</code>. Switch between <strong>Atmospheric Dark</strong>,{" "}
          <strong>Atmospheric Light</strong>, and <strong>Side-by-Side Split</strong> in
          the Storybook toolbar above to inspect live theme adaptation.
        </p>
      </header>

      {showSurfaces && (
        <section className={styles.section} aria-label="Translucent Glass Surfaces">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Tier 2 — Translucent Glass Surfaces &amp; Specular Borders
            </h2>
            <span className={styles.sectionMeta}>
              backdrop-filter + inset 1px top highlight
            </span>
          </div>

          <div className={styles.glassStage}>
            <div className={styles.glassGrid}>
              {SURFACE_LAYERS.map((layer) => (
                <div
                  key={layer.id}
                  className={styles.glassCard}
                  data-surface={layer.id}
                >
                  <div className={styles.cardTitle}>{layer.title}</div>
                  <div className={styles.cardDesc}>{layer.description}</div>
                  <button
                    type="button"
                    className={styles.tokenBadge}
                    onClick={() => handleCopy(layer.cssVar)}
                  >
                    <span>
                      {copiedVar === layer.cssVar
                        ? "✓ Copied!"
                        : `var(${layer.cssVar})`}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {showColors && (
        <section className={styles.section} aria-label="Semantic Theme Tokens">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Tier 2 — Semantic Accents, Text &amp; Hairline Borders
            </h2>
            <span className={styles.sectionMeta}>Auto-adapts to data-theme</span>
          </div>

          <div className={styles.swatchGrid}>
            {SEMANTIC_SWATCHES.map((item) => (
              <div key={item.cssVar} className={styles.swatchCard}>
                <div
                  className={styles.swatchPreview}
                  style={{ background: `var(${item.cssVar})` }}
                />
                <div className={styles.swatchInfo}>
                  <span className={styles.swatchLabel}>{item.label}</span>
                  <span className={styles.swatchVar}>{item.cssVar}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {showScales && (
        <section className={styles.section} aria-label="Geometry and Motion Physics">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Tier 1 &amp; Tier 3 — Squircle Geometry &amp; Spring Motion
            </h2>
            <span className={styles.sectionMeta}>
              cubic-bezier(0.16, 1, 0.3, 1)
            </span>
          </div>

          <div className={styles.scaleRow}>
            {Object.entries(primitives.radius).map(([key, value]) => (
              <div
                key={key}
                className={styles.radiusBox}
                style={{ borderRadius: `var(--uime-radius-${key})` }}
              >
                <span className={styles.swatchLabel}>radius-{key}</span>
                <span className={styles.swatchVar}>{value}</span>
              </div>
            ))}
          </div>

          <div>
            <button type="button" className={styles.motionButton}>
              Press or Tab-Focus Me (Spring + Glow Ring Preview)
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
