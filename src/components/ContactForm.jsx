export default function ContactForm() {
  return (
    <div className="contact-form" data-aos="fade-right">
      <h4>Send a message</h4>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
