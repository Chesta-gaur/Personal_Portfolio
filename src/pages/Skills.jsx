import SkillCard from "../components/SkillCard";
import "../styles/skills.css";
import { aboutSkills } from "../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="skill-section">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="title-box">
          <p className="subtitle">- tech stack -</p>
          <h2 className="title">Technologies I Work With</h2>
        </div>

        {/* SKILLS */}
        <div className="row g-4">
          {aboutSkills.map((skill) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3"
              key={skill.id}
              data-aos="zoom-in"
            >
              <SkillCard
                icon={skill.icon}
                name={skill.name}
                proficiency={skill.proficiency}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
