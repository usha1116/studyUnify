import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Rolecardhover = ({ title, attributes, setHovered, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setHovered(null);
      }
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setHovered]);

  return (
    <motion.div
      ref={cardRef}
      className="relative p-6 rounded-lg border-2 border-white text-white bg-gray-800 shadow-lg text-center cursor-pointer 
       transition-all flex items-center justify-center w-40 h-20"
      // initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -150 : 150 }}
      // whileInView={{ opacity: 1, scale: 1, x: 0 }}
      // transition={{ duration: 0.3, ease: "easeOut" }}
      // viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-2xl font-bold">{title}</h2>

      <AnimatePresence>
        <motion.div className="absolute w-60 h-60 flex items-center justify-center">
          {attributes.map((attr, attrIndex) => {
            const angle = (attrIndex / attributes.length) * 2 * Math.PI;
            const radius = 140;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={attrIndex}
                className="absolute bg-gray-700 p-2 rounded-full text-sm font-semibold text-white"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: attrIndex * 0.1 }}
              >
                {attr}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Rolecardhover;
