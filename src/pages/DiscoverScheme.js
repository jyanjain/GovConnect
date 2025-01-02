import React from "react";
import Sidebar from '../components/SideBar';
import Discover from "../components/Discover";
import RecommendedSchemes from "../components/RecommendedSchemes";

function DiscoverScheme() {
  return (
    <div>
      <Sidebar />
      <Discover />
      <RecommendedSchemes />
    </div>
  );
}

export default DiscoverScheme;
