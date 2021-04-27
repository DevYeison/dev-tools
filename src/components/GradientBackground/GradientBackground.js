import React from "react";
import "./GradientBackground.css";

const GradientBackground = ({ headingText }) => (
  <section className="background">
     <div id="box">
      <h1 id="background-heading">{headingText} &#128421;</h1>
    </div>
  </section>
);

export default GradientBackground;
