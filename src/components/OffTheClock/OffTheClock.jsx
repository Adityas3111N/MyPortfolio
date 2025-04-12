import { motion } from "framer-motion";

const OffTheClockSection = () => {
  return (
    <section
      id="off-the-clock"
      className="relative px-5 sm:px-6 md:px-10 lg:px-20 pt-16 pb-28 bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-800 dark:text-white tracking-tight leading-tight">
            Off the Clock
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 font-light">
            This is the space where I’ll share what I do when I'm not coding—when I take a break from the screen and focus on other creative outlets. Stay tuned for some inspiring stuff.
          </p>
        </motion.div>

        {/* Creative Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 p-16 bg-gradient-to-br from-[#6e07f3] via-[#9c00ff] to-[#ec40ff] text-white rounded-xl shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-4xl font-semibold text-center mb-6">When I'm Not Coding...</h3>
          <p className="text-xl text-center leading-relaxed">
            I dive into new passions, challenge myself physically and mentally, explore the world around me, and find creative inspiration. This section will showcase the many things I do outside of my development work—from personal projects to mindfulness, hobbies, and adventures. It’s about finding balance and igniting creativity.
          </p>
        </motion.div>

        {/* Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center text-gray-500 dark:text-gray-400"
        >
          <p className="text-lg">
            I'm working on building out this section. Keep an eye out for updates—what's next might surprise you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OffTheClockSection;
