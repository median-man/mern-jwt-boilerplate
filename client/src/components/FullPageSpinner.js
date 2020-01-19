import React from "react";

const FullPageSpinner = ({ text = "Loading..." }) => (
  <div className="vh-100 text-center d-flex align-items-center">
    <div className="w-100">
      <div className="spinner-border" role="status">
        <span className="sr-only">{text}</span>
      </div>
      <h1 className="mt-3 h4 font-weight-normal">{text}</h1>
    </div>
  </div>
);

export default FullPageSpinner;
