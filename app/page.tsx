"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Footer from "./components/Footer";

import SectionNav from "./components/SectionNav";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <>
      <motion.div
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
      <Footer />
    </>
  );
}
