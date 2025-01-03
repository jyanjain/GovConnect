import React from "react";
import housingImage from "../assets/images/housing.png";
import healthImage from "../assets/images/health.png";
import educationImage from "../assets/images/education.png";
import employmentImage from "../assets/images/employment.png";

function SchemesSection() {
  const sectionStyle = {
    height: "30vh", // Adjust to fit in the remaining space
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const schemesContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const schemeStyle = {
    textAlign: "center",
    width: "120px", // Adjusted to be consistent with smaller images
  };

  const imageStyle = {
    width: "80%", // Reduced the width to make images smaller
    height: "auto",
    borderRadius: "10px",
  };

  return (
    <div style={sectionStyle}>
      <br></br>
      {/* <h2>Top schemes from across the globe</h2> */}
      <div style={schemesContainerStyle}>
        <div style={schemeStyle}>
          <img src={housingImage} alt="Housing" style={imageStyle} />
          <p>Housing</p>
        </div>
        <div style={schemeStyle}>
          <img src={healthImage} alt="Health" style={imageStyle} />
          <p>Health</p>
        </div>
        <div style={schemeStyle}>
          <img src={educationImage} alt="Education" style={imageStyle} />
          <p>Education</p>
        </div>
        <div style={schemeStyle}>
          <img src={employmentImage} alt="Employment" style={imageStyle} />
          <p>Employment</p>
        </div>
      </div>
    </div>
  );
}

export default SchemesSection;
