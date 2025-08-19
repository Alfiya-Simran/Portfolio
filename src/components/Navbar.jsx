import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Certificates", path: "/certificates" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
    
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          ALFIYA SIMRAN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-l">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`capitalize transition hover:text-indigo-600 ${
                location.pathname === link.path
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/Alfiya Simran.pdf"
            download
            className="text-sm bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
          >
            Resume
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Dark Mode"
            className="text-xl ml-2 text-gray-800 dark:text-white"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-800 dark:text-white"
            title="Toggle Dark Mode"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 shadow overflow-hidden"
          >
            <div className="flex flex-col space-y-3 text-sm text-gray-800 dark:text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`capitalize hover:text-indigo-600 ${
                    location.pathname === link.path
                      ? "text-indigo-600 font-semibold"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
