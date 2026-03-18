import "../styles/navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "projects",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 150;
          const height = element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark floating-navbar">
      <div className="container">
        <a className="logo" href="#home">
          CG
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${active === "home" ? "active" : ""}`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "about" ? "active" : ""}`}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "skills" ? "active" : ""}`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "education" ? "active" : ""}`}
                href="#education"
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "projects" ? "active" : ""}`}
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>

          <a className="btn hire-btn" href="#contact">
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
