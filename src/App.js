import React, { useState } from "react";
import "./styles.css";

const items = ["ABOUT ME", "PROJECTS", "CONTACT"];

function App() {
  const [button, setButton] = useState();

  const onClickhandler = (i) => {
    console.log("button", i, "clicked");
    setButton(i);
  };
  console.log(button);
  return items.map((item, i) => {
    return (
      <button
        key={i}
        className="script-bf-box"
        onClick={() => onClickhandler(i)}
      >
        {item}
      </button>
    );
  });
}

export default App;
