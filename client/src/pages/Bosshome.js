import React from "react";
import { useAuth } from "../utils/auth";
import Nav from "../components/Nav";
import Schedule from "../components/Schedules";
import { EmployeeProvider } from "../utils/getemploy";

const Bosshome = () => {
  const { user, logout } = useAuth();

  return (
<div>
  <Nav
  firstName={user.firstName}
  lastName={user.lastName}
  />
  <div className="jumbotron vh-100 vw-100 d-flex align-items-center">
        <div className="container">
          <h1 className="h3"> Hey {user && user.firstName}</h1>
          <p>Welcome to the Thunder Dome!</p>
          <br/>
          <p>Here are your employees:</p>
          <EmployeeProvider>
            <Schedule />
          </EmployeeProvider>
          <button className="btn btn-primary btn-block" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
</div>
  );
};

export default Bosshome;
