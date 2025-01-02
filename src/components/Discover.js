import React from "react";

function Discover() {
  const headerContainerStyle = {
    marginLeft: "270px",
    padding: "20px",
  };

  const filterContainerStyle = {
    display: "flex",
    flexWrap: "wrap", // Allows wrapping to the next line
    gap: "15px", // Adjusts the spacing between buttons
    marginTop: "10px",
    maxWidth: "600px", // Optional: Sets a max width to control the wrapping behavior
  };
  
  const filterButtonStyle = {
    padding: "10px 25px", // Slightly wider padding for a better rounded look
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "50px", // Makes the button edges fully rounded
    cursor: "pointer",
    fontSize: "14px", // Adjust font size for a polished look
    whiteSpace: "nowrap", // Prevents text wrapping within buttons
  };
  
  return (
    <div style={headerContainerStyle}>
      <h1>Discover Scheme</h1>
      <div style={filterContainerStyle}>
        <button style={filterButtonStyle}>All Categories</button>
        <button style={filterButtonStyle}>Education</button>
        <button style={filterButtonStyle}>Employment</button>
        <button style={filterButtonStyle}>Health</button>
        <button style={filterButtonStyle}>Housing</button>
        <button style={filterButtonStyle}>All Eligibility</button>
        <button style={filterButtonStyle}>Age</button>
        <button style={filterButtonStyle}>Disability</button>
        <button style={filterButtonStyle}>Gender</button>
      </div>
    </div>
  );
}

export default Discover;
