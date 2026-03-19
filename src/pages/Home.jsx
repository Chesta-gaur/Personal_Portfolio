import profile from "../assets/images/profile.png";
import "../styles/home.css";
import { ReactTyped } from "react-typed";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row align-items-center ">
          {/* LEFT CONTENT (SHORT INTRO) */}

          <div className="hero-left col-md-6">
            <p className="intro-text" data-aos="fade-up" data-aos-delay="100">
              Hi, I'm
            </p>
            <h1 className="hero-name" data-aos="fade-up" data-aos-delay="200">
              Chesta Gaur
            </h1>
            <h3 className="hero-role" data-aos="fade-up" data-aos-delay="300">
              <ReactTyped
                strings={[
                  "Frontend Developer",
                  "Python Developer",
                  "React | Javascript",
                  "Python | FastAPI",
                ]}
                typeSpeed={60}
                backSpeed={40}
                startDelay={500}
                loop
              />
            </h3>
            <p className="hero-desc" data-aos="fade-up" data-aos-delay="400">
              I build scalable backend systems and REST APIs using Python and
              FastAPI, and develop modern web interfaces with React. Passionate
              about solving real-world problems through clean code, efficient
              architecture, and data-driven applications.
            </p>
            <div
              className="hero-buttons"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a href="/resume.pdf" download>
                <button className="btn hero-btn">Download Resume</button>
              </a>

              <button
                className="btn hero-btn"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact Me
              </button>
            </div>

            <div
              className="social-media"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="https://github.com/Chesta-gaur"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/chesta-gaur-696739269"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:chestagaur004@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <div className="hero-img-container">
              <img className="hero-img" src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
