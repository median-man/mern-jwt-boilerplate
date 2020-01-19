import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../utils/auth";
import {
  EmailInputGroup,
  PasswordInputGroup
} from "../components/FormControls";
import LoginAlert from "../components/LoginAlert";
import FullPageSpinner from "../components/FullPageSpinner";

const Signup = () => {
  const { isLoggedIn, isPending, signup, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (isPending) {
    return <FullPageSpinner text="Creating account..." />;
  }

  return (
    <div className="container vh-100 text-center d-flex align-items-center">
      <form className="form-login m-auto" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Create a new account</h1>
        <EmailInputGroup
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <PasswordInputGroup
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit" className="my-3 btn btn-lg btn-primary btn-block">
          Sign up
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
        {error && <LoginAlert error={error} />}
      </form>
    </div>
  );
};

export default Signup;
