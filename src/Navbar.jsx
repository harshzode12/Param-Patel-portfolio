import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const handleProjectsClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-name">Param Patel</Link>

      <a href="/#projects" onClick={handleProjectsClick}>
        Projects
      </a>

      <Link to="/about">About Me</Link>

      {/* UPDATED RESUME */}
      <a
        href="https://drive.google.com/file/d/1M2eOe9E15TceRXFuUokUFlyukKhnwmVm/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}