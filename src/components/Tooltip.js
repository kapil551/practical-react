import React, { forwardRef } from "react";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Animation
// https://tippyjs.bootcss.com/animations/
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/animations/perspective.css';
import 'tippy.js/animations/shift-away-extreme.css';

const customStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",

  backgroundColor: "lightgrey",
  height: "33.3vh",
  width: "100vw",
};

const ColoredTooltip = () => {
  return <span style={{ color: "orange" }}> Tooltip Component !!</span>;
};

const CustomComponentChild = forwardRef((props, ref) => {

    return (
        <div ref={ref}>
          <div> First line </div>
          <div> Second line </div>
        </div>
    );

});

const Tooltip = () => {

  return (

    <>
        <div style={customStyle}>

            <div>
                <Tippy content="Basic Tooltip">
                <button>Hover</button>
                </Tippy>
            </div>

            <div>
                <Tippy content="Basic Tooltip" arrow={false}>
                <button>Hover</button>
                </Tippy>
            </div>

            <div>
                <Tippy content="Basic Tooltip" delay={1000}>
                <button>Delay</button>
                </Tippy>
            </div>

            <div>
                <Tippy content={<ColoredTooltip />}>
                <button>Hover</button>
                </Tippy>
            </div>

            {/* component children */}
            <div style={{backgroundColor: 'pink'}}>
                <Tippy content={<ColoredTooltip />}>
                <CustomComponentChild />
                </Tippy>
            </div>

        </div>

        {/* placements */}
        {/* https://atomiks.github.io/tippyjs/#placements */}

        <div style={customStyle}>

            <div>
                <Tippy content="Tooltip" placement="top-end">
                    <button style={{ padding: '1rem' }}> Placements </button>
                </Tippy>
            </div>

            <div>
                <Tippy  content="Tooltip" placement="left-start">
                    <button style={{ padding: '1rem' }}> Placements </button>
                </Tippy>
            </div>

            <div>
                <Tippy  content="Tooltip" placement="bottom">
                    <button style={{ padding: '1rem' }}> Placements </button>
                </Tippy>
            </div>

        </div>

        {/* Animations */}
        {/* https://atomiks.github.io/tippyjs/#animations */}
        <div style={customStyle}>

            <div>
                <Tippy content="Tooltip" animation="scale-extreme">
                    <button style={{ padding: '1rem' }}> Animations </button>
                </Tippy>
            </div>

            <div>
                <Tippy  content="Tooltip" animation="perspective">
                    <button style={{ padding: '1rem' }}> Animations </button>
                </Tippy>
            </div>

            <div>
                <Tippy  content="Tooltip" animation="shift-away-extreme">
                    <button style={{ padding: '1rem' }}> Animations </button>
                </Tippy>
            </div>

        </div>
    </>

  );
};

export default Tooltip;
