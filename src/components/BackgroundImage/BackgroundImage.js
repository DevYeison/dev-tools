import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = ({ heading }) => (
  <section className="background">
    <div id="box">
      <h1 id="background-heading">{heading} &#128421;&#128404;</h1>
    </div>
  </section>
);

export default BackgroundImage;
