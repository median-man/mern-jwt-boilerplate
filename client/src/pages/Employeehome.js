import React from "react";
import { useAuth } from "../utils/auth";
import Nav from "../components/Nav/index";


const Employeehome = () => {
  const { user, logout } = useAuth();
  console.log(user)
  return (
    <div>
     <Nav
     firstName={user.firstName}
     lastName={user.lastName}
    />
    <div className="jumbotron vh-100 vw-100 d-flex align-items-center">
      <div className="container">
        <h1 className="h3">{user && user.email}</h1>
        <p>Hey, Welcome to the Thunder Dome Employed Bitches!</p>

        <button className="btn btn-primary btn-block" onClick={logout}>
          Logout
        </button>
      </div>
    </div>

    </div>
  );
};

export default Employeehome;
