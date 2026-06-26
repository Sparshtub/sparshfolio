"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={(e) => handleLinkClick(e, "#home")}>
          <span className="gradient-text-cyan">Alex</span>
          <span className={styles.logoDot}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`${styles.navLink} ${
                activeSection === item.href.slice(1) ? styles.active : ""
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className={styles.indicator} />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className={styles.ctaButton}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.open : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
          <div className={styles.mobileLinks}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`${styles.mobileNavLink} ${
                  activeSection === item.href.slice(1) ? styles.mobileActive : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className={styles.mobileCtaButton}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
