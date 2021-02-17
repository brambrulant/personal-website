import React, { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import "./app.css";
import "./styles.css";

const items = ["ABOUT ME", "PROJECTS"];
let show;
let navClass = "nav";
let buttonClass = "";

function App() {
  const [button, setButton] = useState();

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

  if (button === undefined) {
    navClass = "firstNav";
    buttonClass = "script-bf-box2";
  } else {
    navClass = "nav";
    buttonClass = "script-bf-box";
  }
  return (
    <>
      <div className="container">
        <div className={navClass}>
          {items.map((item, i) => {
            return (
              <button
                key={i}
                className={buttonClass}
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
