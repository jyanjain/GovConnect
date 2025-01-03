import React from "react";
import Sidebar from '../components/SideBar';
import Discover from "../components/Discover";
import RecommendedSchemes from "../components/RecommendedSchemes";

function DiscoverScheme() {
  const mainContentStyle = {
    marginLeft: "10px", 
    padding: "20px",    // Optional: Adds padding inside the main content
  };

  return (
    <div>
      <Sidebar />
      <div style={mainContentStyle}>
        <Discover />
        <RecommendedSchemes />
      </div>
    </div>
  );
}

export default DiscoverScheme;
