"use client";

import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton({href="../"}) {
  return (
    <motion.a
      href={href}
      className={`flex mb-4`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: -12 }
        }}
        transition={{ duration: 0.27, ease: "easeOut" }}
      >
        <IoIosArrowBack size={24} />
      </motion.span>
      <span>Back to Main Page</span>
    </motion.a>
  );
}