import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex-shrink-0 font-bold text-xl  ${
              isScrolled ? "text-white" : "text-gray-800"
            }`}
          >
            Faiz Sir Patna
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 text-gray-700">
              <NavLink href="#home" isScrolled={isScrolled}>
                Home
              </NavLink>
              <NavLink href="#education" isScrolled={isScrolled}>
                Education
              </NavLink>
              <NavLink href="#publications" isScrolled={isScrolled}>
                Publications
              </NavLink>
              <NavLink href="#testimonials" isScrolled={isScrolled}>
                Testimonials
              </NavLink>
              <NavLink href="#contact" isScrolled={isScrolled}>
                Contact
              </NavLink>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-2"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    !isScrolled ? "text-gray-900" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    !isScrolled ? "text-gray-900" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home" isScrolled={isScrolled}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#education" isScrolled={isScrolled}>
                Education
              </MobileNavLink>
              <MobileNavLink href="#publications" isScrolled={isScrolled}>
                Publications
              </MobileNavLink>
              <MobileNavLink href="#testimonials" isScrolled={isScrolled}>
                Testimonials
              </MobileNavLink>
              <MobileNavLink href="#contact" isScrolled={isScrolled}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, isScrolled, children }) {
  return (
    <Link
      href={href}
      className={`${
        !isScrolled ? "text-gray-700" : "text-white"
      } hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, isScrolled, children }) {
  return (
    <a
      href={href}
      className={`${
        !isScrolled ? "text-gray-700" : "text-white"
      } hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
    >
      {children}
    </a>
  );
}
