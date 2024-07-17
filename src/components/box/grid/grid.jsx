import { useState,useEffect } from "react";
import Box from "../box";
import "./grid_.css";
import Orange from "../../orangeBox/orangeBox";

function Grid() {
  const boxes = Array.from({ length: 9 }, (_, i) => i);

  const [change, setChange] = useState(false);
  const [arrIndex, setIndex] = useState([]);
  const [trackClicks, setTrackClicks] = useState([]);

  useEffect(() => {
    console.log("trackClicks updated:", trackClicks);
  }, [trackClicks]);

  useEffect(() => {
    console.log("change state:", change);
  }, [change]);

  useEffect(() => {
    console.log("arrIndex updated:", arrIndex);
  }, [arrIndex]);

  return !change ? (
    <div className="grid">
      {boxes.map((index) => (
        <Box
          key={index}
          index={index}
          colorChanger={setChange}
          indexSetter={setIndex}
          trackClicks={trackClicks}
        />
      ))}
    </div>
  ) : (
    <div className="grid">
      {boxes.map((index) => (
        <Orange
          key={index}
          color={arrIndex.includes(index) ? "orange" : "black"}
        />
      ))}
    </div>
  );
}

export default Grid;
