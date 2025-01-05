import React from "react";

function Discover() {
  const headerContainerStyle = {
    marginLeft: "270px", // Adjust to leave space for the sidebar
    padding: "20px",
  };

  const filterContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "20px",
    maxWidth: "700px", // Optional: restricts width of the filter buttons
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

  const searchContainerStyle = {
    marginTop: "20px",
    width: "100%", // Ensures the container spans the full width
  };

  const searchInputStyle = {
    padding: "10px",
    width: "98%", // Takes up the full width of the parent container
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
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
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search schemes"
          style={searchInputStyle}
        />
      </div>
    </div>
  );
}

export default Discover;
