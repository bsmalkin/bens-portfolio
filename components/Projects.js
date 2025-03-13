"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Quick Trader",
    description:
      "Coming Soon",
    image: "/image1.png",
    learnMoreLink: "#",
  },
  {
    title: "Project Two",
    description:
      "Coming Soon",
    image: "/image1.png",
    learnMoreLink: "#",
  },
  {
    title: "Project Three",
    description:
        "Coming Soon",
    image: "/image1.png",
    learnMoreLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <motion.h2
        style={styles.sectionHeading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
        <span style={styles.sectionHeadingUnderline}></span>
      </motion.h2>
      <div style={styles.projectContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={{
              ...styles.projectCard,
              marginLeft: index % 2 === 0 ? "0" : "20%",
              marginRight: index % 2 === 0 ? "20%" : "0",
              width: "80%",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div style={styles.imageWrapper}>
              <img src={project.image} alt={project.title} style={styles.projectImage} />
            </div>
            <div style={{ ...styles.projectInfo, textAlign: index % 2 === 0 ? "left" : "right" }}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              <div style={styles.buttonContainer}>
                <a href={project.learnMoreLink} style={styles.button}>Learn More</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

const styles = {
  section: {
    padding: "4rem 2rem",
    color: "#ffffff",
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
  projectContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3rem",
    marginTop: "2rem",
  },
  projectCard: {
    display: "flex",
    alignItems: "center",
    background: "#333",
    borderRadius: "12px",
    marginBottom: "20px",
    padding: "3rem",
    maxWidth: "1100px",
    width: "100%",
    gap: "2rem",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  imageWrapper: {
    flex: "1",
  },
  projectImage: {
    width: "100%",
    borderRadius: "8px",
  },
  projectInfo: {
    flex: "1",
  },
  projectTitle: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  projectDescription: {
    textAlign: "center",
    fontSize: "1.3rem",
    color: "#ccc",
    marginBottom: "1rem",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  button: {
    textDecoration: "none",
    color: "#fff",
    background: "#ff5a5f",
    padding: "1rem 2rem",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};
