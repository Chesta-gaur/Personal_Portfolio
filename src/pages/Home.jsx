import profile from "../assets/images/profile.png";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <section id="home" className="home-section">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT CONTENT (SHORT INTRO) */}

            <div className="col-md-6">
              <p className="intro-text">hi, I'm</p>
              <h1 className="hero-name">Chesta Gaur</h1>
              <h3 className="hero-role">Software Developer | React & Python</h3>
              <p className="hero-desc">
                I build scalable backend systems, REST APIs and modern web
                applications using Python, FastAPI and React.
              </p>
              <div className="hero-buttons">
                <button className="btn resume-btn btn-shadow">
                  Download Resume
                </button>

                <button className="btn contact-btn btn-shadow">
                  Contact Me
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-md-6 text-center">
              <img className="hero-img" src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
