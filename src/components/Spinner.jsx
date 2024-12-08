import Lottie from "lottie-react";
import React from "react";
import spinnerAnimation from "../Animations/spinner horizontal.json";
function Spinner() {
  return (
    <div className="flex justify-center ietms-center py-2">
      {/* <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span> */}
      <Lottie animationData={spinnerAnimation} loop={true}></Lottie>
    </div>
  );
}

export default Spinner;
