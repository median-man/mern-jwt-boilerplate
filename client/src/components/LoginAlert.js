import React from "react";
import Alert from "./Alert";

const LoginAlert = ({ error }) => (
  <div style={{ position: "relative" }}>
    <div className="mt-3 w-100" style={{ position: "absolute", top: 0 }}>
      <Alert>{error}</Alert>
    </div>
  </div>
);

export default LoginAlert;
