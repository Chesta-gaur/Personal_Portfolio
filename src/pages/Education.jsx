import "../styles/education.css";
import EducationItem from "../components/EducationItem";
import { educationData } from "../data/eduData";

export default function Education() {
  return (
    <section id="education" className="edu-section">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="title-box">
          <p className="subtitle">- academic journey -</p>
          <h2 className="title">Education & Qualifications</h2>
        </div>
        <div className="timeline">
          {educationData.map((item, index) => (
            <EducationItem key={item.id} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
