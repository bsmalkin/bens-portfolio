import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Full-screen Background with Floating Dots */}
      <div style={styles.background}>
          {/* Generate many small floating dots */}
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                top: `${Math.random() * 100}%`, // Random vertical position
                left: `${Math.random() * 100}%`, // Random horizontal position
                animationDelay: `${Math.random() * 10}s`, // Random delay for floating animation
              }}
            ></div>
          ))}
        </div>
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
            <a href="#education" style={styles.navLink}>Education</a>
          </li>
          <li style={styles.navItem}>
            <a href="#projects" style={styles.navLink}>Projects</a>
          </li>
        </ul>
      </nav>

      <div style={styles.container}>
        {/* Intro Section */}
        <section id="intro" style={styles.introSection}>
          <h1 style={styles.heading}>Hi, I'm Ben</h1>
          <p style={styles.text}>
            Software Engineer with experience in frontend, backend, distributed systems, and cloud. 
          </p>
        </section>

        {/* About Me Section */}
        <section id="about-me" style={styles.floatingSection}>
          <h2 style={styles.subheading}>About Me</h2>
          <p style={styles.text}>
            As a Software Engineer with a passion for creating secure, scalable, and efficient solutions, I thrive on tackling complex challenges through innovative software development. My experience spans distributed systems, algorithm implementation, and full-stack development, with a particular focus on data security and cloud architecture.
            Currently, at Iridium Communications, I contribute to cutting-edge satellite communication systems, delivering impactful solutions like Minimum Viable Products (MVPs) for mission-critical technologies. My work involves everything from backend logic in C/C++ to designing RESTful APIs that handle thousands of users seamlessly. I'm also skilled in leveraging AWS for scalable cloud services and integrating encryption frameworks to ensure top-tier data security.
            Beyond the technical, I bring leadership and organizational skills honed from running a small business, combining technical expertise with business insights to deliver meaningful results. Whether collaborating on Agile teams, optimizing DevOps pipelines, or architecting secure key management systems, I aim to build software that makes a difference.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" style={styles.floatingSection}>
          <h2 style={styles.subheading}>Experience</h2>
          <ul style={styles.list}>
            <li>
              <strong>Software Engineer</strong> at [Company] (2020 - Present)
            </li>
            <li>
              <strong>Junior Developer</strong> at [Company] (2018 - 2020)
            </li>
          </ul>
        </section>

        {/* Education Section */}
        <section id="education" style={styles.floatingSection}>
          <h2 style={styles.subheading}>Education</h2>
          <p style={styles.text}>
            B.S. in Computer Science & Cybersecurity, Arizona State University (ASU)
          </p>
          <h2 style={styles.subheading}>Awards</h2>
          <p style={styles.text}>
            Magna Cum Laude
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" style={styles.floatingSection}>
          <h2 style={styles.subheading}>Projects</h2>
          <div style={styles.projectsGrid}>
            {/* Project 1 */}
            <a
              href="https://your-project-link.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.projectCard}
            >
              <img
                src="/project1.jpg"
                alt="Project 1"
                style={styles.projectImage}
              />
              <h3 style={styles.projectTitle}>Project 1</h3>
            </a>
            {/* Project 2 */}
            <a
              href="https://your-project-link.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.projectCard}
            >
              <img
                src="/project2.jpg"
                alt="Project 2"
                style={styles.projectImage}
              />
              <h3 style={styles.projectTitle}>Project 2</h3>
            </a>
            {/* Add more projects as needed */}
          </div>
        </section>
      </div>
    </>
  );
}

const styles = {
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#2e2e2e", // Dark grey background
    zIndex: -1, // Make sure the background is behind the content
    overflow: "hidden", // Prevent dots from overflowing
  },
  dot: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#fff", // White dots
    opacity: 0.6, // Slight transparency for a subtle look
    width: "8px", // Small size for dots
    height: "8px", // Small size for dots
    animation: "floatDots 10s ease-in-out infinite", // Animation for floating effect
  },
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "transparent",
    zIndex: 1000,
    padding: "1rem 2rem",
    boxShadow: "none",
    transition: "background-color 0.3s ease",
  },
  navList: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 1rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: "#ff7e5f",
  },
  container: {
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    color: "#fff",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    minHeight: "100vh",
    padding: "0 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  introSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh", // Full screen height
    textAlign: "center",
    color: "#fff",
    background: "url('/background-image.jpg') center/cover no-repeat", // Background image
    padding: "0 2rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#fff",
  },
  text: {
    fontSize: "1.5rem",
    color: "#fff",
  },
  subheading: {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#ff7e5f",
    marginBottom: "1rem",
  },
  floatingSection: {
    background: "rgba(255, 255, 255, 0.1)", // Slight transparency
    backdropFilter: "blur(15px)", // Blurred effect for modern look
    padding: "2rem",
    borderRadius: "10px", // Rounded corners
    width: "90%",
    maxWidth: "800px",
    marginBottom: "2rem",
    color: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for floating effect
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem",
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  projectImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  projectTitle: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
    fontWeight: "600",
  },
  footer: {
    backgroundColor: "#0f2027",
    width: "100%",
    padding: "1rem 0",
    textAlign: "center",
    color: "#fff",
    position: "fixed",
    bottom: 0,
  },
  footerText: {
    fontSize: "1rem",
    color: "#fff",
  },
};

