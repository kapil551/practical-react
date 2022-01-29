import React, { useState } from "react";
import { ChromePicker } from "react-color";

const customStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "lightgrey",
  width: "12rem",
  padding: "1rem",
};

const ColorPickerComponent = () => {

  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const changeColorHandler = (updatedColor) => {
    setColor(updatedColor);
  };

  return (

    <div style={customStyle}>

      <button onClick={toggleColorPicker}>
        {showColorPicker ? "Close color picker" : "Open color picker"}
      </button>

      {showColorPicker && (
        <div style={{ marginTop: "1rem" }}>
          <ChromePicker
            color={color}
            onChange={(updatedColor) => changeColorHandler(updatedColor.hex)}
          />

          <h2 style={headerStyle}>
            You picked
            <span
              style={{
                backgroundColor: color,
                display: "inline-block",
                height: "2rem",
                width: "2rem",
              }}
            ></span>
          </h2>
        </div>
      )}

    </div>

  );
};

export default ColorPickerComponent;
