import React from "react";
import styles from "./GlowText.module.css";

// Ported from the old site's post-mount DOM-walker that wrapped every word in
// a hoverable span, skipping subtrees that already carry their own highlight
// styling (hl-marker/hl-box/hl-underline/hl-double). Done here at render time
// instead, so no client JS is needed just to get the hover glow.
const SKIP_CLASSES = ["hl-marker", "hl-box", "hl-underline", "hl-double"];

function shouldSkip(className?: string): boolean {
  if (!className) return false;
  return SKIP_CLASSES.some((c) => className.includes(c));
}

function wrapWords(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(/(\s+)/).map((part, i) => {
    if (part === "") return null;
    if (/^\s+$/.test(part)) return part;
    return (
      <span key={`${keyPrefix}-${i}`} className={styles.glowWord}>
        {part}
      </span>
    );
  });
}

function processChildren(children: React.ReactNode, keyPrefix: string): React.ReactNode {
  return React.Children.map(children, (child, i) => {
    if (typeof child === "string") {
      return wrapWords(child, `${keyPrefix}-${i}`);
    }
    if (typeof child === "number") {
      return child;
    }
    if (React.isValidElement<{ className?: string; children?: React.ReactNode }>(child)) {
      if (shouldSkip(child.props.className)) return child;
      if (child.props.children === undefined) return child;
      return React.cloneElement(child, {
        children: processChildren(child.props.children, `${keyPrefix}-${i}`),
      });
    }
    return child;
  });
}

export default function GlowText({ children }: { children: React.ReactNode }) {
  return <>{processChildren(children, "gw")}</>;
}
