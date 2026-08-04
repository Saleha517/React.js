import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1> Component of react</h1>
      <button onClick={() => navigate("/home")}>Go Back</button>
    </>
  );
};

export default About;
