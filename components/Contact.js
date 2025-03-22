"use client";

import { motion } from "framer-motion";
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xaneykbo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(e.target),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.errors?.[0]?.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      setError('There was an error submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <motion.h2
        style={styles.sectionHeading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
        <span style={styles.sectionHeadingUnderline}></span>
      </motion.h2>

      {submitted ? (
        <p style={styles.successMessage}>
          ✅ Thank you for reaching out! I'll get back to you soon.
        </p>
      ) : (
        <>
          <p style={styles.contactText}>
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form style={styles.contactForm} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={styles.input}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={styles.input}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                style={styles.textarea}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" style={styles.ctaButton} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {error && <p style={styles.errorText}>{error}</p>}
          </form>
        </>
      )}

      <div style={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/ben-malkin-562bba106/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <img src="/linkedin-tile.svg" alt="LinkedIn" style={styles.icon} />
        </a>

        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <img src="/github-tile.svg" alt="GitHub" style={styles.icon} />
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    textAlign: "center",
  },
  sectionHeading: {
    fontSize: "3rem",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "600",
    marginBottom: "3rem",
    color: "#fff",
    position: "relative",
    display: "inline-block",
    background: "#333", // Dark background box
    padding: "1rem 2rem",
    borderRadius: "10px",
    letterSpacing: "1px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  },
  sectionHeadingUnderline: {
    content: '""',
    position: "absolute",
    left: "8%", // Start a little in from the left
    bottom: "15px", // Positioned inside the box
    width: "100%", // Underline spans most of the text
    height: "8px", // Thickness of the underline
    backgroundColor: "#ff5a5f", // Red underline
    zIndex: 0, // Behind the text but inside the box
  },
  contactText: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#FFFFFF",
  },
  contactForm: {
    maxWidth: "600px",
    margin: "0 auto 2rem",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    color: "#000",
  },
  textarea: {
    width: "100%",
    padding: "0.8rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    height: "150px",
    resize: "none",
    color: "#000",
  },
  ctaButton: {
    backgroundColor: "#ff7e5f",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "600",
    boxShadow: "0px 4px 8px rgba(255, 126, 95, 0.5)",
    transition: "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
    cursor: "pointer",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  iconLink: {
    display: "inline-block",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
  successMessage: {
    fontSize: "1.5rem",
    color: "#00ff88",
    marginBottom: "2rem",
  },
  errorText: {
    color: "#ff4d4d",
    marginTop: "1rem",
  },
};
