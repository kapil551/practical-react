import React, { useRef } from "react";

import { useCountUp } from "react-countup";

const CountUpHook = () => {
    
  const countUpRef = useRef(null);

  const { start, pauseResume, reset, update } = useCountUp({
    start: 0,
    ref: countUpRef,
    end: 1234567,
    duration: 10,
    startOnMount: false,
  });

  return (
    <div>
      {console.log(countUpRef)}
      <h1 ref={countUpRef} />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
};

export default CountUpHook;
