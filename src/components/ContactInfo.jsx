import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="contact-info" data-aos="fade-left">
      <h4>CONTACT INFO</h4>
      <p className="contact-desc">
        I'm open to full time roles, internships, and interesting projects. If
        you have something in mind, feel free to reach out—I'd love to connect.
      </p>
      <p>
        <strong>Email : </strong>chestagaur004@gmail.com
      </p>
      <p>
        <strong>Location : </strong>Kota, Rajasthan
      </p>

      <div className="social-media">
        <a
          href="https://github.com/Chesta-gaur"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/chesta-gaur-696739269"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:chestagaur004@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
