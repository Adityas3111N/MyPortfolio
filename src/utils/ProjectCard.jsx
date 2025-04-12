import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ thumbnail, title, description, liveLink, repoLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="block sm:cursor-default"
    >
      {/* Mobile: whole card is clickable */}
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block sm:hidden"
      >
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg"
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
      </a>

      {/* Desktop: hover effect and buttons */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-full rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg group hidden sm:block"
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold text-white">{title}</h3>
            <p className="text-base text-gray-200 leading-relaxed">{description}</p>

            <div className="flex gap-3 pt-2">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-1.5 text-sm rounded-full border border-white text-white hover:bg-white hover:text-black transition"
                >
                  <ExternalLink size={16} /> Live Site
                </a>
              )}
              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-1.5 text-sm rounded-full border border-white text-white hover:bg-white hover:text-black transition"
                >
                  <Github size={16} /> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
