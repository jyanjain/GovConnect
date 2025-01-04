import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonSection() {
  const navigate = useNavigate();

  const buttonContainerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "-5%", // Adjusts to overlap slightly with the banner
  };

  const buttonStyle = {
    padding: "15px 25px",
    borderRadius: "10px", // Rounded corners
    border: "1px solid #ccc", // Light gray border for subtle separation
    backgroundColor: "#fffff", // White background
    color: "#000", // Black text color
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for 3D effect
    transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s", // Smooth transitions
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)", // Slightly enlarge the button
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
    backgroundColor: "#fffff", // Subtle color change on hover
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
        Discover Schemes
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        onClick={handleUploadClick}
      >
        Upload Documents
      </button>
      <button
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        onClick={handleChatClick}
      >
        Chat with Us
      </button>
    </div>
  );
}

export default ButtonSection;
