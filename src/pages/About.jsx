import "../styles/about.css";
import FeatureCard from "../components/FeatureCard";
import { aboutFeatures } from "../data/aboutData";
import InfoCircle from "../components/InfoCircle";
import { infoData } from "../data/infoData";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="title-box">
          <p className="subtitle">- about me -</p>
          <h2 className="title">What I Do?</h2>
        </div>

        {/* INTRO PARAGRAPH */}
        <div className="intro-para" data-aos="fade-up">
          <p>
            I am a Computer Science Engineering graduate passionate about
            building scalable backend systems and modern web applications. I
            specialize in designing efficient REST APIs using Python and
            FastAPI, while continuously enhancing my frontend skills with React.
            I focus on clean architecture, maintainable code, and solving
            real-world problems.
          </p>
        </div>

        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-md-6" data-aos="fade-left">
            {aboutFeatures.map((feature, index) => (
              <div
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
          {/* RIGHT CONTENT */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="about-info-circles">
              {infoData.map((item) => (
                <InfoCircle
                  key={item.id}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
