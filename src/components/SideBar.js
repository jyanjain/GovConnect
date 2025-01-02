import React from "react";

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
    cursor: "pointer",
  };

  return (
    <div style={sidebarStyle}>
      <h3>GovConnect</h3>
      <div style={linkStyle}>Home</div>
      <div style={linkStyle}>Discover Scheme</div>
      <div style={linkStyle}>Upload Documents</div>
      <div style={linkStyle}>My Profile</div>
      <div style={linkStyle}>ChatBot</div>
    </div>
  );
}

export default Sidebar;
