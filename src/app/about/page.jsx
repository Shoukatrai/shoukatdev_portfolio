"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaBriefcase,
  FaUserGraduate,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import profile from "@/assets/Profile picture (2).png";

export default function AboutPage() {
  const personalDetails = [
    {
      icon: <FaGlobe className="text-[#6366F1]" />,
      label: "Location",
      value: "Karachi, Sindh, Pakistan",
    },
    {
      icon: <FaEnvelope className="text-[#06B6D4]" />,
      label: "Email",
      value: "raishoukat033@gmail.com",
    },
    {
      icon: <FaPhone className="text-[#FACC15]" />,
      label: "Phone",
      value: "+92 347 3127706",
    },
    { icon: "🗣️", label: "Languages", value: "English, Urdu, Sindhi" },
    { icon: "💼", label: "Freelance Platforms", value: "Fiverr, Upwork" },
  ];

  const education = [
    {
      year: "2023 - Present",
      degree: "Bachelor of Science in Information Technology (3rd Year)",
      institution: "Sindh Madressatul Islam University, Karachi",
      description:
        "Focused on software development, database management, and system design.",
    },
    {
      year: "2024 - 2025",
      degree: "Diploma in Web and App Development",
      institution: "Saylani Mass IT Training",
      description:
        "Hands-on training in full-stack web and mobile app development using the MERN stack.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#0F172A] text-gray-200 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        About <span className="text-[#FACC15]">Me</span>
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        <Image
          src={profile}
          alt="Shoukat"
          width={240}
          height={240}
          className="rounded-full border-4 border-[#6366F1] shadow-lg object-cover"
        />

        <p className="text-base md:text-lg text-gray-300 max-w-xl text-center md:text-left">
          I’m <span className="text-[#FACC15] font-semibold">Shoukat</span>, a
          passionate
          <span className="text-[#6366F1] font-semibold">
            {" "}
            MERN Stack Developer
          </span>{" "}
          focused on building scalable and modern applications with clean design
          and efficient code.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-[#FACC15] mb-6">
            Personal Info
          </h2>
          <div className="grid gap-4">
            {personalDetails.map((detail, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#1E293B] p-4 rounded-lg shadow hover:shadow-[#6366F1]/30 transition"
              >
                <span className="text-2xl">{detail.icon}</span>
                <div>
                  <p className="font-semibold text-white">{detail.label}</p>
                  <p className="text-gray-400">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#FACC15] mb-6">Education</h2>
          <div className="relative border-l-4 border-[#6366F1] pl-6 space-y-10">
            {education.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 bg-[#0F172A] p-2 rounded-full shadow border border-[#6366F1]" />
                <h3 className="text-xl font-bold text-[#6366F1]">
                  {item.degree}
                </h3>
                <h4 className="text-lg font-semibold text-white">
                  {item.institution}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
