import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Fade-in effect delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2
          className={`text-4xl font-bold mb-6 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-lg text-gray-700 mb-4 transition-opacity duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Hello! I'm Akash R S, a Java Full Stack Developer based in Kerala, India.
          With a background in Mechanical Engineering, I have successfully transitioned into
          software development and specialize in building high-quality web applications
          using Java, Spring Boot, React.js, and MySQL.
        </p>
        <p
          className={`text-lg text-gray-700 mb-4 transition-opacity duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          I am passionate about solving complex problems, designing scalable systems, and
          optimizing web applications for performance. In my previous roles, I have worked
          on developing responsive web applications, implementing RESTful APIs, and ensuring
          data security. I constantly strive to learn new technologies to stay ahead in the
          rapidly evolving development landscape.
        </p>
        <p
          className={`text-lg text-gray-700 mb-4 transition-opacity duration-1000 delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          In addition to my technical skills, I believe in teamwork, effective communication,
          and continuous improvement. I am excited to contribute my expertise and collaborate
          with a dynamic team to deliver innovative solutions.
        </p>
        <p
          className={`text-lg text-gray-700 transition-opacity duration-1000 delay-1200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          When I'm not coding, I enjoy exploring new technologies, reading about industry
          trends, and engaging in problem-solving challenges. I am fluent in English, Hindi,
          and Malayalam, and I thrive in collaborative, diverse environments.
        </p>
      </div>
    </section>
  );
};

export default About;
