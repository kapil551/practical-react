import React from "react";

import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const customStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};

const loaderCSS = css``;

const LoadingIndicatorsComponent = () => {
  return (
    <div style={customStyle}>
      <BounceLoader />
      <BarLoader />
      <BeatLoader css={loaderCSS} color={"red"} size={48} loading />
    </div>
  );
};

export default LoadingIndicatorsComponent;
