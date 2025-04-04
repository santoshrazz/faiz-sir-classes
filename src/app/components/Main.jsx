"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Education from "./Education";
import Publications from "./Publication";
import Testimonials from "./Testimonals";
import Contact from "./Contact";
import Footer from "./Footer";

function Main() {
  const [isDarkMode, setIsDarkMode] = useState("false");

  //   useEffect(() => {
  //     localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  //     if (isDarkMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);

  const toggleDarkMode = () => {
    // setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="education">
          <Education />
        </section>
        <Publications />
        <section id="testimonials">
          <Testimonials />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
