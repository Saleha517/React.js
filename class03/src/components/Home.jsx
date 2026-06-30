import React from "react";
import { Link } from "react-router-dom";
 function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1>MyApp</h1>
        <button>Sign In</button>
      </header>

      <section className="hero">
        <h2>Build Something Amazing</h2>
        <p>
          A simple homepage for your React project. Customize it however you
          want.
        </p>

        <div className="buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h3>Fast</h3>
          <p>Optimized for performance and smooth user experience.</p>
        </div>

        <div className="card">
          <h3>Responsive</h3>
          <p>Works perfectly on mobile, tablet, and desktop devices.</p>
        </div>

        <div className="card">
          <h3>Easy to Customize</h3>
          <p>Change colors, content, and layout according to your needs.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;