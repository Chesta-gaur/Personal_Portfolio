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

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark floating-navbar">
      <div className="w-100 d-flex align-items-center justify-content-between ">
        <a className="logo" href="#home">
          CG
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>

        {/* nav links */}
        <div
          className={`navbar-collapse ${isOpen ? "show" : "collapse"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${active === "home" ? "active" : ""}`}
                href="#home"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "skills" ? "active" : ""}`}
                href="#skills"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "education" ? "active" : ""}`}
                href="#education"
                onClick={() => setIsOpen(false)}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
          </ul>

          <a
            className="btn hire-btn"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
