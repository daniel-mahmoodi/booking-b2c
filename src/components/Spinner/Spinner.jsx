import React, { useState } from "react";
import "./Spinner.css";

import { Wheel } from "react-custom-roulette";
import Confetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../store/order-slice";
import { useEffect } from "react";
import { finalizeOrder } from "../../store/order-action";

// style: { textColor: "#ff6b6b" }
const backgroundColors = ["#ffe6e6", "#ffb5b5"];
const textColors = ["#912121"];
const outerBorderColor = "#a82828";
const outerBorderWidth = 15;
const innerBorderColor = "#a82828";
const innerBorderWidth = 6;
const innerRadius = 10;
const radiusLineColor = "#eeeeee";
const radiusLineWidth = 0;
const fontFamily = "Nunito";
const fontWeight = "bold";
const fontSize = 20;
// const fontStyle = "normal";
const textDistance = 60;
const spinDuration = 1.0;

const Spinner = ({ discountPercentages, selectedIndex, orderId }) => {
  const dispatch = useDispatch();
  const [receivedData, setReceivedData] = useState([]);
  const [mustSpin, setMustSpin] = useState(false);
  const [showPrize, setShowPrize] = useState(false);
  const [priseNumber, setPriseNumber] = useState(0);
  const [showConfetti, setShowConfetti] = useState(0);
  const [startingOption, setStartingOption] = useState(0);
  const token = useSelector((state) => state.auth.token);

  console.log("spinner", discountPercentages, selectedIndex);
  useEffect(() => {
    let data = [];
    discountPercentages.map((segment, index) =>
      data.push({
        option: ` ${segment} درصد`,
        style:
          index === 3 || index === 10 || index === 17
            ? { backgroundColor: "#f54242", textColor: "#e3e3e3" }
            : {},
      })
    );
    setReceivedData(data);
  }, [discountPercentages]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      // const newPrizeNumber = Math.floor(Math.random() * data.length);
      // setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  const finalizeOrderHandler = () => {
    dispatch(
      finalizeOrder({
        token,
        isSpinnerTurned: true,
        paymentMethod: 1,
        paymentGatewayId: 1,
        orderId,
      })
    );
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        direction: "ltr",
      }}
      id="modal-next"
    >
      {/* <div> */}
      <div
        style={{
          backgroundColor: "rgba(250, 250, 250)",
          height: "70%",
          width: "70%",
          padding: "0 24px 24px 24px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(130, 0, 0)",
            // height: "24px",
            color: "white",
            padding: "24px",
            margin: "12px ",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          گردونه شانس
        </div>
        {/* <div className="App-header" dir="ltr"> */}
        {priseNumber ? (
          ""
        ) : (
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              padding: "12px 16px",
            }}
          >
            با کلیک بر روی دکمه ی شروع، شانس خود را برای دریافت تخفیف امتحان
            کنید
          </div>
        )}
        {receivedData.length && (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={selectedIndex}
            data={receivedData}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            // fontStyle={fontStyle}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
            startingOptionIndex={startingOption}
            // perpendicularText="true"
            disableInitialAnimation="true"
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              setStartingOption(selectedIndex);
              if (discountPercentages[selectedIndex]) {
                setShowConfetti(true);
                setTimeout(() => {
                  setShowConfetti(false);
                  setShowPrize(true);
                  setPriseNumber(discountPercentages[selectedIndex]);
                }, 12 * 1000);
              } else {
                setTimeout(() => {
                  setShowPrize(true);
                  setPriseNumber(discountPercentages[selectedIndex]);
                }, 500);
              }
            }}
          />
        )}
        {showPrize ? (
          <div
            style={{ padding: "32px", fontSize: "24px", fontWeight: "bold" }}
          >
            {priseNumber ? (
              <div>تبریک شما برنده {priseNumber} درصد تخفیف شدید</div>
            ) : (
              <div>متاسفانه شما تخفیف دریافت نکردید</div>
            )}
            <button
              onClick={finalizeOrderHandler}
              style={{
                borderRadius: "12px",
                borderColor: "#06703b",
                // borderWidth: "3px",
                borderStyle: "solid",
                backgroundColor: "#10a158",
                color: "white",
                padding: "12px",
                marginTop: "16px",
              }}
            >
              پرداخت سفارش
            </button>
          </div>
        ) : (
          <>
            <button className={"spin-button"} onClick={handleSpinClick}>
              شروع
            </button>
          </>
        )}
        {showConfetti ? (
          <Confetti
            style={{ zIndex: 1000 }}
            // width={}
            // height={}
          />
        ) : (
          ""
        )}
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Spinner;
