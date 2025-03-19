"use client";

import { motion } from "framer-motion";

const EducationAndCertifications = () => {
  const data = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Arizona State University",
      duration: "2018 - 2022",
      description:
        "",
      logo: "/asu logo.jpeg",
      type: "Education",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services",
      duration: "Issued September 2024",
      description: "",
      logo: "/aws.jpg",
      type: "Certification",
    },
  ];

  return (
    <section id="education" style={styles.section}>
      <motion.h2
        style={styles.sectionHeading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education & Certifications
        <span style={styles.sectionHeadingUnderline}></span>
      </motion.h2>
      <motion.div style={styles.listContainer} initial="hidden" animate="visible" variants={containerVariants}>
        {data.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </motion.div>
    </section>
  );
};

const EducationCard = ({ item }) => (
  <motion.div style={styles.educationCard} whileHover={{ scale: 1.05 }} variants={cardVariants}>
    <div style={styles.educationHeader}>
      <div style={styles.logoWrapper}>
        <img src={item.logo} alt={`${item.institution} logo`} style={styles.educationLogo} />
      </div>
      <div>
        <h3 style={styles.educationTitle}>{item.title}</h3>
        <h2 style={styles.educationInstitution}>{item.institution}</h2>
        <span style={styles.educationDate}>{item.duration}</span>
      </div>
    </div>
    <p style={styles.educationDescription}>{item.description}</p>
  </motion.div>
);

export default EducationAndCertifications;

const styles = {
  section: {
    padding: "4rem 2rem",
    color: "#ffffff",
    textAlign: "center", // Centers text inside section
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
    textAlign: "center", // Center aligns text
  },
  sectionHeadingUnderline: {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: "15px",
    transform: "translateX(-45%)", // Centers the underline
    width: "100%",
    height: "8px",
    backgroundColor: "#ff5a5f",
    zIndex: 0,
  },
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", // Allows responsiveness
    gap: "2rem",
    maxWidth: "100%", // Controls max width
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
  },
  educationCard: {
    background: "#333",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: "100%",
  },
  educationHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1rem",
    textAlign: "left",
  },
  logoWrapper: {
    flexShrink: 0,
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
  },
  educationLogo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  educationTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0",
  },
  educationInstitution: {
    fontSize: "1.2rem",
    color: "#ddd",
  },
  educationDate: {
    fontSize: "1rem",
    color: "#bbb",
  },
  educationDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#ccc",
  },
};


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
