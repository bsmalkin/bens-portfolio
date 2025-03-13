"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { src: "/java-vertical.svg", alt: "Java" },
    { src: "/javascript-icon.svg", alt: "JavaScript" },
    { src: "/python-vertical.svg", alt: "Python" },
    { src: "/nextjs-icon.svg", alt: "Next.js" },
    { src: "/nodejs-horizontal.svg", alt: "Node.js" },
    { src: "/reactjs-icon.svg", alt: "React" },
    { src: "/c++.svg", alt: "C++" },
    { src: "/aws-2.svg", alt: "AWS" },
    { src: "/docker-official.svg", alt: "Docker" },
    { src: "/mysql.svg", alt: "MySQL" },
    { src: "/postgresql-vertical.svg", alt: "PostgreSQL" },
    { src: "/html5.svg", alt: "HTML5" },
  ];

  return (
    <section id="about-me" style={styles.aboutMeSection}>
      <motion.h2
        style={styles.sectionHeading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
        <span style={styles.sectionHeadingUnderline}></span>
      </motion.h2>
      <div style={styles.container}>
        <div style={styles.aboutMeContent}>
          {/* About Me Text Section */}
          <div style={styles.aboutMeText}>
            <h3 style={styles.subHeading}>Intro</h3>
            <p style={styles.sectionText}>
              Hi, I'm Ben, a results-driven Software Engineer with a passion for crafting innovative
              software solutions that push the boundaries of technology. With expertise in distributed
              systems, algorithm design, and full-stack development, I thrive on solving complex problems
              and building impactful applications. My unique combination of technical skills and business
              acumen sets me apart as an engineer who understands not only how to develop great software,
              but also how to align it with the broader business goals of an organization.
              <br />
              <br />
              In my current role as a Software Engineer II at Iridium, I engineer backend services, client-server interfaces,
              and data processing pipelines for a next-gen SATCOM system, directly contributing to securing $150M+
              in government contracts. I’ve designed and implemented high-performance, scalable RESTful APIs for mission
              control systems, integrating cryptographic authentication to support up to 10,000 users. I also developed
              Python-based analytics tools that optimized satellite beam resource allocation, improving bandwidth
              efficiency by ~25% and reducing operational costs.
              <br />
              <br />
              Additionally, I led DevOps automation efforts using Docker, GitLab Runner, and Ansible, reducing deployment times by ~40% and enhancing CI/CD pipelines. The project I worked on ran like a startup, giving me hands-on experience in dynamic environments,
              where adaptability and fast-paced execution were crucial for success. Alongside my technical role, I ran a
              business for five years, which provided me with valuable insights into business strategy, client relations, and
              operational efficiency.
            </p>

            <h3 style={styles.subHeading}>Interests</h3>
            <p style={styles.sectionText}>
              I'm passionate about software architecture, cloud computing, and AI/ML, and I love staying up-to-date with the
              latest tech trends. Outside of work, fitness is a big part of my life—I'm into calisthenics, weightlifting, and
              endurance training. I also play guitar and enjoy getting creative with photography and video, something I did
              professionally for five years. Art galleries are another passion of mine, and I love soaking in the creativity of the
              world around me.
            </p>
          </div>

          {/* Skills Section */}
          <div style={styles.skillsSection}>
            <h3 style={styles.skillsHeading}>Technical Skills</h3>
            <div style={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={
                    hoveredIndex === index
                      ? { ...styles.skillCard, ...styles.skillCardHover }
                      : styles.skillCard
                  }
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={skill.src}
                    style={styles.skillCardImg}
                    alt={skill.alt}
                    width={150}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: "#1F1F1F", // Slightly lighter dark background
    borderRadius: "20px",
    padding: "4rem 3rem",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
    width: "100%",
    maxWidth: "50%",
  },
  sectionHeading: {
    fontSize: "3rem",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "600",
    marginBottom: "3rem",
    color: "#fff",
    position: "relative",
    display: "inline-block",
    background: "#333",
    padding: "1rem 2rem",
    borderRadius: "10px",
    letterSpacing: "1px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
  },
  sectionHeadingUnderline: {
    content: '""',
    position: "absolute",
    left: "8%",
    bottom: "15px",
    width: "100%",
    height: "8px",
    backgroundColor: "#ff5a5f",
    zIndex: 0,
  },
  subHeading: {
    fontSize: "2rem",
    fontWeight: "300",
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
    color: "#ff7e5f",
  },
  sectionText: {
    fontSize: "1.2rem",
    color: "#fff",
    lineHeight: "1.8",
  },
  aboutMeSection: {
    padding: "4rem 2rem",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  aboutMeContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: "2rem",
  },
  aboutMeText: {
    maxWidth: "100%",
    paddingRight: "2rem",
  },
  skillsSection: {
    width: "100%",
    maxWidth: "1000px",
    padding: "2rem 0",
    textAlign: "center",
  },
  skillsHeading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "2rem",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "1rem",
    justifyItems: "center",
    margin: "0 auto",
  },
  skillCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(255, 126, 95, 0.5)",
    textAlign: "center",
    width: "120px",
    background: "#1A1A1A",
    height: "120px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  skillCardHover: {
    transform: "scale(1.1) rotate(3deg)",
    boxShadow: "0 0 20px rgba(255, 126, 95, 0.8)",
  },
  skillCardImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "4px",
  },
};
