import React from "react";

function Discover() {
  const headerContainerStyle = {
    marginLeft: "270px",
    padding: "20px",
  };

  const filterContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "20px",
    maxWidth: "700px",
  };

  const filterButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#e0e0e0",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "14px",
    whiteSpace: "nowrap",
  };

  const searchInputStyle = {
    padding: "10px",
    width: "100%",
    maxWidth: "400px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "20px",
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
      <input
        type="text"
        placeholder="Search schemes"
        style={searchInputStyle}
      />
    </div>
  );
}

export default Discover;
