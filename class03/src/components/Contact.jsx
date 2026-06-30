import "../App.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Have a question or want to work with us? Send us a message.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}