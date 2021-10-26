import React from "react";
import ScaleLoader from "react-spinners/PacmanLoader";
import "./Spinner.scss";
function Spinner({ color, loading }) {
  return (
    <div className="loader-container">
      <ScaleLoader height={35} color={color} loading={loading} />
    </div>
  );
}

export default Spinner;
