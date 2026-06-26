import React from "react";
import styles from "./SidebarStamps.module.css";

// SVG Doodles for the Stamps
const STAMPS = [
  // Stamp 1: Signature/Logo Seal
  (
    <svg viewBox="0 0 60 60" className={styles.stampSvg} key="seal">
      <rect x="5" y="5" width="50" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 2" />
      <rect x="9" y="9" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontFamily="var(--font-serif)" fontWeight="bold">SJ</text>
      <circle cx="15" cy="15" r="2" fill="currentColor" />
      <circle cx="45" cy="45" r="2" fill="currentColor" />
    </svg>
  ),
  // Stamp 2: Noodle Bowl
  (
    <svg viewBox="0 0 60 60" className={styles.stampSvg} key="bowl">
      <rect x="5" y="5" width="50" height="50" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 2" />
      {/* Bowl */}
      <path d="M15 32c0 8 6 12 15 12s15-4 15-12H15z" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="44" x2="40" y2="44" stroke="currentColor" strokeWidth="2.5" />
      {/* Chopsticks */}
      <line x1="12" y1="20" x2="38" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="14" y1="17" x2="42" y2="28" stroke="currentColor" strokeWidth="1.5" />
      {/* Steam */}
      <path d="M22 26c0-3 2-3 2-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M30 26c0-3 2-3 2-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M38 26c0-3 2-3 2-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  // Stamp 3: Retro Pointer Hand
  (
    <svg viewBox="0 0 60 60" className={styles.stampSvg} key="hand">
      <rect x="5" y="5" width="50" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" />
      <path d="M20 38v-8c0-1.5 1-2 2-2s2 .5 2 2v-4c0-1.5 1-2 2-2s2 .5 2 2v-1c0-1.5 1-2 2-2s2 .5 2 2v1c0-1.5 1-2 2-2s2 .5 2 2v1c0-1.5 1-2 2-2s2 .5 2 2v12c0 4-3 7-7 7s-7-3-7-7z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 35h4" stroke="currentColor" strokeWidth="2" />
      <path d="M15 30l5 3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  // Stamp 4: Flower Stamp
  (
    <svg viewBox="0 0 60 60" className={styles.stampSvg} key="flower">
      <rect x="5" y="5" width="50" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 2" />
      <circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="42" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="42" cy="30" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M23 23c2-2 4-2 6 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M31 37c2 2 4 2 6 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  // Stamp 5: Owl Stamp
  (
    <svg viewBox="0 0 60 60" className={styles.stampSvg} key="owl">
      <rect x="5" y="5" width="50" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 3 1 3" />
      {/* Body */}
      <ellipse cx="30" cy="34" rx="12" ry="14" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Head ears */}
      <path d="M18 24l5-4 7 2 7-2 5 4" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="25" cy="27" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="35" cy="27" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* Beak */}
      <polygon points="30,29 28,32 32,32" fill="currentColor" />
      {/* Chest Feathers */}
      <path d="M26 35c2 1 6 1 8 0M25 39c2 1 8 1 10 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
];

type Props = {
  side: "left" | "right";
};

export default function SidebarStamps({ side }: Props) {
  // Repeat stamps vertically to fill side height
  const renderedStamps = Array.from({ length: 6 }).flatMap(() => STAMPS);

  return (
    <aside className={`${styles.sidebar} ${side === "left" ? styles.left : styles.right}`}>
      <div className={styles.stampTrack}>
        {renderedStamps.map((stamp, idx) => (
          <div className={styles.stampWrapper} key={idx}>
            {stamp}
          </div>
        ))}
      </div>
    </aside>
  );
}
