import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonSection() {
  const navigate = useNavigate();

  const buttonContainerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "-5%",
    zIndex: 3  // Increased z-index to appear above the overlay
  };

  const buttonStyle = {
    padding: "15px 25px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#ffffff", // Explicit white background
    color: "#000",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    zIndex: 3  // Ensure buttons are above overlay
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#ffffff"  // Maintain white background on hover
  };

  const handleDiscoverClick = () => navigate("/discover");
  const handleUploadClick = () => navigate("/upload");
  const handleChatClick = () => navigate("/chatbot");

  return (
    <div style={buttonContainerStyle}>
      <button
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        onClick={handleDiscoverClick}
      >
        📋 Discover Schemes
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        onClick={handleUploadClick}
      >
        📤 Upload Documents
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        onClick={handleChatClick}
      >
        💬 Chat with Us
      </button>
    </div>
  );
}

export default ButtonSection;