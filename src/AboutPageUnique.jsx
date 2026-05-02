import React from "react";
import "./AboutPageUnique.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function AboutPageUnique() {

  const navigate = useNavigate();
  
  return (

    <div>
      <motion.div
        className="blackout"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />

      <div className="about-wrapper">

        <Navbar />

        <img src="/assets/logo2.png" alt="logo" className="about-logo" />

        {/* HERO */}
        <div className="about-hero">
          <h1>
            Hello! I'm Param Patel, a designer turning chaos into clarity.
            When I'm not crafting interfaces, I'm either at the gym
            or lost in music — both great for problem solving.
          </h1>
        </div>

        {/* MAIN */}
        <div className="about-container">

          {/* LEFT */}
          <div className="about-left">
            <h2>TODAY</h2>
            <p>
              I’m a Product & UI/UX Designer with a background in computer engineering, focused on creating intuitive
              and meaningful digital experiences. I combine design thinking with technical understanding to build
              solutions that are not just visually appealing, but also functional and scalable. I’ve completed my
              B.Tech from Bhagwan Mahavir University and gained hands-on industry experience through an internship
              at Metanoia Solutions, where I worked on real-world products and user problems.
            </p>

            <h2>Childhood</h2>
            <p>
              Born in 2005 in Surat, I completed my schooling at Shree Swaminarayan Mission School in 2020. Early
              exposure to technology and problem-solving led me to pursue a Diploma in Computer Engineering from
              Shree Dhanvantary College of Engineering and Technology (2020–2023), where I developed a strong
              understanding of systems, logic, and development workflows.
            </p>

            <h2>Design and Growth</h2>
            <p>
              My journey into design grew naturally from engineering, where I realized I enjoyed shaping how things
              work just as much as how they feel. My approach to design centers around solving real user problems
              with clarity, simplifying complex workflows, and balancing user needs with business goals. I aim to
              create scalable, consistent, and thoughtful experiences that go beyond aesthetics and deliver real
              value in everyday use.
            </p>

            <h2>Goal</h2>
            <p>
              I want to build products that feel simple on the surface but thoughtful underneath designs that respect
              user’s time, By blending technical thinking with strong design principles, I strive to create experiences
              that don’t just look good but genuinely make life easier and more enjoyable.
            </p>
          </div>

          {/* RIGHT */}
          <div className="about-right">

            <div className="music-grid">

              <a
                href="https://open.spotify.com/track/5Cx1RreO5b55pn3yLPbDI6?si=44b4cef75e2542e4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="music-card red">
                  <img src="/assets/song1.jpg" className="bg-img" />
                  <span className="tag">music</span>
                  <div className="player">
                    <img src="/assets/picture1.jpg" className="thumb" />
                    <div className="details">
                      <h4>Killa Klassic</h4>
                      <p>Naam Sujal</p>
                    </div>
                    <img src="/assets/spotify.png" className="spotify" />
                    <div className="play-btn">▶</div>
                  </div>
                </div>
              </a>

              <a
                href="https://open.spotify.com/track/2qb5ASYergjk2qNLvYEQJD?si=2874a7f958a04211"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="music-card gray">
                  <img src="/assets/song2.jpg" className="bg-img" />
                  <span className="tag">drives</span>
                  <div className="player">
                    <img src="/assets/picture2.jpg" className="thumb" />
                    <div className="details">
                      <h4>Khatta Flow</h4>
                      <p>Seedhe Maut</p>
                    </div>
                    <img src="/assets/spotify.png" className="spotify" />
                    <div className="play-btn">▶</div>
                  </div>
                </div>
              </a>

              <a
                href="https://open.spotify.com/track/0cYohCh24y1aMjJmcS9RBl?si=cfdf7488cf1b4c60"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="music-card dark">
                  <img src="/assets/song3.jpg" className="bg-img" />
                  <span className="tag">flow</span>
                  <div className="player">
                    <img src="/assets/picture3.jpg" className="thumb" />
                    <div className="details">
                      <h4>For A Reason</h4>
                      <p>Karan Aujla</p>
                    </div>
                    <img src="/assets/spotify.png" className="spotify" />
                    <div className="play-btn">▶</div>
                  </div>
                </div>
              </a>

              <a
                href="https://open.spotify.com/track/69iKptxSyyI3Sa9tF5RKQ1?si=28bfe55ee10f49a8&nd=1&dlsi=e1fc6cd53a77470e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="music-card yellow">
                  <img src="/assets/song4.jpg" className="bg-img" />
                  <span className="tag">motivation</span>
                  <div className="player">
                    <img src="/assets/picture4.jpg" className="thumb" />
                    <div className="details">
                      <h4>You Got This</h4>
                      <p>Fotty Seven</p>
                    </div>
                    <img src="/assets/spotify.png" className="spotify" />
                    <div className="play-btn">▶</div>
                  </div>
                </div>
              </a>

            </div>

          </div>

        </div>

        {/* ✅ FULL WIDTH SECTION */}
        <div className="about-bottom">

          <div className="bottom-grid">

            {/* TIMELINE */}
            <div className="timeline-box">
              <h3>Quick Timeline</h3>

              <div className="timeline-item">
                <img src="/assets/image1.png" className="icon" />
                <span>2020</span>
                <div className="line"></div>
                <p>Started Computer Engineering</p>
              </div>

              <div className="timeline-item">
                <img src="/assets/image2.png" className="icon" />
                <span>2023</span>
                <div className="line"></div>
                <p>Began B.Tech in Information Technology</p>
              </div>

              <div className="timeline-item">
                <img src="/assets/image3.png" className="icon" />
                <span>2024</span>
                <div className="line"></div>
                <p>Focused on refining UI/UX design skills</p>
              </div>

              <div className="timeline-item">
                <img src="/assets/image4.png" className="icon" />
                <span>2025</span>
                <div className="line"></div>
                <p>Built end to end product design projects</p>
              </div>

              <div className="timeline-item">
                <img src="/assets/image5.png" className="icon" />
                <span>2026</span>
                <div className="line"></div>
                <p>Completed B.Tech and professional internship</p>
              </div>
            </div>

            {/* STATS */}
            <div className="stats-box">
              <h3>Quick Stats</h3>

              <div className="stat-item">
                <img src="/assets/image6.png" className="icon" />
                <span>6 Mon</span>
                <p>Internship Experience</p>
              </div>

              <div className="stat-item">
                <img src="/assets/image7.png" className="icon" />
                <span>6+</span>
                <p>Projects</p>
              </div>

              <div className="stat-item">
                <img src="/assets/image8.png" className="icon" />
                <span>3</span>
                <p>End-to-end case studies</p>
              </div>

              <div className="stat-item">
                <img src="/assets/image9.png" className="icon" />
                <span>80+</span>
                <p>UI screens designed</p>
              </div>

              <div className="stat-item">
                <img src="/assets/image10.png" className="icon" />
                <span>1</span>
                <p>National level tournament</p>
              </div>
            </div>

          </div>

        </div>

        {/* FOOTER */}
        {/* FOOTER */}
        <div className="footer-wrapper">
          <div className="footer-box">
            <h2>👋 This is the end of the page, not the story. so let’s connect :)</h2>

            <div className="footer-links">
              <div>
                <h4>PAGES</h4>
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/about" className="footer-link">About</Link>
              </div>

              <div>
                <h4>SELECTED WORK</h4>

                <p onClick={() => navigate("/case-study/aura-eats")}>Aura Eats</p>
                <p onClick={() => navigate("/case-study/packplango")}>PackPlanGo</p>
                <p onClick={() => navigate("/case-study/vidhyavault")}>VidhyaVault</p>
                <p onClick={() => navigate("/case-study/admin")}>Smarter Admin Management</p>
                <p onClick={() => navigate("/case-study/neox")}>NEOX</p>
              </div>

              <div>
                <h4>LET'S CONNECT</h4>

                <a
                  href="https://www.linkedin.com/in/param-patel-designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/p_creative_design?igsh=emVtdzNuaTRwaXgx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Instagram
                </a>

                <a
                  href="https://drive.google.com/file/d/1kO-CqfLzgbDFZFArSsywDVUaHmON5nrD/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}