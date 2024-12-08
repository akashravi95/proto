import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <span>My Portfolio</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center space-x-2 hover:text-gray-300">
              <FaUser />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="flex items-center space-x-2 hover:text-gray-300">
              <FaCode />
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex items-center space-x-2 hover:text-gray-300">
              <FaProjectDiagram />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center space-x-2 hover:text-gray-300">
              <FaEnvelope />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
