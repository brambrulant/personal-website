import React from "react";
import "./About.css";
import gif from "../profile-gif2.gif";

function About() {
  return (
    <>
      <div className="about">
        <div class="card">
          <div class="container">
            <p>
              My name is Bram, I'm a full stack developer with a curious,
              creative and innovative mindset. I recently graduated from an
              intensive 3 month academy at Codaisseur. On this website you can
              checkout some projects I'm working on.
            </p>
          </div>
        </div>

        <img
          src={gif}
          alt="gif"
          className="img"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/brambrulant/pinscreen", "_blank");
          }}
        />
        <div></div>
      </div>
    </>
  );
}
export default About;
