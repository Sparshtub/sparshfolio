"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Premium Ambient Background Elements */}
      <div className={styles.bgGlowContainer}>
        <div className={`${styles.glowSphere} ${styles.sphereIndigo}`} />
        <div className={`${styles.glowSphere} ${styles.spherePurple}`} />
        <div className={`${styles.glowSphere} ${styles.sphereCyan}`} />
      </div>

      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        <div className={styles.tagline}>
          <span className={styles.taglinePulse} />
          Available for New Opportunities
        </div>

        <h1 className={styles.title}>
          Building Scalable
          <span className={`gradient-text ${styles.block}`}>Web Solutions</span>
          with Modern Tech
        </h1>

        <p className={styles.subtitle}>
          I'm Sparsh Jain, a Software Development Engineer specializing in building fast, scalable, and responsive web applications using Next.js, React.js, TypeScript, and Tailwind CSS.
        </p>

        <div className={styles.ctas}>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, "projects")}
            className={styles.primaryBtn}
          >
            Explore Work
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className={styles.secondaryBtn}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className={styles.scrollDown}>
        <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className={styles.scrollLink} aria-label="Scroll Down">
          <div className={styles.mouse}>
            <div className={styles.wheel} />
          </div>
        </a>
      </div>
    </section>
  );
}
