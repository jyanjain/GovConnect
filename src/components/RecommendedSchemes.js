import React from "react";
import SchemeCard from "./SchemeCard";
import atal from "../assets/images/atal.png";
import sukanya from "../assets/images/sukanya.png";
import vocab from "../assets/images/vocab.png";

function RecommendedSchemes() {
  const schemes = [
    {
      title: "Sukanya Samriddhi Yojana",
      description:
        "SSY is a government-backed savings scheme in India that helps parents save for their daughter's education and marriage.",
      image: sukanya,
    },
    {
      title: "Atal Pension Yojana",
      description:
        "Central Government guaranteed minimum pension amount: Each subscriber under APY shall receive a Central Government pension.",
      image: atal,
    },
    {
      title: "Vocational Rehabilitation Services",
      description:
        "A service aimed at supporting individuals in finding employment opportunities and skills training.",
      image: vocab,
    },
  ];

  const containerStyle = {
    marginLeft: "270px",
    marginTop: "-30px",
    padding: "20px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0",
    marginTop: "-20px",
    // marginBottom: "-30px",
    // marginRight: "70px",
  };

  return (
    <div style={containerStyle}>
      <h2>Recommended Schemes</h2>
      <div style={cardContainerStyle}>
        {schemes.map((scheme, index) => (
          <SchemeCard
            key={index}
            title={scheme.title}
            description={scheme.description}
            image={scheme.image}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedSchemes;
