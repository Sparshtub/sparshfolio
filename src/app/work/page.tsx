"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

type Project = {
  id: string;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
};

const PROJECTS: Project[] = [
  {
    id: "nighwan",
    title: "Nighwan Tech Corporate Portal",
    category: "Frontend Dev",
    desc: "A high-performance corporate portal built with Next.js, TypeScript, and Tailwind CSS. Features dynamic reusable components, sitemaps, Open Graph metadata, Vercel deployments, and SEO optimizations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel", "SEO"],
    demoUrl: "https://nighwantech.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/portfolio"
  },
  {
    id: "gatirath",
    title: "Gatirath Cab & Bus Rentals",
    category: "Full Stack Dev",
    desc: "A premium vehicle rental and tour booking platform built with Next.js and Tailwind CSS. Supports advanced trip forms, custom tour packages, and corporate/event travel solutions.",
    tech: ["Next.js", "Tailwind CSS", "React.js", "Vercel"],
    demoUrl: "https://gatirath-vert.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/portfolio"
  },
  {
    id: "weather",
    title: "Open-Meteo Weather Dashboard",
    category: "Frontend Dev",
    desc: "An interactive weather dashboard querying Open-Meteo API for current, hourly and historical metrics. Features interactive trend charts built with Recharts, horizontal scrolling, and custom brush-zoom selections.",
    tech: ["React.js", "Vite", "Recharts", "Open-Meteo API", "Vercel"],
    demoUrl: "https://weather-dashboard-six-silk.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/Weather-Dashboard"
  },
  {
    id: "plants",
    title: "VrikshVatika Plant E-Store",
    category: "Frontend Dev",
    desc: "A plant e-commerce concept highlighting visual storytelling, micro-interactions, responsive styling using Tailwind CSS, and client-side sorting algorithms.",
    tech: ["React.js", "Tailwind CSS", "Context API", "Framer Motion"],
    demoUrl: "https://github.com/Sparshtub/portfolio",
    codeUrl: "https://github.com/Sparshtub/portfolio"
  }
];

function WorkContent() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = PROJECTS[activeIdx];
  const searchParams = useSearchParams();
  const projectParam = searchParams.get("project");

  useEffect(() => {
    if (projectParam) {
      const matchedIdx = PROJECTS.findIndex(p => p.id === projectParam);
      if (matchedIdx !== -1) {
        setActiveIdx(matchedIdx);
      }
    }
  }, [projectParam]);

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.intro}>
        {/* Lucky Cat Stamp Doodle */}
        <div className={styles.stampWrapper}>
          <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.stampSvg}>
            <rect x="5" y="5" width="50" height="50" rx="12" strokeDasharray="3 2" />
            <rect x="8" y="8" width="44" height="44" rx="9" />
            {/* Cat outline */}
            <path d="M20 38a10 10 0 0 0 20 0c0-6-3-12-3-12h-14s-3 6-3 12z" />
            <path d="M23 26l-3-6 4 2M37 26l3-6-4 2" />
            {/* Raised left paw */}
            <path d="M16 28q-4-2-2-6t6 2" />
            {/* Face */}
            <circle cx="26" cy="30" r="1" fill="currentColor" />
            <circle cx="34" cy="30" r="1" fill="currentColor" />
            <path d="M28 32q2 1 4 0" />
            {/* Stamp Text */}
            <text x="30" y="50" fontSize="7" fontFamily="var(--font-serif)" fontWeight="bold" textAnchor="middle" fill="currentColor">LUCKY</text>
          </svg>
        </div>
        <h1 className={styles.pageTitle}>Places I've been, things I've learnt</h1>
      </div>

      {/* Grid splitter */}
      <div className={styles.workPanel}>
        
        {/* Left: Dynamic Interactive Clothing Tag */}
        <div className={styles.tagContainer}>
          {/* Thread loop string */}
          <div className={styles.tagString}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M30 0 C 15 20, 15 40, 30 50 C 45 40, 45 20, 30 0" className={styles.tagStringPath} />
            </svg>
          </div>

          <div className={styles.clothingTag} key={activeIdx}>
            {/* Hole */}
            <div className={styles.tagHole} />
            {/* Stitched line */}
            <div className={styles.stitchedBorder} />

            {/* Care symbols */}
            <div className={styles.careSymbols}>
              {/* Wash 30°C */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.careSymbolSvg}>
                <path d="M4 10h16l-2 9H6l-2-9z" />
                <path d="M4 10q3-4 6 0t6 0 4 0" />
                <text x="12" y="16" fontSize="6" fontWeight="bold" textAnchor="middle" fill="currentColor">30</text>
              </svg>
              {/* No Bleach */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.careSymbolSvg}>
                <polygon points="12,4 20,18 4,18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              {/* Iron */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.careSymbolSvg}>
                <path d="M7 16h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9C6 7 5 9 5 11v3a2 2 0 0 0 2 2z" />
                <path d="M6 13h14" />
                <circle cx="9" cy="10" r="1" fill="currentColor" />
              </svg>
              {/* Dry Clean */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.careSymbolSvg}>
                <circle cx="12" cy="12" r="7" />
              </svg>
            </div>

            {/* Tag Details */}
            <div className={styles.tagContent}>
              <h2 className={styles.tagTitle}>{activeProject.title}</h2>
              <span className={styles.tagCategory}>{activeProject.category}</span>
              <div className={styles.tagDivider} />
              
              <p className={styles.tagDesc}>{activeProject.desc}</p>
              
              <div className={styles.tagTechList}>
                {activeProject.tech.map((t) => (
                  <span className={styles.tagTech} key={t}>{t}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className={styles.tagActions}>
                <a href={activeProject.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.tagActionBtn}>
                  Launch App
                </a>
                <a href={activeProject.codeUrl} target="_blank" rel="noopener noreferrer" className={styles.tagActionBtn}>
                  View Code
                </a>
              </div>

              {/* Decorative barcode stamp */}
              <div className={styles.barcode}>
                <svg viewBox="0 0 100 20" fill="currentColor">
                  {/* Alternating wide and narrow barcode stripes */}
                  <rect x="0" y="0" width="3" height="15" />
                  <rect x="5" y="0" width="1" height="15" />
                  <rect x="8" y="0" width="2" height="15" />
                  <rect x="12" y="0" width="4" height="15" />
                  <rect x="18" y="0" width="1" height="15" />
                  <rect x="21" y="0" width="3" height="15" />
                  <rect x="26" y="0" width="2" height="15" />
                  <rect x="30" y="0" width="1" height="15" />
                  <rect x="33" y="0" width="4" height="15" />
                  <rect x="39" y="0" width="2" height="15" />
                  <rect x="43" y="0" width="1" height="15" />
                  <rect x="46" y="0" width="3" height="15" />
                  <rect x="51" y="0" width="1" height="15" />
                  <rect x="54" y="0" width="2" height="15" />
                  <rect x="58" y="0" width="4" height="15" />
                  <rect x="64" y="0" width="1" height="15" />
                  <rect x="67" y="0" width="3" height="15" />
                  <rect x="72" y="0" width="2" height="15" />
                  <rect x="76" y="0" width="1" height="15" />
                  <rect x="79" y="0" width="4" height="15" />
                  <rect x="85" y="0" width="2" height="15" />
                  <rect x="89" y="0" width="1" height="15" />
                  <rect x="92" y="0" width="3" height="15" />
                  {/* Number code */}
                  <text x="50" y="20" fontSize="4" textAnchor="middle" fontFamily="var(--font-mono)">SPARSH-2026-PORTFOLIO</text>
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Selectable Projects List */}
        <div className={styles.projectList}>
          <span className={styles.listHeader}>Notable Work</span>
          {PROJECTS.map((project, idx) => (
            <div
              className={`${styles.projectItem} ${idx === activeIdx ? styles.projectActive : ""}`}
              onClick={() => setActiveIdx(idx)}
              key={project.id}
            >
              <span className={styles.projectArrow}>☞</span>
              <span>{project.title}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Work() {
  return (
    <Suspense fallback={
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "50vh",
        color: "var(--red-stamp)",
        fontFamily: "var(--font-handwriting)",
        fontSize: "24px"
      }}>
        Loading project space...
      </div>
    }>
      <WorkContent />
    </Suspense>
  );
}
