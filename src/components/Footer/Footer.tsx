"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={styles.footer}>
      {/* Scrolling Text Ribbon */}
      <div className={styles.scrollRibbon}>
        <div className={styles.scrollTrack}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <span className={styles.scrollText} key={idx}>
              NEXT.JS • TYPESCRIPT • TAILWIND CSS • NODE.JS • EXPRESS • MONGODB • DEVELOPED BY SPARSH JAIN • NOIDA, INDIA • SDE AT NIGHWAN TECH • 
            </span>
          ))}
        </div>
      </div>

      <div className={styles.bottomRow}>
        <span className={styles.copyright}>
          &copy; {currentYear} Sparsh Jain. All rights reserved.
        </span>
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
