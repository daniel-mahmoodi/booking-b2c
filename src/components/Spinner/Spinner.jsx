import React, { useState } from "react";
import "./Spinner.css";

import { Wheel } from "react-custom-roulette";
import Confetti from "react-confetti";

const data = [
  { option: "1" },
  { option: "2" },
  { option: "3" },
  { option: "4" },
  { option: "5" },
  { option: "6" },
  { option: "7", style: { backgroundColor: "#f54242", textColor: "#e3e3e3" } },
  { option: "8" },
  { option: "9" },
  { option: "10" },
  { option: "11" },
  { option: "12" },
  { option: "13", style: { backgroundColor: "#f54242", textColor: "#e3e3e3" } },
  { option: "14" },
  { option: "15" },
  { option: "16" },
  { option: "17" },
  { option: "18" },
  { option: "19" },
  { option: "20", style: { backgroundColor: "#f54242", textColor: "#e3e3e3" } },
];
// style: { textColor: "#ff6b6b" }
const backgroundColors = ["#ffe6e6", "#ffb5b5"];
const textColors = ["#912121"];
const outerBorderColor = "#a82828";
const outerBorderWidth = 15;
const innerBorderColor = "#30261a";
const innerBorderWidth = 0;
const innerRadius = 10;
const radiusLineColor = "#eeeeee";
const radiusLineWidth = 0;
const fontFamily = "Nunito";
const fontWeight = "bold";
const fontSize = 20;
const fontStyle = "normal";
const textDistance = 60;
const spinDuration = 1.0;

const Spinner = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showConfetti, setShowConfetti] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={3}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          startingOptionIndex={2}
          perpendicularText="true"
          disableInitialAnimation="false"
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
            setShowConfetti(true);
            setTimeout(() => {
              setShowConfetti(false);
            }, 6 * 1000);
          }}
        />
        <button className={"spin-button"} onClick={handleSpinClick}>
          شروع
        </button>
      </header>
      {showConfetti && (
        <Confetti
          style={{ zIndex: 1000 }}
          // width={}
          // height={}
        />
      )}
    </div>
  );
};

export default Spinner;
