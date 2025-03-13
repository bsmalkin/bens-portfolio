"use client";

import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Iridium Communications",
      duration: "April 2023 - Present",
      description:
        "I played a key role in the development of a next-generation SATCOM system, with a focus on the gateway side. My responsibilities included designing, developing, and optimizing client/server systems using RESTful APIs, handling data processing, and implementing algorithms. I also contributed to maturing our software development practices by transitioning from a startup-like environment to a more structured team, implementing CI/CD pipelines to improve efficiency. Additionally, I facilitated the integration of our AWS-based applications with on-premises components, ensuring smooth and reliable connectivity.",
      logo: "/iridiumlogo.jpeg",
    },
    {
      role: "Software Intern",
      company: "Arizona State University",
      duration: "May 2022 - December 2022",
      description:
        "Built responsive websites, collaborated with cross-functional teams, and maintained legacy codebases.",
      logo: "/asu logo.jpeg",
    },
    {
      role: "President/Owner",
      company: "AE Media",
      duration: "2017 - 2022",
      description:
        "Gained hands-on experience with software development and assisted in QA processes.",
      logo: "/ae.png",
    },
  ];

  return (
    <section id="experience" style={styles.section}>
      <motion.h2
        style={styles.sectionHeading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        Work Experience
        <span style={styles.sectionHeadingUnderline}></span>
      </motion.h2>
      <motion.div
        style={styles.timelineContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            style={styles.timelineItem}
            variants={cardVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={styles.logoWrapper}>
              <img
                src={item.logo}
                alt={`${item.company} logo`}
                style={styles.companyLogo}
              />
            </div>
            <motion.div
              style={styles.experienceContent}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 style={styles.experienceTitle}>{item.role}</h3>
              <h2 style={styles.experienceCompany}>{item.company}</h2>
              <span style={styles.experienceDate}>{item.duration}</span>
              <p style={styles.experienceDescription}>{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;

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
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  timelineItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "65%",
    marginBottom: "2rem",
  },
  logoWrapper: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    overflow: "hidden",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  companyLogo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  experienceContent: {
    background: "#333",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    maxWidth: "80%",
    minWidth: "80%",
    textAlign: "left",
    margin: "0 20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  experienceTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  experienceCompany: {
    fontSize: "1.2rem",
    color: "#ddd",
    marginBottom: "0.5rem",
  },
  experienceDate: {
    fontSize: "1rem",
    color: "#bbb",
    marginBottom: "1rem",
    display: "block",
  },
  experienceDescription: {
    fontSize: "1rem",
    color: "#ccc",
    lineHeight: "1.6",
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
