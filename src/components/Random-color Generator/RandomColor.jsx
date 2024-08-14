import React, { useState } from "react";
import "./RandomColor.css";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // functions

  // generate random color
  const genrateRandomHex = () => {
    const hexArr = ["1", "2", "3", "4", "5", "6", "A", "B", "C", "D", "E", "F"];
    let hash = "#";
    for (let i = 0; i < 6; i++) {
      let randomHex = Math.floor(Math.random() * hexArr.length);
      hash += hexArr[randomHex];
    }
    setColor(hash);
  };

  const genrateRandomRgb = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <>
      <div className="container-color" style={{ background: color }}>
        <center>
          <div className="btn-content">
            <button
              onClick={
                typeOfColor === "hex" ? genrateRandomHex : genrateRandomRgb
              }
              className="btn"
            >
              Generate
            </button>
            <button onClick={() => setTypeOfColor("hex")} className="btn">
              Create HEX Color
            </button>
            <button onClick={() => setTypeOfColor("rgb")} className="btn">
              Create RGB Color
            </button>
          </div>
        </center>

        <div className="values">
          <center>
            <input
              className="color-value"
              type="text"
              readOnly
              placeholder={color}
            />
            <input
              className="color-type"
              type="text"
              readOnly
              placeholder={typeOfColor}
            />
          </center>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
