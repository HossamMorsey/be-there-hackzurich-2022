import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { demo_logo } from "./../../utils/utils";
import "./Navbar.scss";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img alt="Logo" src={demo_logo} className="img-logo" />
        Volundeer
      </Link>
      <ul>
        <CustomLink to="/about">About Us</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        <CustomLink to="/login">Log In</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;
