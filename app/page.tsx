"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Internship from "./components/Internship";
import Education from "./components/Education";
import CreatorPortfolio from "./components/CreatorPortfolio";
import Footer from "./components/Footer";

import SectionNav from "./components/SectionNav";
import Connect from "./components/Connect";

export default function Home() {
  const [mode, setMode] = useState<"professional" | "creator">(
    "professional"
  );

  const toggleMode = () => {
    setMode((prev) =>
      prev === "professional" ? "creator" : "professional"
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header mode={mode} onModeToggle={toggleMode} />
      <AnimatePresence mode="wait">
        {mode === "professional" ? (
          <motion.div
            key="professional"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <SectionNav />
            <Hero />
            <Experience />
            <Internship />
            <Education />
            <Connect />
          </motion.div>
        ) : (
          <motion.div
            key="creator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <CreatorPortfolio />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
