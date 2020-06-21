import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./utils/auth";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Employeehome from "./pages/Employeehome";
import Bosshome from "./pages/Bosshome";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" onFailureRedirectToPath="/login">
            <Employeehome />
          </ProtectedRoute>
          <ProtectedRoute exact path="/boss" onFailureRedirectToPath="/login">
            <Bosshome />
          </ProtectedRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
