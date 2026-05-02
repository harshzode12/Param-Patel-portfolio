import React from "react";
import "./HeroPage.css";
import Navbar from "./Navbar";
import CaseStudyPage from "./CaseStudyPage";
import { motion } from "framer-motion";

export default function HeroPage() {
  return (
    <div>
      <motion.div
        className="blackout"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />

      {/* 🔝 HERO SECTION */}
      <div className="hero-container" id="home">
        <div className="hero-overlay"></div>

        <img
          src="/assets/logo.png"
          alt="logo"
          className="hero-logo"
        />

        <Navbar />

        <div className="hero-text">
          <h1>
            Hello! Welcome to my corner of the web.<br />
            I’m a UX/UI Designer who hasn’t been<br />
            replaced by AI yet and still believes<br />
            great Design needs a human touch.
          </h1>
        </div>
      </div>

      {/* 🔻 PROJECTS SECTION */}

      <div>
        <div id="home">...</div>
        <div id="projects">
          <CaseStudyPage />
        </div>
      </div>

    </div>
  );
}