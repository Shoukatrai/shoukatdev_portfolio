"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../assets/Profile picture (3)[1].png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-[#0f172a] text-[#f1f5f9] overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] opacity-90"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="shrink-0 relative hidden md:block"
        >
          <div className="absolute w-72 h-72 rounded-full bg-[#FACC15] blur-3xl opacity-10 animate-pulse"></div>
          <Image
            src={profile}
            alt="Shoukat Dev"
            className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#FACC15] shadow-[0_10px_30px_rgba(250,204,21,0.2)]"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-6">
            About{" "}
            <span className="text-[#FACC15] relative">
              Me
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#6366F1] rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Hello! I’m{" "}
            <span className="font-semibold text-[#FACC15]">Shoukat</span>, a
            passionate MERN Stack Developer with a love for crafting modern,
            scalable, and user-friendly web applications. I specialize in{" "}
            <span className="text-[#6366F1]">
              MongoDB, Express.js, React, and Node.js
            </span>
            .
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            Currently, I’m an undergraduate in my 3rd year pursuing a Bachelor
            of Science in Information Technology, which strengthens my
            foundation in both theory and practical application of modern
            technologies.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            I build scalable, maintainable, and high-performance web
            applications that deliver seamless user experiences and robust
            backend architecture. With a strong command of frontend and backend
            technologies, I transform complex requirements into elegant,
            efficient solutions.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            When I’m not coding, I explore new tech, contribute to open-source,
            and share my knowledge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
