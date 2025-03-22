"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "AI-Powered Portfolio Generator",
      description:
        "AI-powered personal portfolio generator that automates resume analysis and generates personalized websites with GPT-4, Next.js, and TailwindCSS.",
      image: "/blogo.jpg",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce platform with shopping cart, payment gateway integration, and admin dashboard using React, Node.js, and MongoDB.",
      image: "/blogo.jpg",
    },
    {
      title: "Crypto Trading Bot",
      description:
        "Automated crypto trading bot using Python, leveraging real-time market data, technical analysis, and Binance API for executing trades.",
      image: "/blogo.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center w-full px-4 py-16 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative inline-block text-5xl font-semibold mb-12 bg-[#333] text-white py-4 px-8 rounded-lg shadow-xl tracking-wide overflow-hidden"
      >
        My Projects
        <span className="absolute left-[8%] bottom-[10px] w-full h-2 bg-[#ff5a5f] z-0"></span>
      </motion.h2>

      <div className="w-full max-w-screen-lg flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center bg-[#1F1F1F] rounded-3xl shadow-2xl p-6 sm:p-8 gap-6 sm:gap-8 transition-transform duration-300 ${
              hoveredIndex === index
                ? "scale-105 shadow-[#ff7e5f]"
                : "hover:scale-102"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-xl object-cover shadow-md w-full h-auto"
              />
            </div>

            {/* Project Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#ff7e5f] mb-4">
                {project.title}
              </h3>
              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white mb-6">
                {project.description}
              </p>
              <button className="bg-[#ff5a5f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff7e5f] transition-colors duration-300">
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
