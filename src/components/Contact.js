import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";

const Contact = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to handle the click event
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Reach out to me through any of the following ways!
        </motion.p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <motion.div
            className="flex items-center bg-white shadow-md rounded-lg p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaEnvelope className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3
                className="text-xl font-semibold cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleLinkClick("mailto:akashravi11@gmail.com")}
              >
                Email
              </h3>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-center bg-white shadow-md rounded-lg p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaPhone className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+91 7012333804</p>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="flex items-center bg-white shadow-md rounded-lg p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaLinkedin className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3
                className="text-xl font-semibold cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleLinkClick("https://www.linkedin.com/in/akash-r-s-a6a220130/")}
              >
                LinkedIn
              </h3>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="flex items-center bg-white shadow-md rounded-lg p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaGithub className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3
                className="text-xl font-semibold cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleLinkClick("https://github.com/akashravi95")}
              >
                GitHub
              </h3>
            </div>
          </motion.div>

          {/* Facebook */}
          <motion.div
            className="flex items-center bg-white shadow-md rounded-lg p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FaFacebook className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3
                className="text-xl font-semibold cursor-pointer text-blue-500 hover:underline"
                onClick={() => handleLinkClick("https://www.facebook.com/akash.ravi.52/")}
              >
                Facebook
              </h3>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center bg-white shadow-md rounded-lg p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-600">Kerala, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
