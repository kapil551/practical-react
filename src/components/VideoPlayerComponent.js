import React from "react";

import ReactPlayer from "react-player";

const customStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    width: "100vw",
}

const VideoPlayerComponent = () => {
  return (
    <div style={customStyle}>
      <ReactPlayer
        url={
          "https://www.youtube.com/watch?v=SR6iYWJxHqs&list=RDSR6iYWJxHqs&start_radio=1&rv=SR6iYWJxHqs&t=1"
        }
        controls
        style={{ marginTop: '1rem' }}
        height={'25rem'}
        width={'60rem'}
        pip={true}
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}

      />
    </div>
  );
};

export default VideoPlayerComponent;
