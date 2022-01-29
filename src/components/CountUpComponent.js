import React from "react";

import CountUp from "react-countup";
import CountUpHook from "./CountUpHook";

const customStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "lightblue",
  padding: "1rem",
  marginTop: "1rem",
};

const CountUpComponent = () => {

  return (
    <div>
      <CountUp end={200} duration={5} />

      <div>
        <CountUp start={1} end={500} duration={5}>
          {({ countUpRef, start }) => {
            return (
              <div style={customStyle}>
                <span ref={countUpRef} />
                <button onClick={start}> CountUp 5 seconds </button>
              </div>
            );
          }}
        </CountUp>
      </div>

      <div>
        <CountUp start={1} end={500} duration={10}>
          {({ countUpRef, start }) => {
            return (
              <div style={customStyle}>
                <span ref={countUpRef} />
                <button onClick={start}> CountUp 10 seconds </button>
              </div>
            );
          }}
        </CountUp>
      </div>

      <div>
        <CountUp
          start={-825.039}
          end={160527.012}
          duration={10}
          separator=" "
          decimals={4}
          decimal=","
          prefix="EUR "
          suffix=" left"
        >
          {({ countUpRef, start }) => {
            return (
              <div style={customStyle}>
                <span ref={countUpRef} />
                <button onClick={start}> Money Left </button>
              </div>
            );
          }}
        </CountUp>
      </div>

      <div>
          <CountUpHook />
      </div>
    </div>
  );
};

export default CountUpComponent;
