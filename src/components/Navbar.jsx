import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark floating-navbar">
      <div className="container">
        <a className="logo" href="#home">
          CG
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>

          <button
            className="btn hire-btn"
            onClick={() => (window.location.href = "#contact")}
          >
            Let's Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
