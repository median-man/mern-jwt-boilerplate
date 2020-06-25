import React from "react";
import { useAuth } from "../utils/auth";

const Bosshome = () => {
  const { user, logout } = useAuth();

  return (
    <div className="jumbotron vh-100 vw-100 d-flex align-items-center">
      <div className="container">
        <h1 className="h3"> Hey {user && user.firstName}</h1>
        <p>Welcome to the Thunder Dome!</p>

        <button className="btn btn-primary btn-block" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Bosshome;
