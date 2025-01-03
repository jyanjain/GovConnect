import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";

function UploadDocuments() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({
    aadhar: null,
    pan: null,
    balanceSheet: null,
    returnFile: null,
  });

  const navigate = useNavigate(); // Initialize the navigate function

  // Inline Styles
  const containerStyle = {
    height: "calc(100vh - 60px)", // Adjusted height to account for Navbar
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f8f9fc",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    margin: "0",
    marginTop: "0", // Removed negative margin
    overflow: "hidden", // Prevent scrolling
  };
  

  const headerStyle = {
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  };

  const subTitleStyle = {
    fontSize: "16px",
    color: "#6c757d",
    margin: "10px 0 0",
  };

  const sectionStyle = {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "30px",
  };

  const sectionHeaderStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "left",
  };

  const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
  };

  const cardStyle = (isSelected) => ({
    flex: 1,
    border: `2px solid ${isSelected ? "#007bff" : "#ccc"}`,
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#fff",
    transition: "border-color 0.3s",
  });

  const uploadedTextStyle = {
    color: "green",
    marginTop: "8px",
  };

  const uploadZoneStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#f8f9fc",
    cursor: "pointer",
    marginTop: "20px",
  };

  const uploadButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  };

  const proceedButtonStyle = (isEnabled) => ({
    width: "100%",
    maxWidth: "800px",
    backgroundColor: isEnabled ? "#007bff" : "#ccc",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px 20px",
    border: "none",
    cursor: isEnabled ? "pointer" : "not-allowed",
    marginTop: "30px",
    fontSize: "16px",
  });

  // Event Handlers
  const handleCardClick = (docType) => {
    setSelectedDoc(docType);
  };

  const handleUpload = () => {
    if (!selectedDoc) {
      alert("Please select a document to upload.");
      return;
    }

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setUploadedFiles((prev) => ({
          ...prev,
          [selectedDoc]: file.name, // Store file name
        }));
        setSelectedDoc(null);
      }
    };
    input.click();
  };

  const handleProceed = () => {
    navigate("/discover"); // Redirect to Discover Schemes page
  };

  // Allow submission with only Aadhar and PAN card
  const allFilesUploaded = uploadedFiles.aadhar && uploadedFiles.pan;

  return (
    <div>
      <Navbar links={[{ href: "/chatbot", label: "ChatBot" }]} />
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Verify your documents</h1>
          <p style={subTitleStyle}>
            Please upload photos of your documents so we can verify your
            identity and income.
          </p>
        </div>

        {/* ID Proof Section */}
        <div style={sectionStyle}>
          <h2 style={sectionHeaderStyle}>ID Proof</h2>
          <div style={cardContainerStyle}>
            <div
              style={cardStyle(selectedDoc === "aadhar")}
              onClick={() => handleCardClick("aadhar")}
            >
              <p>Aadhar Card</p>
              {uploadedFiles.aadhar && (
                <p style={uploadedTextStyle}>
                  Uploaded: {uploadedFiles.aadhar}
                </p>
              )}
            </div>
            <div
              style={cardStyle(selectedDoc === "pan")}
              onClick={() => handleCardClick("pan")}
            >
              <p>Pan Card</p>
              {uploadedFiles.pan && (
                <p style={uploadedTextStyle}>Uploaded: {uploadedFiles.pan}</p>
              )}
            </div>
          </div>
        </div>

        {/* Upload Zone */}
        <div style={uploadZoneStyle} onClick={handleUpload}>
          <p>Drag and drop your file here</p>
          <button style={uploadButtonStyle}>Upload</button>
        </div>

        {/* Proceed Button */}
        <button
          style={proceedButtonStyle(allFilesUploaded)}
          disabled={!allFilesUploaded}
          onClick={handleProceed}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default UploadDocuments;
