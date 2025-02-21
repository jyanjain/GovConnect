import React from "react";
import bannerImage from "../assets/images/banner.png";

function ImageBanner() {
  const bannerContainerStyle = {
    position: "relative",
    height: "60vh",
    background: `url(${bannerImage}) no-repeat center center/cover`,
    textAlign: "center",
    overflow: "hidden", // Ensures overlay fits perfectly
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust darkness with opacity
    zIndex: 1, // Ensures overlay is behind the text
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
    zIndex: 2, // Ensures text is above the overlay
  };

  const searchBarStyle = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  };

  const inputStyle = {
    width: "350px",
    padding: "10px",
    border: "none",
    borderRadius: "5px 0 0 5px",
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "0 5px 5px 0",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={bannerContainerStyle}>
      <div style={overlayStyle}></div>
      <div style={textContainerStyle}>
        <h1>Instant access to public schemes and services</h1>
        <p>Search, find, and apply for the right scheme for you.</p>
        <div style={searchBarStyle}>
          <input type="text" placeholder="What are you looking for?" style={inputStyle} />
          <button style={buttonStyle}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
