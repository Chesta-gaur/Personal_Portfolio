import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ image, name, desc, tech, github, demo }) {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={image} alt={name} />
      </div>

      <div className="project-details">
        <h4>{name}</h4>
        <p>{desc}</p>

        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="button-wrapper">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn code-btn"
          >
            <SiGithub />
            Code
          </a>
          <a
            href={demo}
            rel="noopener noreferrer"
            target="_blank"
            className="project-btn demo-btn"
          >
            <FiExternalLink />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
