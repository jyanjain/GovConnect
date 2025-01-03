import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function CreateProfile() {
  const navigate = useNavigate();

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  };

  const formStyle = {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "5px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const selectStyle = {
    ...inputStyle,
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleButtonClick = () => {
    navigate("/upload");
  };

  return (
    <div>
      <Navbar
        links={[
          { href: "/", label: "Home" },
          { href: "/discover", label: "Discover Schemes" },
          { href: "/upload", label: "Upload Documents" },
          { href: "/chatbot", label: "ChatBot" },
        ]}
      />
      <div style={formContainerStyle}>
        <h1 style={headerStyle}>Create Your Profile</h1>
        <form style={formStyle}>
          <div>
            <label style={labelStyle}>First Name / नाम</label>
            <input type="text" style={inputStyle} placeholder="Enter your first name" />
          </div>
          <div>
            <label style={labelStyle}>Last Name / उपनाम</label>
            <input type="text" style={inputStyle} placeholder="Enter your last name" />
          </div>
          <div>
            <label style={labelStyle}>Email / ईमेल</label>
            <input type="email" style={inputStyle} placeholder="Enter your email" />
          </div>
          <div>
            <label style={labelStyle}>Income / आय</label>
            <select style={selectStyle}>
              <option value="">Select your income range</option>
              <option value="low">Below ₹1,00,000</option>
              <option value="mid">₹1,00,000 - ₹5,00,000</option>
              <option value="high">Above ₹5,00,000</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Date of Birth / जन्म तिथि</label>
            <input type="date" style={inputStyle} />
          </div>
        </form>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={handleButtonClick}>
            Create Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
