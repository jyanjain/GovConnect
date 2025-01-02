import React from "react";

function SchemeCard({ title, description, image }) {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    margin: "20px 0",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
  };

  const textStyle = {
    flex: 1,
  };

  const imageStyle = {
    width: "150px",
    height: "auto",
    marginLeft: "20px",
    borderRadius: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <div style={textStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button style={buttonStyle}>View details</button>
      </div>
      <img src={image} alt={title} style={imageStyle} />
    </div>
  );
}

export default SchemeCard;
