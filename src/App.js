import "./App.css";

import Icons from "./components/Icons";
import ToastNotifications from "./components/ToastNotifications";


function App() {
  return (

    <>

      <div className="App">

        {/* 1 - Icons */}
        <Icons />

        {/* 2 - Toast Notifications */}
        <ToastNotifications />
        
      </div>

      

    </>
  );
}

export default App;
