import React from "react";
import "../App.css";

function Feedback() {
  return (
    <div className="container">
      <div className="feedback-box">
        <h2>Feedback Form</h2>

        <input type="text" placeholder="Enter Your Name" />

        <input type="email" placeholder="Enter Your Email" />

        <textarea
          placeholder="Write Your Feedback"
          rows="5"
        ></textarea>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default Feedback;