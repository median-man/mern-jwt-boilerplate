import React from "react";

const Alert = ({ type = "danger", children, ...rest }) => (
  <div className={`alert alert-${type}`} {...rest}>
    {children}
  </div>
);

export default Alert;
