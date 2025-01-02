import React from "react";
import housingImage from '../assets/images/housing.png'
import healthImage from '../assets/images/health.png'
import employmentImage from '../assets/images/employment.png'
import educationImage from '../assets/images/education.png'

function SchemesSection() {
  const sectionStyle = {
    marginTop: "50px",
    textAlign: "center",
  };

  const schemesContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const schemeStyle = {
    textAlign: "center",
    width: "150px",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  return (
    <div style={sectionStyle}>
      <h2>Top schemes from across the globe</h2>
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
