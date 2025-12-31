"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import saylaniPapaImage from "@/assets/saylani papa.png";
import quizapp from "@/assets/quiz app.png";
import ecommerce from "@/assets/ecommerce.png";
import saylaniMicrofinance from "@/assets/microfinance app.png";
import expenseTrackerImage from "@/assets/expenseTrackerImage.png";

const projectsData = [
  {
    title: "Food Delivery App",
    description:
      "Built a scalable food delivery platform using React.js and Node.js with real-time order tracking. Used Material-UI, MongoDB, and Cloudinary for data & media handling.",
    image: saylaniPapaImage,
    live: "https://saylani-papa.netlify.app/",
    github: "https://github.com/Shoukatrai/saylani-papa-frontend",
  },
  {
    title: "Quiz App With Firebase",
    description:
      "Interactive quiz app built with JavaScript, HTML, CSS, and Firebase for authentication and real-time data management.",
    image: quizapp,
    live: "https://quiz-quest-brown.vercel.app/",
    github: "https://github.com/Shoukatrai/quiz-app-with-firebase",
  },
  {
    title: "Ecommerce Plant Shopping",
    description:
      "Responsive e-commerce site for plant shopping built with React.js, featuring category filtering and a clean mobile-friendly design.",
    image: ecommerce,
    live: "https://shoukatrai.github.io/e-plantShopping/",
    github: "https://github.com/Shoukatrai/e-plantShopping",
  },
  {
    title: "Saylani Microfinance App",
    description:
      "Full-stack microfinance solution built with the MERN stack to manage loans, repayments, and user dashboards efficiently.",
    image: saylaniMicrofinance,
    live: "https://saylani-microfinance-app-six.vercel.app/",
    github: "https://github.com/Shoukatrai/saylani-microfinance-app",
  },
  {
    title: "MERN Stack Expense Tracker",
    description:
      "Full-stack expense management app built with the MERN stack, allowing users to track income and expenses, filter data, download Excel reports, and manage profile images efficiently.",
    image: expenseTrackerImage,
    live: "https://expense-tracker-frontend-green-seven.vercel.app/",
    github: "https://github.com/Shoukatrai/expense_tracker_backend",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-[#FACC15]">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1E293B] rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-[#334155] hover:border-[#FACC15]"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-[#FACC15] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#EAB308] transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-[#FACC15] text-[#FACC15] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FACC15] hover:text-black transition"
                  >
                    <FaGithub /> Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
