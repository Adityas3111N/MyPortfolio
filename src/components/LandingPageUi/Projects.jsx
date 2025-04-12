import React from "react";
import { Github } from "lucide-react"; // Lucide GitHub icon
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-5 sm:px-6 md:px-10 lg:px-20 pt-10 pb-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">
          My Recent Works
        </h2>
        <p className="text-center font-medium text-gray-600 dark:text-gray-300 mb-10 text-sm md:text-base">
          These projects reflect my learning, my craft, and my heart. Curious to see more?{" "}
          <a
            href="https://github.com/Adityas3111N"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            Peek into my GitHub →
          </a>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Adityas3111N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 border border-[#6e07f3] text-[#6e07f3] rounded-full hover:bg-[#f5f0ff] transition-colors duration-200 font-medium text-base"
          >
            <Github className="w-5 h-5" />
            See more on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
