"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, description, image, link, tech }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-[#1e293b] border border-[#334155] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
        <Image
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:opacity-90 transition"
        />
      </motion.div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#FACC15] mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#0f172a] text-[#FACC15] border border-[#6366F1] rounded-full text-xs font-medium shadow-sm hover:shadow-[0_0_10px_rgba(99,102,241,0.4)] transition"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-[#6366F1] text-white text-sm rounded-lg shadow hover:bg-[#4F46E5] hover:shadow-[0_0_10px_rgba(250,204,21,0.3)] transition"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
