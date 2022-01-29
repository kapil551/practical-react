import "./App.css";

import { FaReact } from "react-icons/fa";

import { MdAccountBalance, MdAlarm } from "react-icons/md";

import { IconContext } from "react-icons";

function App() {
  return (

    <>

      <div className="App">
        <FaReact />
        <FaReact color="purple" />
        <FaReact size="10rem" color="blue" />

        <MdAlarm />
        <MdAlarm color="red" size="15rem" />
      </div>

      {/* Adding common styling to multiple icons using IconContext.Provider component */}
      <IconContext.Provider value={{ color: 'green', size: '5rem' }}>
        <div className="App">
          <FaReact />
          <FaReact />
          <FaReact />

          <MdAlarm />
          <MdAccountBalance />

          {/* Inline styling has higher precedence */}
          <MdAccountBalance color="brown" size="10rem" />

        </div>
      </IconContext.Provider>

    </>
  );
}

export default App;
