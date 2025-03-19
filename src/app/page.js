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
      <div className="container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul className="navList">
            <li className="navItem">
              <a href="#about-me" className="navLink">About Me</a>
            </li>
            <li className="navItem">
              <a href="#experience" className="navLink">Experience</a>
            </li>
            <li className="navItem">
              <a href="#projects" className="navLink">Projects</a>
            </li>
            <li className="navItem">
              <a href="#contact" className="navLink">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section id="intro" className="heroSection">
          <div className="heroOverlay"></div>
          <h1 className="heroHeading">Ben Malkin</h1>
          <p className="heroSubheading">Software & Cybersecurity Engineer</p>
          <div className="buttonContainer">
            <a href="#projects" className="ctaButton">View My Work</a>
            <a href="/resume/Ben_Malkin_Resume_SW_Main.pdf" download="Ben_Malkin_Resume" className="ctaButton">Resume/CV</a>
          </div>
        </section>

        {/* AboutMe Section */}
        <AboutMe />

        {/* WorkExperience Section */}
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
