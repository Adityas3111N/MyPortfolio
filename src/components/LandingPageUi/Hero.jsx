import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col md:flex-row items-center justify-center px-5 sm:px-6 md:px-10 lg:px-20 pt-10 md:pt-20 pb-16 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-36 -left-32 w-[400px] h-[400px] bg-indigo-300 dark:bg-indigo-700 opacity-20 rounded-full blur-3xl animate-slow-pulse" />
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-purple-300 dark:bg-purple-800 opacity-25 rounded-full blur-2xl animate-spin-slower" />

      {/* Text Content */}
      <div className="z-10 w-full max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug tracking-tight text-slate-900 dark:text-white"
        >
          <span className="text-indigo-700 dark:text-indigo-400">A Dev Who Understands that</span><br />
          <span className="text-amber-500">Business gives Business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-4 text-base text-slate-600 dark:text-gray-300 max-w-sm sm:max-w-lg"
        >
          Being a dev,
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-3 text-base text-slate-600 dark:text-gray-300 max-w-sm sm:max-w-lg"
        >
          Bringing money to client is a necessity.
        </motion.p>



        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.1 }}
          className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-200"
          >
            View My Work
          </button>

          <Link
            to="/contact"
            className="text-indigo-600 dark:text-indigo-300 text-sm font-medium underline underline-offset-4 hover:text-purple-500 transition-colors text-center"
          >
            Let’s Collaborate →
            <span className="block text-xs italic text-neutral-400 dark:text-neutral-500">
              (Your growth partner, not just a dev)
            </span>
          </Link>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;