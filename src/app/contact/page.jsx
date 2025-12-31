"use client";

import { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toastAlert } from "@/utils/toastAlert";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91v6wak", 
        "template_2bt3xa3",
        form.current,
        "KtQRmbmXN89OsTyle"
      )
      .then(
        () => {
          toastAlert({
            type: "success",
            message: "Message sent successfully!",
          });
          form.current.reset();
        },
        (error) => {
          toastAlert({
            type: "error",
            message: "Failed to send message: " + error.text,
          });
        }
      );
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-[#0F172A] text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact <span className="text-[#FACC15]">Me</span>
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-[#1E293B] p-4 rounded-lg border border-[#334155] hover:border-[#FACC15] transition">
            <FaEnvelope className="text-[#FACC15] text-2xl" />
            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-gray-400">raishoukat033@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1E293B] p-4 rounded-lg border border-[#334155] hover:border-[#FACC15] transition">
            <FaPhone className="text-[#06B6D4] text-2xl" />
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p className="text-gray-400">+92 347 3127706</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1E293B] p-4 rounded-lg border border-[#334155] hover:border-[#FACC15] transition">
            <FaMapMarkerAlt className="text-[#FACC15] text-2xl" />
            <div>
              <p className="font-semibold text-white">Address</p>
              <p className="text-gray-400">Karachi, Sindh, Pakistan</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1E293B] p-4 rounded-lg border border-[#334155] hover:border-[#FACC15] transition">
            <FaGlobe className="text-[#6366F1] text-2xl" />
            <div>
              <p className="font-semibold text-white">Freelance Platforms</p>
              <p className="text-gray-400">Fiverr, Upwork</p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#1E293B] p-6 rounded-lg border border-[#334155] hover:border-[#FACC15] shadow space-y-4 transition"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 bg-transparent border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 bg-transparent border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-transparent border border-[#334155] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#6366F1] to-[#06B6D4] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
