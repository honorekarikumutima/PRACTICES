/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./react.svg";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="Logo" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
