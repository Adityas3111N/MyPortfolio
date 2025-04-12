// src/components/ResumeButton.jsx
import React from "react";
import { motion } from "framer-motion";

const ResumeButton = () => (
  <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300"
    >
      View Resume
    </a>
  </motion.div>
);

export default ResumeButton;
