import React from "react";
import Common from "./Common.js";
import Web from "./../images/about.jpg";
const About = () => {
  return (
    <div>
      <Common
        name="Welcome To My About Page"
        visit="/contact"
        btname="Contact now"
        src={Web}
      />
    </div>
  );
};

export default About;
