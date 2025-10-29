"use client";

import { motion } from "framer-motion";

export default function AnimatedLink({ href, className = "" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block text-zinc-300 underline ${className}`}
      whileHover={{
        scale: 1.1,
        color: "#3b82f6",
        textShadow: "0px 0px 8px #3b82f6",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5,
      }}
    >
      View project repository/live site
    </motion.a>
  );
}
