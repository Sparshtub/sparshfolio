"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const emailAddress = "basedsparshjain@gmail.com";
  const phoneNumber = "+91 62640-20272";
  const location = "B-31, Sector 71, Noida, 201301";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setIsCopied(true);
      triggerToast("Email copied to clipboard!");
      setTimeout(() => setIsCopied(false), 3000);
    } catch {
      triggerToast("Failed to copy email.");
    }
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate Server Action / API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      triggerToast("Message sent successfully! I will get back to you soon.");
    }, 2000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Get In <span className="gradient-text-cyan">Touch</span>
          </h2>
          <div className={styles.headerLine}></div>
          <p className={styles.sectionSubtitle}>
            Have an exciting project or want to collaborate? Drop me a message and let's create something together.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Direct Info */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Connect Directly</h3>
              <p className={styles.infoDesc}>
                Feel free to copy my email or reach out on social networks. I typically reply within 24 hours.
              </p>

              <div className={styles.emailContainer} onClick={handleCopyEmail}>
                <div className={styles.emailContent}>
                  <span className={styles.emailLabel}>Email Address</span>
                  <span className={styles.emailText}>{emailAddress}</span>
                </div>
                <button className={styles.copyBtn} aria-label="Copy Email Address">
                  {isCopied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" className={styles.copiedIcon}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" className={styles.copyIcon}>
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>

              <div className={styles.emailContainer} style={{ cursor: "default" }}>
                <div className={styles.emailContent}>
                  <span className={styles.emailLabel}>Phone Number</span>
                  <span className={styles.emailText} style={{ fontFamily: "inherit" }}>{phoneNumber}</span>
                </div>
                <div className={styles.copyBtn} style={{ cursor: "default" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>

              <div className={styles.emailContainer} style={{ cursor: "default" }}>
                <div className={styles.emailContent}>
                  <span className={styles.emailLabel}>Location</span>
                  <span className={styles.emailText} style={{ fontFamily: "inherit" }}>{location}</span>
                </div>
                <div className={styles.copyBtn} style={{ cursor: "default" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>

              <div className={styles.socialGrid}>
                <h4 className={styles.socialTitle}>Find me online</h4>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/Sparshtub" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/basedsparsh/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className={styles.formCol}>
            <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                />
                <label htmlFor="name" className={styles.label}>
                  Your Name
                </label>
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                />
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={5}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                />
                <label htmlFor="message" className={styles.label}>
                  Project Details
                </label>
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                {isSubmitting ? (
                  <span className={styles.loaderContainer}>
                    <span className={styles.loaderDot}></span>
                    <span className={styles.loaderDot}></span>
                    <span className={styles.loaderDot}></span>
                  </span>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Glow Toast Notification */}
      <div className={`${styles.toast} ${showToast ? styles.toastShow : ""}`}>
        <div className={styles.toastContent}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.toastSuccessIcon}>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 12 12 16 14"></polyline>
          </svg>
          <span className={styles.toastText}>{toastMessage}</span>
        </div>
      </div>
    </section>
  );
}
