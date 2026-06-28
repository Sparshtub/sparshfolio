import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { PROJECTS } from "../data";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.desc,
    alternates: {
      canonical: `/work/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Sparsh Jain | Software Development Engineer`,
      description: project.desc,
      url: `https://sparshjain.dev/work/${project.id}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className="graph-sheet">
        {/* Navigation Breadcrumb */}
        <header className={styles.header}>
          <Link href="/work" className={styles.backLink}>
            ☞ Back to all projects
          </Link>
          <span className={styles.stampCategory}>
            {project.category}
          </span>
        </header>

        {/* Project Title and Header */}
        <div className={styles.heroSection}>
          <div className={styles.titleWrapper}>
            <span className={styles.tagline}>Case Study</span>
            <h1 className={styles.title}>{project.title}</h1>
          </div>

          {/* Hand-drawn seal */}
          <div className={styles.sealBadge}>
            <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" className={styles.sealSvg}>
              <circle cx="30" cy="30" r="24" strokeDasharray="3 2" />
              <text x="30" y="34" fontSize="10" fontWeight="bold" fontFamily="var(--font-serif)" textAnchor="middle" fill="currentColor">OK</text>
            </svg>
          </div>
        </div>

        {/* Dynamic content grid */}
        <div className={styles.grid}>
          {/* Main Content Area */}
          <main className={styles.mainContent}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.descLong}>{project.descLong}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features & Implementation</h2>
              <ul className={styles.featuresList}>
                {project.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.checkHand}>☞</span>
                    <span className={styles.featureText}>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Engineering Challenges</h2>
              <p className={styles.challengesText}>{project.challenges}</p>
            </section>
          </main>

          {/* Specs / Meta Information tag */}
          <aside className={styles.sidebar}>
            <div className={styles.tagCard}>
              <div className={styles.tagHole} />
              <div className={styles.stitchedBorder} />

              <h3 className={styles.tagHeading}>Specifications</h3>

              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>{project.duration}</span>
              </div>

              <div className={styles.tagDivider} />

              <h4 className={styles.subHeading}>Tech Stack</h4>
              <div className={styles.techBadges}>
                {project.tech.map((t) => (
                  <span className={styles.techBadge} key={t}>{t}</span>
                ))}
              </div>

              {/* Action Buttons inside side tag */}
              <div className={styles.actions}>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                  Launch Project
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                  Source Code
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
