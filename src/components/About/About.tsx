"use client";

import { useState } from "react";
import styles from "./About.module.css";

type Skill = {
  name: string;
  level: number; // percentage
  icon: React.ReactNode;
  desc: string;
};

type SkillCategories = {
  [key: string]: Skill[];
};

const SKILL_CATEGORIES: SkillCategories = {
  frontend: [
    {
      name: "React / Next.js",
      level: 95,
      desc: "App Router, SSR, Server Actions, context state, custom hooks",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.skillIcon}>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      level: 90,
      desc: "Strict type safety, generics, utility types, system design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.skillIcon}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="7" y1="8" x2="11" y2="8" />
          <line x1="9" y1="8" x2="9" y2="16" />
          <path d="M14 13c1 0 3 .5 3 1.5s-2 1.5-3 1.5M17 10c0 1-2 1.5-3 1.5" />
        </svg>
      ),
    },
    {
      name: "CSS Modules / Vanilla CSS",
      level: 88,
      desc: "Responsive design, Flexbox, CSS Grid, keyframes, transitions, variables",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.skillIcon}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ],
  backend: [
    {
      name: "Node.js / Express",
      level: 88,
      desc: "RESTful APIs, middleware, file streaming, authentication models",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.skillIcon}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "Databases (SQL & NoSQL)",
      level: 85,
      desc: "PostgreSQL, MongoDB, query optimization, schemas, Prisma ORM",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.skillIcon}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
  ],
  tools: [
    {
      name: "Git & GitHub",
      level: 90,
      desc: "Advanced branch management, merge conflict resolution, CI/CD integrations",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.skillIcon}>
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 15V9a4 4 0 0 0-4-4H9" />
          <line x1="6" y1="9" x2="6" y2="15" />
        </svg>
      ),
    },
    {
      name: "Docker & Cloud Services",
      level: 78,
      desc: "Containerizing services, AWS (S3, EC2), Vercel deployments",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.skillIcon}>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ],
};

const TIMELINE = [
  {
    role: "Senior Full Stack Engineer",
    company: "PixelCraft Studios",
    period: "2024 - Present",
    desc: "Led development of high-traffic Next.js apps, integrated cloud microservices, and reduced client loading speeds by 40% with clean architecture and route optimization.",
  },
  {
    role: "Full Stack Developer",
    company: "Nexus Digital",
    period: "2022 - 2024",
    desc: "Built custom interactive features for client e-commerce stores using Node.js and React. Collaborated closely with design team to maintain flawless visual identity.",
  },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            About <span className="gradient-text-cyan">Me</span>
          </h2>
          <div className={styles.headerLine}></div>
          <p className={styles.sectionSubtitle}>
            A glimpse into my background, experience, and the technical skillset I leverage to create premium digital solutions.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Bio & Experience Timeline */}
          <div className={styles.leftCol}>
            <div className={styles.bioCard}>
              <h3 className={styles.bioTitle}>My Story</h3>
              <p className={styles.bioText}>
                I'm a self-driven software engineer who loves the intersection of software architecture and visual design. I bridge the gap between back-end infrastructure robustness and front-end interface polish.
              </p>
              <p className={styles.bioText}>
                Over the past 5 years, I've designed interactive experiences for startups and agencies, maintaining high code quality and strict performance standards. I enjoy pushing limits with modern web frameworks.
              </p>
            </div>

            <div className={styles.timelineContainer}>
              <h3 className={styles.timelineTitle}>Experience</h3>
              <div className={styles.timelineList}>
                {TIMELINE.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelinePeriod}>{item.period}</div>
                    <h4 className={styles.timelineRole}>{item.role}</h4>
                    <span className={styles.timelineCompany}>{item.company}</span>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Skills Dashboard */}
          <div className={styles.rightCol}>
            <div className={styles.skillsCard}>
              <h3 className={styles.skillsTitle}>Technical Abstraction</h3>
              
              {/* Category Selector Tabs */}
              <div className={styles.tabList}>
                {Object.keys(SKILL_CATEGORIES).map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.tabBtn} ${activeCategory === cat ? styles.tabActive : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              {/* Skills Panel */}
              <div className={styles.skillsPanel}>
                {SKILL_CATEGORIES[activeCategory].map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <div className={styles.skillNameGroup}>
                        {skill.icon}
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <span className={styles.skillLevelText}>{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className={styles.skillDesc}>{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
