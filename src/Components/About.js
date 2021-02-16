import React from "react";
import gif from "../profile-gif.gif";

function About() {
  return (
    <div>
      <img src={gif} alt="gif" />
      {/* <link href="https://github.com/brambrulant/pinscreen">
        check out the code here
      </link> */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://github.com/brambrulant/pinscreen";
        }}
      >
        Check the code
      </button>
    </div>
  );
}
export default About;
