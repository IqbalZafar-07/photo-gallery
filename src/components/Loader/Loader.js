import React from "react";
import SpinnerLoader from "react-loader-spinner";

function Loader() {
  return (
    <div className="spinner_container">
      <SpinnerLoader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default Loader;
