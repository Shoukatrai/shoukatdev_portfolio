"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E1B4B] via-[#0F172A] to-[#1E1B4B] text-white py-10 shadow-inner border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <div className="text-lg font-bold flex items-center gap-1 mb-4">
            <span className="text-[#FACC15]">&lt;</span>
            <span className="text-white">Shoukat</span>
            <span className="text-[#FACC15]">Dev</span>
            <span className="text-[#FACC15]">/&gt;</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Crafting modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#FACC15]" />
              <Link href="mailto:raishoukat033@gmail.com">
                raishoukat033@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-[#FACC15]" />
              <Link href="tel:+923473127706">+92 347 3127706</Link>
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-[#FACC15]" />
              Karachi, Sindh, Pakistan
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Find Me Online</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "https://github.com/Shoukatrai", icon: <FaGithub /> },
              {
                href: "https://www.linkedin.com/in/shoukat-rai-750507245/",
                icon: <FaLinkedin />,
              },
              { href: "https://x.com/ShoukatRai4", icon: <FaTwitter /> },
              { href: "https://www.fiverr.com/s/R7XzDYL", icon: <SiFiverr /> },
              {
                href: "https://www.upwork.com/freelancers/yourusername",
                icon: <SiUpwork />,
              },
              {
                href: "https://www.freelancer.com/u/yourusername",
                icon: <SiFreelancer />,
              },
            ].map(({ href, icon }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-[#FACC15] transition-transform transform hover:scale-125"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shoukat Dev. All rights reserved.
      </div>
    </footer>
  );
}
