import { useState, useEffect } from "react";
import "./box_.css";

function Box({ index, colorChanger, indexSetter, trackClicks }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (trackClicks.includes(index)) {
      setToggle(true);
    }
  }, [trackClicks, index]);

  const handleClick = () => {
    console.log(`Box ${index} clicked`);
    setToggle(!toggle);
    if (trackClicks.indexOf(index) === -1) {
      trackClicks.push(index);
    }
  };

  if (index < 8) {
    return (
      <div
        className="box"
        style={{ backgroundColor: toggle ? "green" : "black" }}
        onClick={handleClick}
      >
        {console.log(`Rendering Box ${index}`)}
      </div>
    );
  } else {
    return (
      <div
        className="box"
        style={{ backgroundColor: toggle ? "green" : "black" }}
        onClick={() => {
          handleClick();
          colorChanger(true);
          indexSetter(trackClicks);
        }}
      >
        {console.log(`Rendering Last Box ${index}`)}
      </div>
    );
  }
}

export default Box;
