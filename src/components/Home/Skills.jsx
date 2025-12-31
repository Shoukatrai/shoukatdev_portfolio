"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";

const skillsData = [
  {
    category: "Frontend",
    icon: <FaReact className="text-[#61DBFB]" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-green-500" />,
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-yellow-500" />,
    skills: ["MongoDB", "Firebase", "Supabase"],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-[#FACC15]" />,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="relative py-20 bg-[#0f172a] text-[#f1f5f9] overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] opacity-90"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          My{" "}
          <span className="text-[#FACC15] relative">
            Skills
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#6366F1] rounded-full"></span>
          </span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skillsData.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1e293b] rounded-xl p-6 text-center border border-[#334155] hover:border-[#6366F1] shadow-[0_4px_15px_rgba(99,102,241,0.15)] hover:shadow-[0_6px_25px_rgba(250,204,21,0.2)] transition-all"
            >
              <div className="text-4xl mb-3 flex justify-center">
                {group.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#0f172a] text-[#FACC15] border border-[#6366F1] rounded-full text-sm font-medium shadow-sm hover:bg-[#FACC15] hover:text-[#0f172a] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
