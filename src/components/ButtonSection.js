import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonSection() {
  const navigate = useNavigate();

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  };

  const handleDiscoverClick = () => {
    navigate('/discover');
  };
  const handleUploadClick = () => {
    navigate('/upload ');
  };
  const handleChatClick = () => {
    navigate('/chatbot ');
  };
  return (
    <div style={buttonContainerStyle}>
      <button style={buttonStyle} onClick={handleDiscoverClick}>
        Discover Schemes
      </button>
      <button style={buttonStyle}onClick={handleUploadClick}>Upload Documents</button>
      <button style={buttonStyle}onClick={handleChatClick}>Chat with Us</button>
    </div>
  );
}

export default ButtonSection;