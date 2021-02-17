import React from "react";
import "./Cards.css";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <card
        class="card"
        onClick={(e) => {
          e.preventDefault();
          window.open("http://sproutify.netlify.app", "_blank");
        }}
      >
        <p className="card-title">SPROUTIFY</p>
        <p className="readable-text">
          An app which visualizes your spotify behaviour. <br></br>
          <br></br> I've build this website during my study at Codaisseur. We
          had 2 weeks to come up with an idea and build an app with some
          technologies we had learned in the weeks before. The initial idea of
          the app was that you could "grow" fractal trees with songs. Each tree
          would come out different, depending on the analysis of a song. Making
          use of the spotify API I found out it was much cooler to use playlists
          and create somewhat of a landscape filled with trees. The beta is
          ready, I'm still working on some performance bugs in the p5js sketch
          and shwoing the landscape animated instead of static.
        </p>
      </card>
      <card
        class="card"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://cairn.netlify.app", "_blank");
        }}
      >
        <p className="card-title">CAIRN</p>
        <p className="readable-text">
          CAIRN - /kɛːn/ - Man-made pile of stones. Often erected as a sign for
          future travellers. <br></br>
          <br></br> Group project I made during my study at Codaisseur. If there
          was an app where tourists and locals could: ask questions, leave
          recommendations, give advice about places to visit in, and surrounding
          the city: what places to avoid, how to get to these places, what to
          prepare etc. It would be very useful to help travellers get the best
          experiences out of their trip in the most convenient way.{" "}
        </p>
      </card>
    </div>
  );
}
export default Projects;
