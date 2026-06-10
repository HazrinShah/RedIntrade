"use client";

import { motion } from "framer-motion";

export default function ScrollRevealWrapper({ children, delay = 0, duration = 0.7, y = 32 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.4, 0, 0.2, 1], // Matches cubic-bezier(0.4, 0, 0.2, 1) in style.css
      }}
    >
      {children}
    </motion.div>
  );
}
