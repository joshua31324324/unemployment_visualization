// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink className="link" activeClassName="active" to="/">Home</NavLink>
      <NavLink className="link" activeClassName="active" to="/csv1">CSV 1</NavLink>
      <NavLink className="link" activeClassName="active" to="/csv2">CSV 2</NavLink>
      <NavLink className="link" activeClassName="active" to="/csv3">CSV 3</NavLink>
      <NavLink className="link" activeClassName="active" to="/csv4">CSV 4</NavLink>
      <NavLink className="link" activeClassName="active" to="/csv5">CSV 5</NavLink>
    </nav>
  );
};

export default Navigation;
