"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaPlug } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Full-Stack Web Development",
    description:
      "I build robust, scalable, and high-performance web applications using the MERN stack and modern web technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Ensuring seamless performance and visuals across all devices — from desktop to mobile — with pixel-perfect UI.",
  },
  {
    icon: <FaPlug />,
    title: "API Development & Integration",
    description:
      "Creating custom REST APIs and integrating third-party services to enhance functionality and connectivity.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Backend Services",
    description:
      "Integrating cloud platforms like Firebase, Supabase, and AWS to power modern, data-driven applications.",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-[#0f172a] text-[#f1f5f9] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] opacity-90"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          My{" "}
          <span className="text-[#FACC15] relative">
            Services
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#6366F1] rounded-full"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-[#1e293b] rounded-xl p-6 text-center border border-[#334155] hover:border-[#6366F1] shadow-[0_4px_15px_rgba(99,102,241,0.15)] hover:shadow-[0_6px_25px_rgba(250,204,21,0.2)] transition-all"
            >
              <div className="text-4xl text-[#FACC15] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
