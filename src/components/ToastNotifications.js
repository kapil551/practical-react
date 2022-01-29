import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const CustomToastComponent = ({ closeToast }) => {
    return (
        <div>
            Something went wrong !! {" "}
            <button onClick={closeToast}>❌</button>
        </div>
    )
}

const customNotify = () => {
    
    // passing a custom component in the toast notification
    toast.warn(<CustomToastComponent />, { position: toast.POSITION.TOP_CENTER });
}

const ToastNotifications = () => {

  const notifyPosition = () => {

    // postion
    toast("Basic Notification - TOP LEFT", { position: toast.POSITION.TOP_LEFT });
    toast("Basic Notification - TOP CENTER", { position: toast.POSITION.TOP_CENTER });
    toast("Basic Notification - TOP RIGHT", { position: toast.POSITION.TOP_RIGHT });
    toast("Basic Notification - BOTTOM LEFT", { position: toast.POSITION.BOTTOM_LEFT });
    toast("Basic Notification - BOTTOM CENTER", { position: toast.POSITION.BOTTOM_CENTER });
    toast("Basic Notification - BOTTOM RIGHT", { position: toast.POSITION.BOTTOM_RIGHT });

  };

  const notifyType = () => {

    // type
    toast("Default Notification!");
    toast.success("Success Notification!");
    toast.warn("Warning Notification!");
    toast.error("Error Notification!");
    toast.info("Info Notification!")

  }

  const notifyAutoClose = (seconds) => {

    // control the autoClose behaviour
    toast('Notification - Handle AutoClose', { autoClose: seconds })
  }

  const notifyDisableAutoClose = () => {
      
    // disable autoClose
    toast('Notification - Disable AutoClose', { autoClose: false });
  }

  return (
    <div>
      <button onClick={notifyPosition} style={{ margin: '1rem' }}> NotifyPosition!</button>
      <button onClick={notifyType} style={{ margin: '1rem' }}> NotifyType!</button>
      <button onClick={() => notifyAutoClose(8000)} style={{ margin: '1rem' }}> Notify AutoClose after 8 seconds </button>
      <button onClick={() => notifyAutoClose(10000)} style={{ margin: '1rem' }}> Notify AutoClose after 10 seconds </button>
      <button onClick={() => notifyAutoClose(3000)} style={{ margin: '1rem' }}> Notify AutoClose after 3 seconds </button>
      <button onClick={notifyDisableAutoClose} style={{ margin: '1rem' }}> Notify Disable AutoClose </button>

      <button onClick={customNotify} style={{ margin: '1rem' }}> customNotification </button>
    </div>
  );
};

export default ToastNotifications;
