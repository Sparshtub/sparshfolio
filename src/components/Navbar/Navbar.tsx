"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Navigation list */}
        <div className={styles.navList}>
          {/* Cool Retro Terminal Logo */}
          <Link 
            href="/" 
            className={styles.logoLink}
            onMouseEnter={() => setHoveredItem("logo")}
            onMouseLeave={() => setHoveredItem(null)}
            title="Home"
          >
            <svg viewBox="0 0 50 50" className={`${styles.logoSvg} ${hoveredItem === "logo" ? styles.logoHovered : ""}`}>
              {/* Monitor frame */}
              <rect x="8" y="10" width="34" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.monitorFrame} />
              {/* Screen inner boundary */}
              <rect x="11" y="13" width="28" height="20" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.monitorScreen} />
              {/* Stand */}
              <path d="M21 36l-3 6h14l-3-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className={styles.monitorStand} />
              
              {/* Screen Content */}
              <g className={styles.screenContent}>
                {/* Code bracket left: { */}
                <path d="M15 17c-1 0-2 .5-2 2v2c0 1-.5 1-1 1 .5 0 1 0 1 1v2c0 1.5 1 2 2 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Face Expression */}
                {hoveredItem === "logo" ? (
                  <>
                    {/* Blinking/Winking eyes */}
                    <path d="M19 22l2 1.5-2 1.5M31 22l-2 1.5 2 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Happy tongue out */}
                    <path d="M22 25h6v1.5a3 3 0 0 1-6 0V25z" fill="currentColor" stroke="currentColor" strokeWidth="1" />
                  </>
                ) : (
                  <>
                    {/* Standard eyes */}
                    <circle cx="20" cy="22" r="1.5" fill="currentColor" />
                    <circle cx="30" cy="22" r="1.5" fill="currentColor" />
                    {/* Smile */}
                    <path d="M22 26q3 2 6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </>
                )}
                
                {/* Code bracket right: } */}
                <path d="M35 17c1 0 2 .5 2 2v2c0 1 .5 1 1 1-.5 0-1 0-1 1v2c0 1.5-1 2-2 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </g>
              {/* Flashing terminal cursor */}
              <line x1="31" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="2" className={styles.terminalCursor} />
            </svg>
          </Link>

          {/* About link */}
          <div className={styles.navItemWrapper}>
            {/* Hover face doodle */}
            <div className={`${styles.doodleWrapper} ${hoveredItem === "about" ? styles.doodleVisible : ""}`}>
              <svg viewBox="0 0 40 40" className={styles.doodleSvg}>
                <circle cx="20" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                {/* Hair */}
                <path d="M12 16l3-5 5 2 5-2 3 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                {/* Eyes */}
                <circle cx="16" cy="22" r="1" fill="currentColor" />
                <circle cx="24" cy="22" r="1" fill="currentColor" />
                {/* Mouth */}
                <path d="M17 26q3 2 6 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
              onMouseEnter={() => setHoveredItem("about")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              about
            </Link>
          </div>

          {/* Work link */}
          <div className={styles.navItemWrapper}>
            {/* Hover underline scribble doodle */}
            <div className={`${styles.doodleWrapper} ${hoveredItem === "work" ? styles.doodleVisible : ""}`}>
              <svg viewBox="0 0 40 15" className={styles.underlineSvg}>
                <path d="M2 8c10-2 20-3 36-1c-15 0-25 1-34 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <Link
              href="/work"
              className={`${styles.navLink} ${pathname === "/work" ? styles.active : ""}`}
              onMouseEnter={() => setHoveredItem("work")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              work
            </Link>
          </div>

          {/* Connect link */}
          <div className={styles.navItemWrapper}>
            {/* Hover mail doodle */}
            <div className={`${styles.doodleWrapper} ${hoveredItem === "connect" ? styles.doodleVisible : ""}`}>
              <svg viewBox="0 0 40 40" className={styles.doodleSvg}>
                <rect x="10" y="14" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M10 14l10 8 10-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <Link
              href="/connect"
              className={`${styles.navLink} ${pathname === "/connect" ? styles.active : ""}`}
              onMouseEnter={() => setHoveredItem("connect")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              connect
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
