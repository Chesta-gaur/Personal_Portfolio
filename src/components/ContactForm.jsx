import { useState } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);
    e.target.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  return (
    <div className="contact-form" data-aos="fade-right">
      <h4>Send a message</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>

        <button type="submit" className="contact-btn">
          Send Message
        </button>

        {success && <p className="success-msg">Message sent successfully!</p>}
      </form>
    </div>
  );
}
