import React from "react";
import "./About.css";
import "./Cards.css";
import gif from "../profile-gif2.gif";

function About() {
  return (
    <>
      <div className="about">
        <img
          src={gif}
          alt="gif"
          className="img"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/brambrulant/pinscreen", "_blank");
          }}
        />
        <div class="card">
          <div class="container2">
            <card
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.linkedin.com/in/bramsch/", "_blank");
              }}
            >
              <p className="readable-text">
                My name is Bram, I'm a developer and musician. I recently
                graduated from an intensive 3 month academy at Codaisseur. On
                this website you can checkout some projects I'm working on. Feel
                free to contact me on LinkedIn by clicking this card! If you're
                interested in the animation above, click on the image to see the
                code on Github
              </p>
            </card>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
