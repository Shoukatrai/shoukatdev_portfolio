"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_KEY
      );

      toast.success("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error("❌ Failed to send message: " + error.text);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center px-6 py-20"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-gray-100"
      >
        Contact{" "}
        <span className="text-[#6366F1] relative">
          Me
          <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FACC15] rounded-full"></span>
        </span>
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#1e293b]/80 backdrop-blur-xl shadow-xl rounded-2xl p-8 w-full max-w-lg border border-[#334155] hover:border-[#6366F1] transition"
      >
        <div className="mb-5">
          <label className="block text-gray-300 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg bg-[#0f172a] text-white border-[#334155] focus:ring-2 focus:ring-[#6366F1] outline-none transition-all"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-300 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg bg-[#0f172a] text-white border-[#334155] focus:ring-2 focus:ring-[#6366F1] outline-none transition-all"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-300 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border rounded-lg bg-[#0f172a] text-white border-[#334155] focus:ring-2 focus:ring-[#6366F1] outline-none transition-all"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6366F1] text-white py-3 rounded-lg font-medium hover:bg-[#4F46E5] transition-all shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-6 mt-12"
      >
        {[
          {
            href: "https://github.com/Shoukatrai",
            icon: <FaGithub />,
            color: "text-gray-400 hover:text-white",
          },
          {
            href: "https://www.linkedin.com/in/shoukat-rai-750507245/",
            icon: <FaLinkedin />,
            color: "text-blue-500 hover:text-blue-600",
          },
          {
            href: "https://x.com/ShoukatRai4",
            icon: <FaTwitter />,
            color: "text-sky-400 hover:text-sky-500",
          },
          {
            href: "mailto:raishoukat033@gmail.com",
            icon: <FaEnvelope />,
            color: "text-red-400 hover:text-red-600",
          },
        ].map(({ href, icon, color }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`text-2xl ${color} transition-transform transform hover:scale-110`}
          >
            {icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
