import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white font-sans"
        >
            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                {/* Left Text Section */}
                <div className="flex flex-col justify-center px-10 py-20 space-y-8 bg-white dark:bg-black">
                    <h1 className="text-4xl md:text-6xl font-black leading-tight relative">
                        A small-town kid, <br />
                        building <span className="text-pink-500">crazy real-world things</span>.
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                        From dusty villages to digital visions — I'm not just coding, I'm rewriting the script for millions who never saw the tech dream as theirs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition"
                        >
                            Say Hello
                        </Link>
                        <span className="text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                            Let’s create impact that echoes.
                        </span>
                    </div>

                </div>

                {/* Right Image Section */}
                <div className="relative bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                    <img
                        src="/dpp3.jpg"
                        alt="Aditya Singh"
                        className="w-full h-full object-cover md:rounded-l-[100px] shadow-2xl"
                    />

                    <div className="absolute bottom-8 right-8 text-sm text-right">
                        <p className="text-pink-700 font-medium">S.K.N, UP</p>
                        <p className="text-gray-200 italic">No Wi-Fi. Just willpower.</p>
                    </div>
                </div>
            </section>

            {/* Impact Statement Section */}
            <section className="bg-black text-white py-20 px-10 text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-black">
                    We help <span className="text-pink-500">students</span> turn potential into purpose.
                </h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-400">
                    My upcoming startup isn’t about creating “content.” It’s about creating <span className="font-bold text-pink-500">clarity</span> in a fogged-up world — by letting students see what life <span className="font-bold text-pink-500">could</span> look like.
                </p>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-10 md:px-32 bg-white dark:bg-black text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                    I’m not building features. <br /> I’m building <strong className="font-black text-pink-500">freedom</strong>.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Tech is just the tool. What I’m chasing is human transformation — through better systems, better stories, and belief that even a forgotten village can birth brilliance.
                </p>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center">
                <h2 className="text-3xl font-black mb-4">Want to collaborate?</h2>
                <p className="text-lg mb-8 max-w-xl mx-auto">
                    I’m looking for fellow rebels, thinkers, creators. If that’s you, let’s talk.
                </p>
                <Link
                    to="/contact"
                    className="mt-10 inline-block px-6 py-3 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-700 rounded-xl transition duration-300"
                >
                    Let’s Build Together
                </Link>

            </section>
        </motion.div>
    );
};

export default AboutPage;
