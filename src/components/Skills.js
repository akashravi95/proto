import React, { useEffect, useState } from "react";
import { FaReact, FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaGit, FaAws } from "react-icons/fa";
import { SiSpringboot, SiAngular, SiMysql, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Fade-in effect delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-6">Skills</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {/* Frontend Skills */}
          <motion.div
            className="skill-category bg-white rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-center text-blue-600 mb-4 flex justify-center items-center">
              <FaReact className="mr-2 text-blue-500" /> Frontend Technologies
            </h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>HTML5 <FaHtml5 className="inline ml-2 text-orange-500" /></li>
              <li>CSS3 <FaCss3Alt className="inline ml-2 text-blue-500" /></li>
              <li>React.js <FaReact className="inline ml-2 text-blue-500" /></li>
              <li>Angular <SiAngular className="inline ml-2 text-red-600" /></li>
              <li>Bootstrap 5</li>
            </ul>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="skill-category bg-white rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-center text-green-600 mb-4 flex justify-center items-center">
              <SiSpringboot className="mr-2 text-green-500" /> Backend Technologies
            </h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>Spring Boot <SiSpringboot className="inline ml-2 text-green-500" /></li>
              <li>Java <FaJava className="inline ml-2 text-orange-600" /></li>
              <li>Hibernate</li>
              <li>Servlet</li>
              <li>JSP</li>
              <li>RESTful API</li>
              <li>Web Services</li>
            </ul>
          </motion.div>

          {/* Database Technologies */}
          <motion.div
            className="skill-category bg-white rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4 flex justify-center items-center">
              <FaDatabase className="mr-2 text-gray-600" /> Database Technologies
            </h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>MySQL <SiMysql className="inline ml-2 text-blue-600" /></li>
              <li>MongoDB <SiMongodb className="inline ml-2 text-green-500" /></li>
              <li>SQL</li>
              <li>Snowflake</li>
            </ul>
          </motion.div>

          {/* Markup Languages */}
          <motion.div
            className="skill-category bg-white rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-center text-orange-500 mb-4">
              Markup Languages
            </h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>HTML</li>
              <li>XML</li>
              <li>JSON</li>
            </ul>
          </motion.div>

          {/* Frameworks and Tools */}
          <motion.div
            className="skill-category bg-white rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-center text-black mb-4 flex justify-center items-center">
              <FaGit className="mr-2 text-black" /> Frameworks and Tools
            </h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>Git <FaGit className="inline ml-2 text-black" /></li>
              <li>GitHub</li>
              <li>Eclipse</li>
              <li>Visual Studio Code</li>
              <li>Chrome DevTools</li>
              <li>Apache Tomcat</li>
            </ul>
          </motion.div>

          {/* Testing */}
          <motion.div
            className="skill-category bg-white rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-center text-orange-500 mb-4 flex justify-center items-center">
              <FaAws className="mr-2 text-orange-500" /> Testing
            </h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>JUnit Testing</li>
              <li>Mockito Testing</li>
            </ul>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            className="skill-category bg-white rounded-lg shadow-xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-center text-purple-600 mb-4">
              Additional Skills
            </h3>
            <ul className="list-disc text-lg text-gray-800">
              <li>Strong problem-solving skills</li>
              <li>Teamwork and collaboration</li>
              <li>Excellent communication skills</li>
              <li>Adaptability to new technologies</li>
              <li>Self-motivated with excellent analytical skills</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
