"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

const SEARCH_ITEMS = [
  // Pages
  { id: "about", type: "page", label: "About / Home", url: "/", desc: "Bio details, educational history, timeline and technical skills." },
  { id: "work", type: "page", label: "Work & Projects", url: "/work", desc: "Showcase of notable projects with interactive features." },
  { id: "connect", type: "page", label: "Connect / Contact", url: "/connect", desc: "Get in touch, direct contact channels, feedback forms." },
  
  // Projects
  { id: "nighwan", type: "project", label: "Nighwan Tech Corporate Portal", url: "/work?project=nighwan", desc: "Corporate page built with Next.js, SEO, and reusable components." },
  { id: "gatirath", type: "project", label: "Gatirath Cab & Bus Rentals", url: "/work?project=gatirath", desc: "Cab & bus travel bookings portal with custom trips." },
  { id: "weather", type: "project", label: "Open-Meteo Weather Dashboard", url: "/work?project=weather", desc: "Interactive trends dashboard with Recharts." },
  { id: "plants", type: "project", label: "VrikshVatika Plant E-Store", url: "/work?project=plants", desc: "Plant store concept with micro-interactions." },

  // Skills
  { id: "react", type: "skill", label: "React.js", url: "/", desc: "Core skills under Frontend development." },
  { id: "next", type: "skill", label: "Next.js", url: "/", desc: "Server rendering, static routes, and backend serverless." },
  { id: "ts", type: "skill", label: "TypeScript", url: "/", desc: "Type safety, interfaces, and backend integration." },
  { id: "tailwind", type: "skill", label: "Tailwind CSS", url: "/", desc: "Utility-first modern grids styling." },
  { id: "node", type: "skill", label: "Node.js & Express", url: "/", desc: "Server side APIs development." },
  { id: "smtp", type: "skill", label: "SMTP & API route", url: "/", desc: "Nodemailer validation APIs and contacts submissions." },
  { id: "mongo", type: "skill", label: "MongoDB & Databases", url: "/", desc: "Schema designs and local database setups." }
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [theme, setTheme] = useState<"graph" | "chalk" | "blueprint">("graph");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as any;
    if (savedTheme && ["graph", "chalk", "blueprint"].includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const cycleTheme = () => {
    const nextTheme = theme === "graph" ? "chalk" : theme === "chalk" ? "blueprint" : "graph";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  useEffect(() => {
    const handleGlobalKeys = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
        setSearchQuery("");
        setSelectedIdx(0);
      } else if (e.key === "Escape" && isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleGlobalKeys);
    return () => window.removeEventListener("keydown", handleGlobalKeys);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [searchQuery]);

  const filteredItems = searchQuery.trim() === ""
    ? SEARCH_ITEMS.slice(0, 3)
    : SEARCH_ITEMS.filter(item => 
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSelect = (item: typeof SEARCH_ITEMS[0]) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    router.push(item.url);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx(prev => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSelect(filteredItems[selectedIdx]);
    }
  };

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

          {/* Search link */}
          <div className={styles.navItemWrapper}>
            {/* Hover search magnifying glass doodle */}
            <div className={`${styles.doodleWrapper} ${hoveredItem === "search" ? styles.doodleVisible : ""}`}>
              <svg viewBox="0 0 40 40" className={styles.doodleSvg}>
                <circle cx="18" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="22" y1="22" x2="30" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setSearchQuery("");
                setSelectedIdx(0);
              }}
              className={`${styles.navLink} ${styles.searchBtn}`}
              onMouseEnter={() => setHoveredItem("search")}
              onMouseLeave={() => setHoveredItem(null)}
              aria-label="Search"
            >
              search
            </button>
          </div>

          {/* Theme link */}
          <div className={styles.navItemWrapper}>
            {/* Hover paint palette doodle */}
            <div className={`${styles.doodleWrapper} ${hoveredItem === "theme" ? styles.doodleVisible : ""}`}>
              <svg viewBox="0 0 40 40" className={styles.doodleSvg}>
                <path d="M20 10c-5.5 0-10 4.5-10 10s4.5 10 10 10c1.5 0 2.5-1 2.5-2.5 0-.7-.3-1.3-.7-1.8-.4-.5-.7-1.1-.7-1.7 0-1.5 1.2-2.5 2.5-2.5H26c4.5 0 8-3.5 8-8 0-6.5-6.3-11-14-11z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="16" cy="16" r="2" fill="currentColor"/>
                <circle cx="20" cy="14" r="2" fill="currentColor"/>
                <circle cx="26" cy="16" r="2" fill="currentColor"/>
              </svg>
            </div>
            <button
              onClick={cycleTheme}
              className={`${styles.navLink} ${styles.themeBtn}`}
              onMouseEnter={() => setHoveredItem("theme")}
              onMouseLeave={() => setHoveredItem(null)}
              aria-label={`Cycle theme: current ${theme}`}
            >
              {theme}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsSearchOpen(false)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            {/* Search Input Box */}
            <div className={styles.searchHeader}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.searchBarIcon}>
                <circle cx="11" cy="11" r="7" strokeLinecap="round" />
                <line x1="16" y1="16" x2="21" y2="21" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search projects, skills, pages..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className={styles.searchInput}
              />
              <button className={styles.closeBtn} onClick={() => setIsSearchOpen(false)} aria-label="Close search">
                ✕
              </button>
            </div>

            {/* Results List */}
            <div className={styles.resultsList}>
              {searchQuery.trim() === "" && (
                <div className={styles.sectionHeader}>Quick Links</div>
              )}
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  let icon = "📄";
                  if (item.type === "project") icon = "💼";
                  if (item.type === "skill") icon = "🛠️";
                  
                  return (
                    <div
                      key={item.id}
                      className={`${styles.resultItem} ${idx === selectedIdx ? styles.resultActive : ""}`}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIdx(idx)}
                    >
                      <span className={styles.resultIcon}>{icon}</span>
                      <div className={styles.resultDetails}>
                        <div className={styles.resultLabel}>
                          {item.label}
                          <span className={styles.resultType}>{item.type}</span>
                        </div>
                        <div className={styles.resultDesc}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className={styles.noResults}>
                  <p>No matches found for "{searchQuery}"</p>
                  <span>Try searching for "Next.js", "Gatirath", or "connect".</span>
                </div>
              )}
            </div>

            {/* Help instructions footer */}
            <div className={styles.searchFooter}>
              <span>Press <strong>esc</strong> to close, <strong>↑↓</strong> to navigate, <strong>enter</strong> to select.</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
