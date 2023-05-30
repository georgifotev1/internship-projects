import React from "react";
import "./spinner.css";

export const SpinnerComponent = () => (
  <div className="spinner">
    <h2 className="spinner-message">Loading movies...</h2>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);
