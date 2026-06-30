import "../App.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Us</h1>

        <p>
          Welcome to MyApp. We are passionate about creating simple,
          user-friendly, and modern web applications that help people achieve
          their goals efficiently.
        </p>

        <p>
          Our mission is to provide high-quality digital solutions with clean
          design, excellent performance, and a great user experience.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>Deliver reliable and innovative solutions for everyone.</p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>Build technology that makes life easier and more productive.</p>
          </div>

          <div className="about-card">
            <h3>Our Values</h3>
            <p>Quality, integrity, innovation, and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;