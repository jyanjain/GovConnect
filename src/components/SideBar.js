import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const sidebarStyle = {
    width: "250px",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    position: "fixed",
    top: "0",
    left: "0",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    textDecoration: "none",
    color: "#333",
    padding: "10px",
    borderRadius: "5px",
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#dfe6e9",
    fontWeight: "bold",
  };

  return (
    <div style={sidebarStyle}>
      <h3>GovConnect</h3>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="/discover"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Discover Scheme
      </NavLink>
      <NavLink
        to="/upload"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        Upload Documents
      </NavLink>
      <NavLink
        to="/profile"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        My Profile
      </NavLink>
      <NavLink
        to="/chatbot"
        style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        ChatBot
      </NavLink>
    </div>
  );
}

export default Sidebar;
