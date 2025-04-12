import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="w-full bg-gradient-to-br from-[#F7F8FA] to-[#EDEEF0] dark:from-gray-800 dark:to-gray-900 px-5 sm:px-8 md:px-16 py-24 text-center">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6"
                >
                    Hey, I'm Aditya — <br />
                    <span className="text-indigo-600 dark:text-indigo-400">Your Growth Partner</span>.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
                >
                    I’m not just a developer — I’m someone who understands that <strong>business gives business</strong>.
                    Over the past 3 years, I’ve collaborated with startups, agencies, and individuals to
                    deliver solutions that don’t just work but <span className="text-indigo-500 font-medium">bring measurable value</span>.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
                >
                    Whether it’s refining UX, building scalable backend systems, or crafting meaningful
                    interfaces — my focus always stays on what helps <span className="font-medium text-amber-500">you grow</span>.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed"
                >
                    If you're looking for a dev who thinks like a product owner, understands marketing hooks,
                    and respects your time and trust — we might just be the right fit.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Link
                        to="/contact"
                        className="mt-10 inline-block px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition duration-300"
                    >
                        Let’s Build Together
                    </Link>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
