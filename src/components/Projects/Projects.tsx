"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

type Project = {
  id: string;
  title: string;
  category: "fullstack" | "frontend" | "design";
  categoryLabel: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
  features: string[];
};

const PROJECTS_DATA: Project[] = [
  {
    id: "dashboard",
    title: "Apex Analytics Dashboard",
    category: "fullstack",
    categoryLabel: "Full Stack",
    shortDesc: "A real-time high-performance metrics dashboard with glassmorphic visuals.",
    longDesc: "Apex Analytics is a enterprise-scale dashboard providing real-time data streaming and analysis. Built to handle heavy metric pipelines, it aggregates API usages and active user metrics into smooth, interactive canvas charts. It has full multi-tenant workspace separation and user permission models.",
    image: "/images/dashboard.png",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Recharts"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    features: [
      "Real-time WebSocket connection to metric pipelines",
      "Dynamic dashboard layout editing and state persistence",
      "Highly responsive charts built with SVG and Canvas elements",
      "OAuth2 authentication with GitHub, Google, and Magic Links"
    ]
  },
  {
    id: "plants",
    title: "VrikshVatika Plant E-Store",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDesc: "A luxury plant e-commerce experience highlighting sleek transitions and filters.",
    longDesc: "VrikshVatika is a concept luxury shop for exotic plants. It emphasizes visual storytelling, custom page-reveal transition states, micro-interactions for adding items to the cart, and high-performance product sorting using client-side indexing.",
    image: "/images/plants.png",
    tech: ["React", "CSS Modules", "Context API", "Framer Motion"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    features: [
      "Fluid page-reveal animations and loading states",
      "Client-side search and faceted sorting by genus, light requirement, and size",
      "Highly accessible semantic HTML structure and ARIA labels",
      "Sleek drawer-based cart layout with instant status feedback"
    ]
  },
  {
    id: "crypto",
    title: "Nova Crypto Portfolio Tracker",
    category: "design",
    categoryLabel: "UI/UX Design",
    shortDesc: "A futuristic trading and portfolio mockup utilizing sleek neon glass structures.",
    longDesc: "Nova is a highly futuristic crypto asset management portal. It showcases neon-accented dark aesthetics, complex layout designs, custom icons, and visual mockups built with advanced CSS glow styles and backdrop filter parameters.",
    image: "/images/crypto.png",
    tech: ["Figma", "Next.js", "CSS variables", "SVG animations"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com",
    features: [
      "Neo-cyberpunk layout styling with rich visual hierarchy",
      "Custom-crafted vector assets and glow indicators for trend tracking",
      "Optimized layout that maintains visual ratio across arbitrary screen widths",
      "Interactive dark/neon mode toggles showcasing micro-animations"
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            My <span className="gradient-text-cyan">Projects</span>
          </h2>
          <div className={styles.headerLine}></div>
          <p className={styles.sectionSubtitle}>
            A curated showcase of recent developments, combining technical complexity with high-end digital design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterContainer}>
          {["all", "fullstack", "frontend", "design"].map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${filter === category ? styles.filterActive : ""}`}
              onClick={() => setFilter(category)}
            >
              {category === "all"
                ? "All"
                : category === "fullstack"
                ? "Full Stack"
                : category === "frontend"
                ? "Frontend"
                : "UI/UX Design"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => openModal(project)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.projectImage}
                  priority
                />
                <div className={styles.overlay}>
                  <span className={styles.overlayBtn}>View Project Details</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>{project.categoryLabel}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.shortDesc}</p>
                <div className={styles.techList}>
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={styles.techTagMore}>+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()} // Stop click propagating to overlay
          >
            <button className={styles.modalClose} onClick={closeModal} aria-label="Close Modal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className={styles.modalContentGrid}>
              <div className={styles.modalImageWrapper}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalInfo}>
                <span className={styles.modalCategory}>{selectedProject.categoryLabel}</span>
                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                
                <p className={styles.modalDesc}>{selectedProject.longDesc}</p>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSecTitle}>Key Features</h4>
                  <ul className={styles.modalFeatureList}>
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className={styles.modalFeatureItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSecTitle}>Technologies Used</h4>
                  <div className={styles.modalTechList}>
                    {selectedProject.tech.map((t) => (
                      <span key={t} className={styles.modalTechTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalPrimaryAction}
                  >
                    Launch App
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalSecondaryAction}
                  >
                    View Source
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
