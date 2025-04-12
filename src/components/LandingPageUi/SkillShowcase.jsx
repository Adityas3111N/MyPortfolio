import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ServerCog,
  BrainCog,
} from "lucide-react";

const skills = [
  {
    icon: <LayoutDashboard className="w-10 h-10 text-green-500" />,
    title: "Frontend Developer",
    description:
      "I design interfaces that feel intuitive and human. Every element serves purpose, not noise.",
    highlights: {
      "Languages & Tools": [
        "HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS",
      ],
    },
  },
  {
    icon: <ServerCog className="w-10 h-10 text-indigo-500" />,
    title: "Backend Engineer",
    description:
      "I build scalable APIs with clarity and care — optimized for speed, security, and structure.",
    highlights: {
      "Tech Stack": [
        "Node.js", "Express", "MongoDB", "JWT", "Multer", "Cloudinary", "Mongoose",
      ],
    },
  },
  {
    icon: <BrainCog className="w-10 h-10 text-yellow-500" />,
    title: "Creative Thinker",
    description:
      "I solve problems with clarity and creativity. I adapt fast, learn faster, and execute even faster.",
    highlights: {
      "Strengths": [
        "Git & GitHub", "Rapid Learning", "User Flow Thinking", "Execution Mindset",
      ],
    },
  },
];

const SkillShowcase = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 sm:px-10 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Want to know more?
        </h2>
        <p className="text-md font-bold text-gray-600 dark:text-gray-300">
          Peek into my work & projects on{" "}
          <a
            href="https://github.com/Adityas3111N"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-200"
          >
            GitHub
          </a>
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {skills.map(({ icon, title, description, highlights }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            className="bg-gray-50 dark:bg-slate-800 rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            {Object.entries(highlights).map(([label, items]) => (
              <div key={label} className="mb-2">
                <h4 className="text-sm font-semibold text-purple-500 mb-1">{label}:</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-0.5">
                  {items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillShowcase;
