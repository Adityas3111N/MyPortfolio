import React from 'react';
import { FiCoffee } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectCTA = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            Let's create something <span className="text-blue-400">meaningful</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I'll bring the expertise. You bring the vision. 
            <span className="block mt-2 text-blue-300/90 display-flex items-center justify-center">
              <FiCoffee className="mx-2" /> First round of coffee is on me.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xs sm:max-w-md mx-auto">
          <Link 
            to="/contact"
            className="bg-transparent border border-blue-400/30 hover:border-blue-400/60 text-blue-400 hover:text-white font-light py-3 px-6 rounded-sm transition-all duration-300 group"
          >
            <span className="flex items-center justify-center gap-1">
              Begin project
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </span>
          </Link>

          <Link 
            to="/contact"
            className="bg-blue-400/10 hover:bg-blue-400/20 text-blue-400/90 hover:text-blue-300 font-light py-3 px-6 rounded-sm transition-all duration-300"
          >
            Discuss over coffee
          </Link>
        </div>

        <p className="mt-16 text-xs text-gray-500 tracking-wider">
          AVAILABLE FOR SELECT PROJECTS • 2025
        </p>
      </div>
    </section>
  );
};

export default ProjectCTA;
