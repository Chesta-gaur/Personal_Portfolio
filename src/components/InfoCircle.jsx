export default function InfoCircle({ title, value }) {
  return (
    <div className="info-circle">
      <div className="info-circle-inner">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}
