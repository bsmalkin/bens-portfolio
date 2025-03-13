import Image from 'next/image';
import Head from "next/head";
import FloatingPixels from "../../components/FloatingPixels";
import AboutMe from '../../components/AboutMe';
import EducationAndCertifications from '../../components/Education';
import WorkExperience from "../../components/WorkExperience";
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';


export default function Home() {
  return (
    <>
    {/* Background animation */}
    <FloatingPixels />
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/blogo.ico" />
      </Head>
      <div style={styles.container}>
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <a href="#about-me" style={styles.navLink}>About Me</a>
            </li>
            <li style={styles.navItem}>
              <a href="#experience" style={styles.navLink}>Experience</a>
            </li>
            <li style={styles.navItem}>
              <a href="#projects" style={styles.navLink}>Projects</a>
            </li>
            <li style={styles.navItem}>
              <a href="#contact" style={styles.navLink}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section id="intro" style={styles.heroSection}>
          <div style={styles.heroOverlay}></div> {/* Overlay to add depth */}
          <h1 style={styles.heroHeading}>Ben Malkin</h1>
          <p style={styles.heroSubheading}>
            Software & Cybersecurity Engineer
          </p>
          <div style={styles.buttonContainer}>
            <a href="#projects" style={styles.ctaButton}>View My Work</a>
            <a href="/resume/Ben_Malkin_Resume_SW_Main.pdf" download="Ben_Malkin_Resume" style={styles.ctaButton}>Resume/CV</a>
          </div>
        </section>



        {/* Insert AboutMe */}
        <AboutMe />

        {/* Insert WorkExperienceTimeline */}
        <WorkExperience />

        <EducationAndCertifications />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>
    </>
  );
}

const styles = {
  container: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#121212",
    zIndex: 1000,
    padding: "1rem 2rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
  },
  navItem: {
    margin: "0 1rem",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
  },
  heroSection: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "300",
    position: "relative", // Allow overlay to be on top
    backgroundSize: "200% 200%",
  },
  heroHeading: {
    fontSize: "5rem", // Larger to emphasize your name
    fontFamily: "'Roboto', sans-serif",
    marginBottom: "1rem",
    color: "#fff", // White text for contrast
    fontWeight: "600", // Bold for added emphasis
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Adds depth to the text
  },
  heroSubheading: {
    fontSize: "3rem",
    marginBottom: "2rem",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
    fontWeight: "400", // Lighter for the title
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)", // Adds depth to the text
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
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
  },
  ctaButtonHover: {
    backgroundColor: "#feb47b",
    boxShadow: "0px 8px 16px rgba(255, 126, 95, 0.7)",
    transform: "scale(1.05)", // Slightly enlarge on hover
  },
  section: {
    padding: "4rem 2rem",
    textAlign: "center",
  },
  sectionHeading: {
    fontSize: "4rem",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "400",
    marginBottom: "1rem",
    color: "#ffff",
  },
  sectionText: {
    fontSize: "1.2rem",
    color: "#ffff",
  }
};