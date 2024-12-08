import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Carousel settings
  const settings = {
    dots: true, // Display navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    fade: true, // Fade transition between slides
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between transitions (in milliseconds)
  };

  return (
    <motion.section
      id="home"
      className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-lg">
        <Slider {...settings}>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio!</h1>
            <p className="text-lg md:text-2xl">Building solutions with creativity and technology.</p>
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Innovating for the Future</h1>
            <p className="text-lg md:text-2xl">Transforming ideas into reality.</p>
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Let's Build Together</h1>
            <p className="text-lg md:text-2xl">Collaborating to create impactful solutions.</p>
          </div>
        </Slider>
      </div>
    </motion.section>
  );
};

export default Home;
