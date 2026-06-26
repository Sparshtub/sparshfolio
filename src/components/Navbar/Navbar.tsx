"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleConnect = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsConnectOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Navigation list */}
        <div className={styles.navList}>
          {/* Smiley Icon / Initial */}
          <Link 
            href="/" 
            className={styles.smileLink}
            onMouseEnter={() => setHoveredItem("smile")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={styles.smileFace}>
              {hoveredItem === "smile" ? "(*^‿^*)" : ":)"}
            </span>
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

          {/* Connect dropdown link */}
          <div className={styles.navItemWrapper}>
            <a
              href="#connect"
              onClick={toggleConnect}
              className={`${styles.navLink} ${isConnectOpen ? styles.active : ""}`}
              onMouseEnter={() => setHoveredItem("connect")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Connect
            </a>

            {/* Connect dropdown list */}
            <div className={`${styles.connectDropdown} ${isConnectOpen ? styles.dropdownOpen : ""}`}>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/basedsparsh/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.dropdownLink}
                title="LinkedIn"
              >
                <svg viewBox="0 0 40 40" className={styles.socialSvg}>
                  <rect x="5" y="5" width="30" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                  <text x="14" y="26" fontSize="16" fontWeight="bold" fontFamily="var(--font-handwriting)">in</text>
                  {/* Scribble ring around button */}
                  <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" className={styles.scribbleRing} />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Sparshtub"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.dropdownLink}
                title="GitHub"
              >
                <svg viewBox="0 0 40 40" className={styles.socialSvg}>
                  {/* Cat face doodle */}
                  <path d="M12 25c0 5 4 8 8 8s8-3 8-8c0-2-1-4-2-5 0 0 1-2 0-4 0 0-2 0-4 2-1 0-3 0-4 0-2-2-4-2-4-2-1 2 0 4 0 4-1 1-2 3-2 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="17" cy="23" r="1" fill="currentColor" />
                  <circle cx="23" cy="23" r="1" fill="currentColor" />
                  <path d="M18 26q2 1.5 4 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:basedsparshjain@gmail.com"
                className={styles.dropdownLink}
                title="Email"
              >
                <svg viewBox="0 0 40 40" className={styles.socialSvg}>
                  <rect x="5" y="8" width="30" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 8l15 11L35 8" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" className={styles.scribbleRing} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
