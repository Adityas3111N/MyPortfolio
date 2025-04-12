import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-300 py-14 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Left: Emotional Message */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Let's build something unforgettable.
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether it's pixels or possibilities — I'm here to turn ideas into impact.
            Life's short, build cool stuff.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col gap-3 text-sm font-medium">
          <Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About Me</Link>
          <Link to="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          <Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Right: Social & Tagline */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-4">
            <a href="https://github.com/Adityas3111N" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-black dark:hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/aditya-singh-0a7181349/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-black dark:hover:text-white transition-colors" />
            </a>
            <a href="https://x.com/singhaditya4333" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-black dark:hover:text-white transition-colors" />
            </a>
          </div>
          <p className="text-xs italic text-gray-500 dark:text-gray-400 mt-2">
            Fuelled by caffeine & curiosity ☕
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-xs text-gray-400 dark:text-gray-600 tracking-wider">
        &copy; {new Date().getFullYear()} Aditya Singh — Made with code & a little magic ✨
      </div>
    </footer>
  );
};

export default Footer;
