import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { navItems } from "../../constants/constants.js";

const NavLinks = ({ isMobile = false, onClick }) => {
  return (
    <>
      {navItems.map((item) => {
        const isBeyondWork = item === "Off The Clock";

        const baseClasses =
          "relative mx-4 font-medium text-sm uppercase tracking-wide transition-all duration-200";
        const textColor = "text-gray-600 dark:text-gray-300";
        const hoverColor = isBeyondWork
          ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-pink-400 dark:to-yellow-400 hover:brightness-110"
          : "hover:text-black dark:hover:text-white";

        const underlineSpan = isBeyondWork ? (
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-pink-400 dark:to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        ) : (
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        );

        // Define the correct paths for the links (e.g., "/about", "/contact", etc.)
        const path = `/${item.toLowerCase().replace(/\s+/g, '-')}`;

        return isMobile ? (
          <Link
            key={item}
            to={path} // Use 'to' for React Router
            onClick={onClick}
            className="hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            {item}
          </Link>
        ) : (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className={`group ${baseClasses} ${textColor} ${hoverColor}`}
          >
            <Link to={path}>
              {item}
              {underlineSpan}
            </Link>
          </motion.div>
        );
      })}
    </>
  );
};

export default NavLinks;
