"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiMaterialdesign,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact />, level: 100 },
  { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 95 },
  { name: "Node.js", icon: <FaNodeJs />, level: 90 },
  { name: "Express.js", icon: <SiExpress />, level: 84 },
  { name: "MongoDB", icon: <SiMongodb />, level: 88 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 86 },
  { name: "Git & GitHub", icon: <FaGitAlt />, level: 90 },
  { name: "Firebase", icon: <SiFirebase />, level: 90 },
  { name: "Supabase", icon: <SiSupabase />, level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap />, level: 90 },
  { name: "Material UI", icon: <SiMaterialdesign />, level: 90 },
];

export default function SkillsPage() {
  return (
    <section
      className="py-20 px-6 md:px-16 bg-[#0F172A] text-white"
      id="skills"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Skills & <span className="text-[#FACC15]">Technologies</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1E293B] rounded-xl p-5 text-center border border-[#334155] hover:border-[#FACC15] shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl text-[#FACC15]">{skill.icon}</div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {skill.name}
              </h3>

              <div className="w-full bg-[#334155] rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 bg-[#FACC15] rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    transition: "width 0.8s ease",
                  }}
                />
              </div>

              <div className="mt-2 text-sm text-gray-300">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
