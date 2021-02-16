import React, { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import "./app.css";
import "./styles.css";

const items = ["ABOUT ME", "PROJECTS"];
let show;

function App() {
  const [button, setButton] = useState(0);

  const onClickhandler = (i) => {
    console.log("button", i, "clicked");
    setButton(i);
  };
  console.log(button);

  if (button === 0) {
    show = <About />;
  } else if (button === 1) {
    show = <Projects />;
  } else if (button === 2) {
    show = <Contact />;
  }
  return (
    <>
      <div className="container">
        <div className="nav">
          {items.map((item, i) => {
            return (
              <button
                key={i}
                className="script-bf-box"
                onClick={() => onClickhandler(i)}
              >
                {item}
              </button>
            );
          })}
        </div>
        {show}
      </div>
    </>
  );
}

export default App;
