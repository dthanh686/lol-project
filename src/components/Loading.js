import React from "react";
import LoadingGif from "../assets/images/loading.gif";
import TypeWriter from "./Typewriter";
function Loading() {
  return (
    <>
      <div className="app__container">
        <div className="loading__text">
          <TypeWriter data={["Loading..."]} />
        </div>
        <div className="gif__container">
          <img
            src={LoadingGif}
            className="loading__gif"
            alt="loading-gif"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Loading;
