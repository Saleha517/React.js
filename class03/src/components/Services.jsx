import "../App.css";

export default function Services() {
  return (
    <div className="services">
      <div className="services-container">
        <h1>Our Services</h1>
        <p>
          We provide professional and reliable services to help your business
          grow.
        </p>

        <div className="service-cards">

          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Modern and responsive websites built with clean code and great
              performance.
            </p>
          </div>

          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Beautiful and user-friendly designs that improve user experience.
            </p>
          </div>

          <div className="service-card">
            <h3>App Development</h3>
            <p>
              Mobile applications with smooth functionality and attractive
              interfaces.
            </p>
          </div>

          <div className="service-card">
            <h3>Digital Solutions</h3>
            <p>
              Smart solutions to improve your online presence and workflow.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}