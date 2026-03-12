import { useEffect, useState, useRef } from "react";

export default function SkillCard({ icon, name, proficiency }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(proficiency);
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [proficiency]);

  return (
    <div className="skill-card" ref={ref}>
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h4>{name}</h4>
      </div>

      <div className="skill-progress">
        <span>Proficiency</span>
        <span>{proficiency}%</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}
