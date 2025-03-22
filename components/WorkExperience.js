"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const WorkExperience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      role: "Software Engineer",
      company: "Iridium Communications",
      duration: "April 2023 - Present",
      description:
        "I played a key role in the development of a next-generation SATCOM system, with a focus on developing client-server systems on the gateway side. My responsibilities included designing, developing, and optimizing client/server systems using RESTful APIs, handling data processing, and implementing algorithms. I also contributed to maturing our software development practices by transitioning from a startup-like environment to a more structured team, implementing CI/CD pipelines to improve efficiency. Additionally, I facilitated the integration of our AWS-based applications with on-premises components, ensuring smooth and reliable connectivity.",
      logo: "/iridiumlogo.jpeg",
    },
    {
      role: "Software Intern",
      company: "Arizona State University",
      duration: "May 2022 - December 2022",
      description:
        "Developed a peer-reviewed research search engine as a full-stack proof-of-concept application using Node.js, Express.js, and React for a PhD professor. Integrated interactive data visualizations with D3.js to enhance UI/UX and real-time data interpretation. Collaborated in Agile/Scrum workflows to align development with research objectives. Designed and optimized database schemas to improve data retrieval speed and overall application performance.",
      logo: "/asu logo.jpeg",
    },
    {
      role: "Founder",
      company: "AE Media",
      duration: "August 2017 - December 2022",
      description:
        "Founded and operated a commercial drone services company as an FAA Part 107 licensed pilot. Managed operations, hired teams, and expanded service offerings. Delivered aerial photography, videography, and data collection for real estate, marketing, and commercial clients. Secured long-term contracts through client acquisition and negotiations, gaining valuable insight into running a business and business operations.",
      logo: "/ae.png",
    },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center w-full px-4 py-16 text-white"
  >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative inline-block text-5xl font-semibold mb-12 bg-[#333] text-white py-4 px-8 rounded-lg shadow-xl tracking-wide overflow-hidden z-1"
      >
      Work Experience
        <span className="absolute left-[6%] bottom-[7px] w-full h-2 bg-[#ff5a5f] z-0]"></span>
      </motion.h2>

      <div className="w-full max-w-[70%] flex flex-col gap-12">
        {experiences.map((experience, index) => (
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
            className={`relative flex items-center justify-start bg-[#1F1F1F] rounded-3xl shadow-2xl p-8 gap-8 transition-transform duration-300 ${
              hoveredIndex === index
                ? "scale-105 shadow-[#ff7e5f]"
                : "hover:scale-102"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Experience Logo */}
            <div className="absolute left-0 -ml-12 w-24 h-24 rounded-full overflow-hidden shadow-md">
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience Content */}
            <div className="flex flex-col justify-center items-start w-full max-w-[80%] md:w-4/5 bg-[#1F1F1F] rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-[#ff7e5f] mb-4">
                {experience.role}
              </h3>
              <p className="text-lg leading-8 text-white mb-6">
                {experience.company}
              </p>
              <span className="text-sm text-gray-400 mb-6">
                {experience.duration}
              </span>
              <p className="text-lg leading-8 text-white mb-6">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
