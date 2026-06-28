"use client";

import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isStamped, setIsStamped] = useState(false);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleStampClick = () => {
    setIsStamped(true);
    setTimeout(() => setIsStamped(false), 600);
  };

  return (
    <footer className={styles.footer}>
      {/* Scrolling Text Ribbon */}
      <div className={styles.scrollRibbon}>
        <div className={styles.scrollTrack}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <span className={styles.scrollText} key={idx}>
              DEVELOPED BY SPARSH JAIN • 
            </span>
          ))}
        </div>
      </div>

      <div className={styles.bottomRow}>
        <span className={styles.copyright}>
          &copy; {currentYear} Sparsh Jain. All rights reserved.
        </span>

        <div className={styles.socials}>
          <a
            href="https://linkedin.com/in/basedsparsh/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/Sparshtub"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>

        {/* Hand-drawn Interactive Stamp */}
        <div className={styles.stampWrapper} onClick={handleStampClick}>
          <svg viewBox="0 0 100 100" className={`${styles.footerStamp} ${isStamped ? styles.stamped : ""}`}>
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
            <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {/* Curved text path */}
            <path id="footerCurve" d="M 22 50 A 28 28 0 1 1 78 50 A 28 28 0 1 1 22 50" fill="none" />
            <text className={styles.stampText}>
              <textPath href="#footerCurve" startOffset="0%">
                * SPARSH JAIN * SDE PORTFOLIO * CREATED 2026 
              </textPath>
            </text>
            {/* Heart symbol in the center */}
            <path d="M50 42 C46 36, 38 39, 38 46 C38 54, 50 63, 50 63 C50 63, 62 54, 62 46 C62 39, 54 36, 50 42 Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </div>

        <a href="#top" onClick={handleScrollTop} className={styles.scrollTop}>
          back to top
          <svg viewBox="0 0 24 24" className={styles.arrowSvg}>
            <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <polyline points="5 12 12 5 19 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
