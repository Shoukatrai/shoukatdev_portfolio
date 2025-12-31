"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import saylaniPapaImage from "../../assets/saylani papa.png";
import quizApp from "../../assets/quiz app.png";
import ecommerce from "../../assets/ecommerce.png";

const projectsData = [
  {
    title: "Food Delivery App",
    description:
      "A scalable food delivery platform built with React.js and Node.js featuring real-time order tracking. Designed with Material-UI for an elegant UI and MongoDB + Cloudinary for backend and media handling.",
    image: saylaniPapaImage,
    link: "https://saylani-papa.netlify.app/",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
  },
  {
    title: "Quiz App With Firebase",
    description:
      "An interactive quiz app built with JavaScript, HTML, and CSS. Integrated Firebase Authentication for secure login and Realtime Database for score tracking, with responsive UI for all devices.",
    image: quizApp,
    link: "/projects",
    tech: ["JavaScript", "HTML", "CSS", "Firebase"],
  },
  {
    title: "E-commerce Plant Shopping",
    description:
      "A responsive e-commerce site for plant shopping built with React.js and CSS. Features category filters, product cards, and a modern, mobile-first UI for a smooth user experience.",
    image: ecommerce,
    link: "https://shoukatrai.github.io/e-plantShopping/",
    tech: ["React.js", "CSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0f172a] text-white px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#1e293b] via-[#0f172a] to-[#1e293b] opacity-90"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-center mb-14">
          My{" "}
          <span className="text-[#FACC15] relative">
            Projects
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#6366F1] rounded-full"></span>
          </span>
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
