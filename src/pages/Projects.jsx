import "../styles/projects.css";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectData";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="title-box">
          <p className="subtitle">- my work -</p>
          <h2 className="title">Featured Projects</h2>
        </div>

        {/* PROJECTS */}
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              aos="fade-up"
              delay={index * 150}
              image={project.image}
              name={project.name}
              desc={project.desc}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
