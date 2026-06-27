"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const PHILOSOPHIES = [
  "honest & reliable.",
  "scalable & optimized.",
  "accessible to everyone.",
  "visually delightful.",
  "written with precision."
];

export default function Home() {
  const [philosophiesIndex, setPhilosophiesIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhilosophiesIndex((prev) => (prev + 1) % PHILOSOPHIES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Graph Paper Sheet */}
      <div className="graph-sheet">
        <div className={styles.introSection}>
          
          {/* Header row */}
          <div className={styles.headerBlock}>
            <div className={styles.titleGroup}>
              <span className={styles.signature}>Sparsh Jain</span>
              <h1 className={styles.role}>Software Development Engineer</h1>
            </div>
            
            {/* Hand-drawn Noodle Bowl Doodle */}
            <div className={styles.noodleDoodle}>
              <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 30c0 9 7 13 18 13s18-4 18-13H12z" />
                <line x1="16" y1="43" x2="44" y2="43" strokeWidth="3" />
                <path d="M15 20c2-3 4-3 4-6M30 20c2-3 4-3 4-6M45 20c2-3 4-3 4-6" strokeWidth="1.5" />
                <line x1="8" y1="12" x2="38" y2="22" strokeWidth="1.5" />
                <line x1="12" y1="9" x2="42" y2="18" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Philosophy marquee/rotate */}
          <div className={styles.philosophyBlock}>
            <p className={styles.philosophyTitle}>
              Software should be <br />
              <span className={styles.highlightText}>
                {PHILOSOPHIES[philosophiesIndex]}
              </span>
            </p>
          </div>

          {/* Bio text */}
          <div className={styles.bioBlock}>
            <p>
              I'm a Software Development Engineer currently building enterprise-grade web solutions at Nighwan Tech. I specialize in the React/Next.js ecosystem, TypeScript, and crafting high-performance frontend architectures.
            </p>
            <p>
              My design and engineering philosophy is inspired by clarity, scalability, and optimization. I love bridging back-end robustness with smooth, responsive, and tactile interfaces.
            </p>
            <div className={styles.handAnnotation}>
              <span>✎</span>
              <span>Available for collaborations & full-stack roles.</span>
            </div>
          </div>

          {/* Experience and Education/Skills Columns */}
          <div className={styles.sectionsGrid}>
            {/* Left Col: Experience */}
            <div>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <div className={styles.timelineList}>
                <div className={styles.timelineItem}>
                  <span className={styles.period}>Nov 2025 - Present</span>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>Software Development Engineer</h3>
                    <span className={styles.itemSubtitle}>Nighwan Technology</span>
                  </div>
                  <p className={styles.itemDesc}>
                    Contributed to full-stack web development projects using React.js, Next.js, and Tailwind CSS. Built responsive user interfaces, integrated backend APIs, participated in code reviews, and optimized Vercel deployments to achieve top performance and SEO scores.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Col: Education & Skills */}
            <div>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.timelineList} style={{ marginBottom: "50px" }}>
                <div className={styles.timelineItem}>
                  <span className={styles.period}>2021 - 2025</span>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>B-Tech (Computer Science & Engineering)</h3>
                    <span className={styles.itemSubtitle}>AKGEC Ghaziabad</span>
                  </div>
                  <p className={styles.itemDesc}>
                    Graduated with an academic record of 7.07 / 10 SGPA. Focused on software structures, algorithms, and web technologies.
                  </p>
                </div>
              </div>

              <h2 className={styles.sectionTitle}>Skills</h2>
              <div className={styles.skillsGroup}>
                <div className={styles.skillCategory}>
                  <span className={styles.categoryName}>Frontend</span>
                  <div className={styles.skillsTags}>
                    <span className={styles.skillTag}>React.js</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>HTML5 / CSS3</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <span className={styles.categoryName}>Backend & Databases</span>
                  <div className={styles.skillsTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express.js</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>MySQL</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <span className={styles.categoryName}>Languages & Tools</span>
                  <div className={styles.skillsTags}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>C++</span>
                    <span className={styles.skillTag}>Git / GitHub</span>
                    <span className={styles.skillTag}>Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
