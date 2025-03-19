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
    { src: "/tensorflow-icon.svg", alt: "TensorFlow" },
    { src: "/terraformio-icon.svg", alt: "Terraform" },
  ];

  return (
    <section
      id="about-me"
      className="flex flex-col justify-center items-center w-full text-white px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative inline-block text-5xl font-semibold mb-12 bg-[#333] text-white py-4 px-8 rounded-lg shadow-xl tracking-wide overflow-hidden"
      >
        About Me
        <span className="absolute left-[8%] bottom-[15px] w-full h-2 bg-[#ff5a5f] z-0"></span>
      </motion.h2>

      <div className="bg-[#1F1F1F] rounded-2xl shadow-2xl p-16 w-full max-w-[50%]">
        <div className="flex flex-col justify-center items-center w-full gap-8">
          {/* About Me Text Section */}
          <div className="w-full pr-8 max-w-full">
            <h3 className="text-2xl text-[#ff7e5f] font-light mt-6 mb-2">
              Intro
            </h3>
            <p className="text-white text-lg leading-8">
              Hi, I'm Ben, a results-driven Software Engineer with a passion
              for crafting innovative software solutions that push the
              boundaries of technology. With expertise in distributed systems,
              algorithm design, and full-stack development, I thrive on solving
              complex problems and building impactful applications. My unique
              combination of technical skills and business acumen sets me apart
              as an engineer who understands not only how to develop great
              software, but also how to align it with the broader business goals
              of an organization.
              <br />
              <br />
              In my current role as a Software Engineer II at Iridium, I
              engineer backend services, client-server interfaces, and data
              processing pipelines for a next-gen SATCOM system, directly
              contributing to securing $150M+ in government contracts. I’ve
              designed and implemented high-performance, scalable RESTful APIs
              for mission control systems, integrating cryptographic
              authentication to support up to 10,000 users. I also developed
              Python-based analytics tools that optimized satellite beam
              resource allocation, improving bandwidth efficiency by ~25% and
              reducing operational costs.
              <br />
              <br />
              Additionally, I led DevOps automation efforts using Docker, GitLab
              Runner, and Ansible, reducing deployment times by ~40% and
              enhancing CI/CD pipelines. The project I worked on ran like a
              startup, giving me hands-on experience in dynamic environments,
              where adaptability and fast-paced execution were crucial for
              success. Alongside my technical role, I ran a business for five
              years, which provided me with valuable insights into business
              strategy, client relations, and operational efficiency.
            </p>

            <h3 className="text-2xl text-[#ff7e5f] font-light mt-6 mb-2">
              Interests
            </h3>
            <p className="text-white text-lg leading-8">
              I'm passionate about software architecture, cloud computing, and
              AI/ML, and I love staying up-to-date with the latest tech trends.
              Outside of work, fitness is a big part of my life—I'm into
              calisthenics, weightlifting, and endurance training. I also play
              guitar and enjoy getting creative with photography and video,
              something I did professionally for five years. Art galleries are
              another passion of mine, and I love soaking in the creativity of
              the world around me.
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full max-w-[1000px] py-8 text-center">
            <h3 className="text-3xl font-semibold text-white mb-8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 justify-items-center mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg w-[120px] h-[120px] bg-[#1A1A1A] cursor-pointer transition-all duration-300 ease-in-out ${
                    hoveredIndex === index
                      ? "scale-110 rotate-[3deg] shadow-[0_0_20px_rgba(255,126,95,0.8)]"
                      : "shadow-[0_0_10px_rgba(255,126,95,0.5)]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={150}
                    height={150}
                    className="max-w-full max-h-full object-contain rounded"
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
