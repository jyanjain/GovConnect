import React from "react";
import { useNavigate } from 'react-router-dom';

function SchemeCard({ title, description, image }) {
  const navigate = useNavigate();

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    margin: "20px 0",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer"
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
    transition: "background-color 0.2s"
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/scheme/${formattedTitle}`); 
  };
  

  return (
    <div style={cardStyle} onClick={handleClick}>
      <div style={textStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button 
          style={buttonStyle}
          onClick={handleClick}
        >
          View details
        </button>
      </div>
      <img src={image} alt={title} style={imageStyle} />
    </div>
  );
}

export default SchemeCard;