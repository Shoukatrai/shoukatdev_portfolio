"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import profilePic from "../../assets/Profile picture (2).png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-10 md:px-16 bg-[#0f172a] text-[#f1f5f9] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] opacity-90"></div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-[#FACC15]">
            <Typewriter
              options={{
                strings: ["Shoukat Rai"],
                autoStart: true,
                loop: true,
                delay: 100, 
              }}
            />
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-lg">
          Full-Stack Developer | MERN Stack Specialist | Building Scalable,
          Performant Web Applications
        </p>
        <p className="mt-4 text-sm text-gray-500 max-w-lg">
          Crafting modern, responsive, and secure web solutions with MongoDB,
          Express.js, React.js, and Node.js.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            className="bg-[#FACC15] text-[#0f172a] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#eab308] transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Shoukat_Rai_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="border-2 border-[#FACC15] text-[#FACC15] px-6 py-3 rounded-full font-semibold hover:bg-[#FACC15] hover:text-[#0f172a] transition"
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center md:justify-end w-full md:w-1/2 relative z-10"
      >
        <div className="absolute w-72 h-72 rounded-full bg-[#FACC15] blur-3xl opacity-10 animate-pulse"></div>
        <Image
          src={profilePic}
          alt="Profile"
          className="mt-10 w-64 h-64 md:w-100 md:h-100 rounded-full border-4 border-[#FACC15] object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
