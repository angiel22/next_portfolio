"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedProjectCard({ project }) {
  return (
    <motion.a
      href={`/projects/${project.slug}`}
      className="flex items-center gap-3 rounded-2xl mr-12 p-4 bg-zinc-600/30 ring-1 ring-transparent text-zinc-300 no-underline"
      initial={{ scale: 1, boxShadow: "inset 0 0 0 rgba(0,0,0,0)" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "inset 0 0 10px rgba(59,130,246,0.8)",
        ringWidth: 2,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-20 h-16">
        <Image src={project.image} alt={project.name} fill className="object-cover rounded" />
      </div>
      <span>{project.name}</span>
    </motion.a>
  );
}
