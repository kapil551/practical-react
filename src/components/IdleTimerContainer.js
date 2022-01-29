import React, { useRef, useState } from "react";

import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

const IdleTimerContainer = () => {
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(true); // user is loggedIn by default
  const [modalIsOpen, setModalIsOpen] = useState(false); // modal is closed by default

  const handleOnIdle = (seconds) => {
    console.log(`User is idle for ${seconds}`);

    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000); // automatically logOut
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);

    console.log("User has logged out");

    clearTimeout(sessionTimeoutRef.current);
  };

  const staySignedIn = () => {
    setModalIsOpen(false);

    console.log("User is Active");

    clearTimeout(sessionTimeoutRef.current);
  };

  return (
    <div>
      {isLoggedIn ? <h2> Hello Kapil </h2> : <h2> Hello Guest </h2>}
      <Modal isOpen={modalIsOpen}>
        <h2> You have been idle for a while!</h2>
        <p> You will be logged out soon </p>
        <div>
          <button onClick={logOut}> Log me out </button>
          <button onClick={staySignedIn}>Keep me signed in</button>
        </div>
      </Modal>

      {/* 
            timeout --> It defines the time in milliseconds after which the component should inform that there is no activity in your tab.

            onIdle --> We need a way to handle the component alerting us when the five seconds have elapsed, this is basically a function that gets executed when five seconds have passed with the user not doing any of the events that the library watches for.
      */}
      {isLoggedIn && (
        <IdleTimer
          ref={idleTimerRef}
          timeout={5 * 1000}
          onIdle={() => handleOnIdle(5 * 1000)}
        ></IdleTimer>
      )}
    </div>
  );
};

export default IdleTimerContainer;
