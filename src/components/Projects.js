import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaDumbbell, FaShoppingCart, FaHome } from "react-icons/fa";

const projects = [
  {
    title: "Private Resort Management",
    description: "A booking platform with Spring Boot and React.",
    link: "#",
    icon: <FaHome />,
  },
  {
    title: "Truf Management",
    description: "A management system for truf processing using React and Spring Boot.",
    link: "#",
    icon: <FaBuilding />,
  },
  {
    title: "Gym Training",
    description: "A gym management app with personalized workout plans, built using React and Spring Boot.",
    link: "#",
    icon: <FaDumbbell />,
  },
  {
    title: "E-commerce",
    description: "A fully functional e-commerce platform using React, Spring Boot, and MySQL.",
    link: "#",
    icon: <FaShoppingCart />,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Fade-in effect delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3 text-blue-500">{project.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline transition-colors duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
