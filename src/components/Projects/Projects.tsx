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
    id: "nighwantech",
    title: "Nighwan Tech Corporate Portal",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDesc: "A high-performance corporate portal built with Next.js, TypeScript, and Tailwind CSS.",
    longDesc: "A modern corporate website designed and built for Nighwan Technology. Features dynamic, reusable components, interactive product showcases, optimized asset loading, and full search engine optimization with metadata, Open Graph tags, sitemaps, and robots.txt setup.",
    image: "/images/dashboard.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "SEO Optimization"],
    demoUrl: "https://nighwantech.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/portfolio",
    features: [
      "Fully responsive corporate portal layout across devices",
      "Complete SEO optimization including dynamic sitemaps, Open Graph metadata, and robots.txt",
      "Reusable and high-performance UI component architecture",
      "Smooth animations and interactive product showcase sections"
    ]
  },
  {
    id: "gatirath",
    title: "Gatirath Cab & Bus Rentals",
    category: "fullstack",
    categoryLabel: "Full Stack",
    shortDesc: "A premium online vehicle booking portal for one-way, round trip, local and airport transfers.",
    longDesc: "Gatirath is a high-performance vehicle rental and booking platform built with Next.js and Tailwind CSS. It supports comprehensive ride options (One Way, Round Trip, Local, Airport transfers) and custom travel planning packages for corporate events, weddings, and yatras.",
    image: "/images/gatirath.png",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    demoUrl: "https://gatirath-vert.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/portfolio",
    features: [
      "Flexible ride-booking wizard supporting multiple trip types (One Way, Round Trip, Local, Airport)",
      "Integrated tour & travel packages for holidays and spiritual yatras",
      "Dedicated solutions for wedding events, bus rentals, and corporate travel mobility",
      "Clean, modern interface with responsive forms optimized for conversion and speed"
    ]
  },
  {
    id: "weather",
    title: "Open-Meteo Weather Dashboard",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDesc: "An interactive dashboard visualizing real-time weather conditions, air quality indexes, and historical trends.",
    longDesc: "An interactive weather dashboard built with React and Vite that integrates the Open-Meteo API. It visualizes current/hourly weather metrics and air quality indexes, and supports date-range selections to analyze up to two years of historical weather trends through scrollable charts with brush-based zoom controls.",
    image: "/images/weather.png",
    tech: ["React.js", "Vite", "Recharts", "Open-Meteo API", "Vercel"],
    demoUrl: "https://weather-dashboard-six-silk.vercel.app/",
    codeUrl: "https://github.com/Sparshtub/Weather-Dashboard",
    features: [
      "Real-time weather parameters and comprehensive air quality indicators",
      "Interactive hourly trend charts with horizontal scrolling and brush-based zoom",
      "Historical data page to analyze up to 2 years of past weather metrics",
      "Seamless units selection and responsive design optimized for speed"
    ]
  },
  {
    id: "plants",
    title: "VrikshVatika Plant E-Store",
    category: "frontend",
    categoryLabel: "Frontend",
    shortDesc: "A luxury plant e-commerce shop emphasizing micro-interactions and transitions.",
    longDesc: "VrikshVatika is a plant e-commerce shop emphasizing visual storytelling, micro-interactions, responsive design styled with Tailwind CSS, and fast search filtering using client-side indexing.",
    image: "/images/crypto.png",
    tech: ["React.js", "Tailwind CSS", "Context API", "Framer Motion"],
    demoUrl: "https://github.com/Sparshtub/portfolio",
    codeUrl: "https://github.com/Sparshtub/portfolio",
    features: [
      "Smooth page transitions and hover animations",
      "Client-side search and faceted sorting by categories",
      "Responsive design styled with Tailwind CSS utility classes",
      "Interactive cart drawers with status feedback"
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
