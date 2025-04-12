import { useState } from "react";
import TestimonialNote from "../../utils/Testimonialnote";

const testimonials = [
  {
    message:
      "Adi's a clear communicator with the tenacity and confidence to really dig in to tricky scenarios and the collaborative friction that's needed to produce excellent work.",
    name: "Alvin Engler",
    title: "CEO, West Third Enterprises, Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    message:
      "One of the best creative minds I’ve worked with. The kind of guy who makes the impossible feel easy and inspires everyone around him.",
    name: "Sarah Clarkson",
    title: "Design Lead, Horizon Studio",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 bg-white dark:bg-[#0d0d0d] text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a23] dark:text-white mb-4">
        Testimonials
      </h2>
      <p className="text-md sm:text-lg text-[#0a0a23]/70 dark:text-gray-400 mb-12">
        People I've worked with have said some nice things...
      </p>

      <div className="transition-all duration-500 ease-in-out">
        <TestimonialNote {...testimonials[current]} />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-[#6e07f3]"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
