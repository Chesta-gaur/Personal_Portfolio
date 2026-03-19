export default function EducationItem({
  degree,
  institute,
  duration,
  grade,
  index,
}) {
  const side = index % 2 === 0 ? "left" : "right";
  return (
    <div
      className={`education-item ${side}`}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-delay={index * 150}
    >
      <div className="timeline-dot"></div>
      <div className="edu-card">
        <h4 className="degree">{degree}</h4>
        <p className="institute">{institute}</p>
        <p className="edu-detail">
          {duration} | {grade}
        </p>
      </div>
    </div>
  );
}
