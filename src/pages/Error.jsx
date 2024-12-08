import React from "react";
import notFound from "../Animations/NotFound.json";
import Lottie from "lottie-react";
console.log(notFound);
function Error() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4 m-[5%]">
      <Lottie animationData={notFound} loop={true}></Lottie>
    </div>
  );
}

export default Error;
