"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Size = "sm" | "md" | "lg";

export interface ColorBlockProps {
  /** Array of color strings (hex, rgb, hsl accepted) */
  colors?: string[]; // made optional to avoid runtime errors when undefined
  /** Optional title shown above the palette */
  title?: string;
  /** Whether to show hex values under each swatch */
  showHex?: boolean;
  /** Size of swatches */
  size?: Size;
  /** When true, clicking a swatch copies the color to clipboard */
  copyOnClick?: boolean;
  /** extra tailwind classes on the wrapper */
  className?: string;
  /** callback when a color is clicked (or copied) */
  onColorClick?: (color: string) => void;
}

const sizeMap: Record<Size, string> = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-24 h-24",
};

/**
 * ColorBlock
 * - safe against `colors` being undefined/null
 * - keyboard accessible
 * - copies color string to clipboard (with fallback)
 * - shows a small "Copied" indicator
 */
export default function ColorBlock({
  colors = [], // default to empty array to avoid `.map` on undefined
  title,
  showHex = true,
  size = "md",
  copyOnClick = true,
  className = "",
  onColorClick,
}: ColorBlockProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      // cleanup on unmount
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  async function safeCopy(text: string) {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {
      // fall through to fallback
    }

    // fallback
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("aria-hidden", "true");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  async function handleCopy(color: string) {
    if (copyOnClick) {
      const ok = await safeCopy(color);
      if (ok) {
        setCopied(color);
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setCopied(null), 1400);
      }
    }

    if (onColorClick) onColorClick(color);
  }

  const swatchSize = sizeMap[size];

  return (
    <div className={"font-sans " + className}>
      {title && <div className="mb-3 text-sm font-medium">{title}</div>}

      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${size === "lg" ? 96 : size === "md" ? 64 : 40}px, 1fr))`,
        }}
        role="list"
        aria-label={title ?? "color palette"}
      >
        {/* handle empty colors gracefully */}
        {colors.length === 0 ? (
          <div className="col-span-full text-sm text-[var(--color-fd-primary)]-500">没有提供颜色</div>
        ) : (
          colors.map((c, i) => (
            <div key={(c ?? "") + i} className="flex flex-col items-center" role="listitem">
              <button
                onClick={() => handleCopy(c)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCopy(c);
                  }
                }}
                aria-label={`Color swatch ${c}`}
                title={copyOnClick ? `Click to copy ${c}` : String(c)}
                className={`rounded-2xl overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-fd-primary)]-300 transition-transform transform hover:scale-[1.02] ${swatchSize} cursor-pointer`}
                style={{ background: c ?? "transparent" }}
              />

              {showHex && (
                <div className="mt-2 text-xs select-none">{c}</div>
              )}

              {/* copy indicator */}
              <AnimatePresence>
                {copied === c && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="pointer-events-none mt-2 text-xs text-[#F43900]-600"
                  >
                    已复制!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        )}
      </div>

      {/* small usage hint for accessibility */}
      {/* <div className="mt-3 text-[11px] text-muted-foreground">Interactive: use Enter / space to activate swatches.</div> */}
    </div>
  );
}

