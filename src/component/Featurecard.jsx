import React from "react";
import { motion } from "framer-motion";

const Featurecard = ({ image, icon, title, description, index }) => {
  const isEven = index % 2 === 0; // Check if index is even for left/right animation

  return (
    <motion.div
      className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden w-full mb-5 max-w-sm mx-auto text-white"
      initial={{ opacity: 0, x: isEven ? -100 : 100 }} // Alternates left (-100) and right (+100)
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover mb-4" />
      )}
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <motion.span
            className="text-blue-400 text-2xl transition transform duration-700 hover:rotate-[360deg]"
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
          >
            {icon}
          </motion.span>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-gray-300 mt-2 text-left">{description}</p>
      </div>
    </motion.div>
  );
};

export default Featurecard;
