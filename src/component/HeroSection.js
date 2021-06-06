import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>BALI DAY TOUR PACKAGES</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonsize="btn--large"
        >
          SPECIAL OFFER
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonsize="btn--large"
        >
          SIGHT SEEING TOURS <i className="fa fa-check-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
