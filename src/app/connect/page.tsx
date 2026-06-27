"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

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

export default function Connect() {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const emailAddress = "basedsparshjain@gmail.com";
  const phoneNumber = "+91 62640-20272";

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

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required.";
      } else if (value.trim().length < 2) {
        error = "Name must be at least 2 characters.";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "message") {
      if (!value.trim()) {
        error = "Message cannot be empty.";
      } else if (value.trim().length < 10) {
        error = "Message must be at least 10 characters.";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error || undefined }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validate = (): boolean => {
    validateField("name", formData.name);
    validateField("email", formData.email);
    validateField("message", formData.message);
    
    const hasNameError = !formData.name.trim() || formData.name.trim().length < 2;
    const hasEmailError = !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const hasMessageError = !formData.message.trim() || formData.message.trim().length < 10;
    
    return !hasNameError && !hasEmailError && !hasMessageError;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        triggerToast(result.message || "Message submitted successfully!");
      } else {
        triggerToast(result.error || "Failed to submit message.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      triggerToast("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className="graph-sheet">
        <div className={styles.introSection}>
          
          {/* Header block */}
          <div className={styles.headerBlock}>
            <div className={styles.titleGroup}>
              <span className={styles.signature}>Let's Connect</span>
              <h1 className={styles.role}>Get In Touch</h1>
            </div>
            
            {/* Hand-drawn Mailbox Stamp Doodle */}
            <div className={styles.mailboxDoodle}>
              <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="20" width="40" height="28" rx="4" />
                <path d="M10 20l20 16 20-16" />
                <path d="M30 48v8M22 56h16" strokeWidth="1.5" />
                <path d="M42 12l4 8M38 10l8 10" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <div className={styles.sectionsGrid}>
            
            {/* Left Column: Direct Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Direct Contact</h3>
                <p className={styles.infoDesc}>
                  Feel free to copy my email or reach out on my phone. I typically reply within 24 hours.
                </p>

                {/* Email container with Copy option */}
                <div className={styles.detailContainer} onClick={handleCopyEmail}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.detailIcon}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Email Address</span>
                    <span className={styles.detailText}>{emailAddress}</span>
                  </div>
                  <button className={styles.copyBtn} aria-label="Copy Email Address">
                    {isCopied ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.copyBtnIcon}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.copyBtnIcon}>
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Phone container */}
                <div className={styles.detailContainer} style={{ cursor: "default" }}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.detailIcon}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Phone Number</span>
                    <span className={styles.detailText}>{phoneNumber}</span>
                  </div>
                </div>



                {/* Online Profiles */}
                <div className={styles.socialGrid}>
                  <h4 className={styles.socialTitle}>Find me online</h4>
                  <div className={styles.socialLinks}>
                    <a
                      href="https://linkedin.com/in/basedsparsh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Sparshtub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialIcon}>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Dynamic Form */}
            <div className={styles.formCol}>
              <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                    placeholder=" "
                    rows={6}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                  />
                  <label htmlFor="message" className={styles.label}>
                    Your Message
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
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" className={styles.sendIcon}>
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
      </div>

      {/* Floating Toast Notification */}
      <div className={`${styles.toast} ${showToast ? styles.toastShow : ""}`}>
        <div className={styles.toastContent}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#ff523b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.toastIcon}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 8 12 12 16 14" />
          </svg>
          <span className={styles.toastText}>{toastMessage}</span>
        </div>
      </div>
    </div>
  );
}
