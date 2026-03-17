import "../styles/contact.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fadeup">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="title-box">
          <p className="subtitle">- get in touch -</p>
          <h2 className="title">Let's Work Together</h2>
        </div>

        <div className="contact-wrapper">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
