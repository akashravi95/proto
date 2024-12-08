import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-800 text-white text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/akash-r-s-a6a220130/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/akashravi95"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-500"
        >
          <FaGithub />
        </a>

        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/akash.ravi.52/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-600"
        >
          <FaFacebook />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://twitter.com/akashravi95"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>
      <p>&copy; 2024 Akash R S. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
