"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-[#FACC15] tracking-wide"
        >
          &lt;Shoukat<span className="text-white">Rai</span>/&gt;
        </Link>

        <ul className="hidden md:flex items-center space-x-8 text-[#f1f5f9] font-medium">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={path}
                className={`hover:text-[#FACC15] transition-colors ${
                  pathname === path ? "text-[#FACC15]" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-[#FACC15] text-[#0f172a] px-4 py-3 rounded-full font-semibold shadow-md hover:bg-[#eab308] transition"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#FACC15] cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-[#334155] px-4 py-6 text-center animate-fadeIn">
          <ul className="space-y-6 text-[#f1f5f9] font-medium">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-[#FACC15] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-linear-to-r from-[#FACC15] to-[#eab308] text-[#0f172a] px-4 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
