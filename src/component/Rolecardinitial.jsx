import React from "react";
import { motion } from "framer-motion";

const Rolecardinitial = ({ title, setHovered, index }) => {
  return (
    <div className="scroll-animate">
    <motion.div
      className="rounded-lg border-2 border-white text-white bg-gray-800 shadow-lg text-center cursor-pointer 
        transition-all flex items-center justify-center w-40 h-20"
      onMouseEnter={() => setHovered(title)}
      // initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -150 : 150 }}
      // whileInView={{ opacity: 1, scale: 1, x: 0 }}
      // animate={{ opacity: 1, scale: 1, x: 0 }}
      // transition={{ duration: 0.3, ease: "easeOut" }}
      // viewport={{ once: true }}  
      // exit={false} 
    >
      <h2 className="text-xl font-bold">{title}</h2>
    </motion.div>
    </div>
  );
};

export default Rolecardinitial;