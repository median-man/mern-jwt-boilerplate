import React from "react";
import "../../styles/style.css"

const Nav = props => (
<nav className="navbar navbar bg">
<span className="navbar-brand mb-0 h1">Welcome to TimeKeeper {props.firstName} {props.lastName}</span>
</nav>
);

export default Nav;
