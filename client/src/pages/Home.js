import React from "react";
import { useAuth } from "../utils/auth";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="jumbotron vh-100 vw-100 d-flex align-items-center">
      <div className="container">
        <h1 className="h3">{user && user.email}</h1>
        <p>
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
        </p>

        <button className="btn btn-primary btn-block" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
