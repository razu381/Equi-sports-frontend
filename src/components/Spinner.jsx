import React from "react";

function Spinner() {
  return (
    <div className="flex justify-center ietms-center py-20">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
}

export default Spinner;
