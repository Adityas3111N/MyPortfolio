import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";
import { toggleDarkModeClass } from "@/utils/theme";
import { Link } from "react-router-dom";  // Import the Link component

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const mobileMenuRef = useRef(null);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggler
  useEffect(() => {
    toggleDarkModeClass(darkMode);
  }, [darkMode]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* 🔵 Navbar Section */}
      <div className="bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md border-b border-neutral-200/30 dark:border-neutral-700/40 shadow-sm">
        <div className="px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center h-20">
          {/* ✍️ Logo */}
          <motion.div
            className="group cursor-pointer flex flex-col items-center relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/">  {/* Wrap the logo with Link */}
              <div className="relative">
                <img
                  src="/signature-light.svg"
                  alt="Aditya Singh Signature"
                  className="dark:hidden w-32 md:w-40 h-auto object-contain drop-shadow-md transition duration-300 group-hover:drop-shadow-[0_4px_10px_rgba(99,102,241,0.6)]"
                />
                <img
                  src="/signature-dark.svg"
                  alt="Aditya Singh Signature"
                  className="hidden dark:block w-32 md:w-40 h-auto object-contain drop-shadow-md transition duration-300 group-hover:drop-shadow-[0_4px_10px_rgba(99,102,241,0.6)]"
                />
                <span className="absolute mx-10 flex justify-center items-center text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 tracking-wider group-hover:text-blue-600 transition-all leading-tight">
                  Coffee<span className="text-pink-500"> &</span> Code
                </span>
              </div>
            </Link>
          </motion.div>

          {/* 💻 Desktop Nav */}
          <nav className="hidden md:flex">
            <NavLinks />
          </nav>

          {/* 🌗 Theme, Resume & CTA */}
          <div className="flex items-center gap-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <ResumeButton />
            <button
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition text-sm font-semibold hidden md:inline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Why I Build
            </button>
            <button
              className="md:hidden text-gray-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔵 Scroll Progress Bar */}
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      />

      {/* 📱 Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-20 right-0 w-64 h-[calc(100vh-5rem)] bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md z-40 shadow-lg md:hidden flex flex-col px-6 py-4 gap-6 text-gray-800 dark:text-gray-200"
        >
          <NavLinks isMobile onClick={() => setMobileMenuOpen(false)} />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <ResumeButton />
          <button
            className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition text-sm font-semibold"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
          >
            Why I Build
          </button>
          <motion.div
            className="mt-auto text-center text-sm text-neutral-500 dark:text-neutral-400 group relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/aditya-singh-0a7181349/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors animate-bounce"
            >
              ↓ Meet the builder
            </a>
            <span className="w-full mt-4 absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs italic text-neutral-400 dark:text-neutral-500">
              (Not just a dev — a curious human ✨)
            </span>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
