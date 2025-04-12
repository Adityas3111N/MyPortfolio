import React, { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

// Directly importing ProjectCard
import ProjectCard from "../../utils/ProjectCard.jsx";

const projects = [
  {
    thumbnail: "/youtube.png",
    title: "YouTube Clone",
    description:
      "A full-stack video sharing platform built with the MERN stack. Features include upload, likes, subscriptions, comments (with replies), playlists, search, and more.",
    liveLink: "https://youtube-clone-demo-link.com",
    repoLink: "https://github.com/Adityas3111N/Youtube-like",
  },
  {
    thumbnail: "/hall-of-thanks.png",
    title: "Hall of Thanks",
    description:
      "A digital gratitude journal where people can express heartfelt thanks and share personal stories — because appreciation matters.",
    liveLink: "",
    repoLink: "https://github.com/Adityas3111N/Hall-Of-Thanks",
  },
  {
    thumbnail: "/gurukulamweb.png",
    title: "Gurukulam",
    description:
      "A website for an inspiring initiative that educates 300+ students without charging a single penny. Built with purpose and passion.",
    liveLink: "https://gurukulam-five.vercel.app/",
    repoLink: "https://github.com/Adityas3111N/Gurukulam",
  },
];

const ProjectsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This will make sure the page is loaded correctly
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    // Render a loading spinner or any fallback UI until the content is ready
    return (
      <div className="text-center mt-16 text-gray-500 dark:text-gray-400">
        <p>Loading Projects...</p>
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="relative px-5 sm:px-6 md:px-10 lg:px-20 pt-16 pb-28 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white tracking-tight mb-4">
            My Recent <span className="text-[#6e07f3]">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each of these builds isn't just a project — it's a part of my story, my code, and my commitment to craft.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Want to dive deeper?{" "}
            <a
              href="https://github.com/Adityas3111N"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Explore my GitHub →
            </a>
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="opacity-0" // Ensures fade-in works smoothly
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Adityas3111N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 border border-[#6e07f3] text-[#6e07f3] dark:text-white dark:border-white rounded-full hover:bg-[#f5f0ff] dark:hover:bg-white/10 transition-all duration-200 font-medium"
          >
            <Github className="w-5 h-5" />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
