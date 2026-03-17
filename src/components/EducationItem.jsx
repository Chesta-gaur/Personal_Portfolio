export default function EducationItem({
  degree,
  institute,
  duration,
  grade,
  index,
}) {
  return (
    <div className={`education-item ${index % 2 === 0 ? "left" : "right"}`}>
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
