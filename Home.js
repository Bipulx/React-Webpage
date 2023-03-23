import React from "react";
import Common from "./Common.js";
import Web from "./../images/image.jpg";
export default function Home() {
  return (
    <div>
      <Common
        name="Grow your business with"
        visit="/About"
        btname="Get Started"
        src={Web}
      />
    </div>
  );
}
