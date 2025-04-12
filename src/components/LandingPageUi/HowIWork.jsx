import React from "react";
import { motion } from "framer-motion";
import { Ear, ZoomIn, TrendingUp } from "lucide-react";

// Animation Variants
const textContainer = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            duration: 0.6,
        },
    },
};

const textChild = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

const steps = [
    {
        icon: <Ear className="w-7 h-7" />,
        title: "Listening",
        desc: "By listening well, understanding gets better and it’s already half .... .",
    },
    {
        icon: <ZoomIn className="w-7 h-7" />,
        title: "Clarity",
        desc: "The clearer the problem, the easier it is to find a ........ .",
    },
    {
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Business Sense",
        desc: "Sending users to the right content in the right flow ....... conversions.",
    },
];

const Blueprint = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            id="blueprint"
            className="relative overflow-hidden bg-white dark:bg-black px-4 sm:px-6 md:px-10 py-20 text-slate-800 dark:text-gray-100"
        >
            {/* Background animation blobs */}
            <div className="absolute -top-36 -left-32 w-[300px] h-[300px] bg-indigo-300 dark:bg-indigo-700 opacity-10 rounded-full blur-2xl animate-slow-pulse" />
            <div className="absolute -bottom-24 -right-24 w-[250px] h-[250px] bg-purple-300 dark:bg-purple-800 opacity-10 rounded-full blur-2xl animate-spin-slower" />

            {/* Section Title with Staggered Text */}
            <motion.div
                variants={textContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-12"
            >
                <motion.h2
                    variants={textChild}
                    className="text-2xl sm:text-3xl font-bold tracking-tight"
                >
                    Build What’s Needed
                </motion.h2>

                <motion.p
                    variants={textChild}
                    className="mt-2 text-sm sm:text-base italic text-indigo-700 dark:text-indigo-400"
                >
                    “Good devs become great when they can sense what's needed.”
                </motion.p>
            </motion.div>

            {/* Step Cards */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto px-2 sm:px-0">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.15,
                            ease: "easeOut",
                        }}
                        whileHover={{ scale: 1.03 }}
                        className="group bg-gradient-to-br from-white to-slate-50 dark:from-neutral-900 dark:to-black p-5 rounded-xl border border-slate-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-indigo-600 dark:text-indigo-400">
                            {step.icon}
                        </div>
                        <h3 className="mt-4 text-base font-semibold">
                            {step.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {step.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Footer Line */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-16 text-center"
            >
                <p className="text-sm italic text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                    Your website must convert visitors into ...
                </p>
            </motion.div>
        </motion.section>
    );
};

export default Blueprint;
