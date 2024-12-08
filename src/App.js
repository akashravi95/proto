import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy Loading Components
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
