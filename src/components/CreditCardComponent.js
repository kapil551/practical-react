import React, { useState } from "react";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const customStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "lightblue",
  height: "60vh",
};

const inputStyle = {
  padding: "1rem",
  borderRadius: "1rem",
  border: "none",
};

const CreditCardComponent = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />

      <form style={customStyle}>

        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          onFocus={(event) => {
            setFocus(event.target.name);
          }}
          style={inputStyle}
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          onFocus={(event) => {
            setFocus(event.target.name);
          }}
          style={inputStyle}
        />

        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(event) => {
            setExpiry(event.target.value);
          }}
          onFocus={(event) => {
            setFocus(event.target.name);
          }}
          style={inputStyle}
        />

        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(event) => {
            setCvc(event.target.value);
          }}
          onFocus={(event) => {
            setFocus(event.target.name);
          }}
          style={inputStyle}
        />

      </form>
    </div>
  );
};

export default CreditCardComponent;
