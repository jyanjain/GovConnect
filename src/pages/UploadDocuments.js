import React, { useState } from "react";
import Navbar from "../components/Navbar";

function UploadDocuments() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({
    aadhar: null,
    pan: null,
    balanceSheet: null,
    returnFile: null,
  });

  const containerStyle = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subHeaderStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  };

  const sectionHeaderStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "20px 0 10px",
    textAlign: "left",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  };

  const cardStyle = (isSelected) => ({
    flex: 1,
    border: `2px solid ${isSelected ? "#007bff" : "#ccc"}`,
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
  });

  const uploadButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  };

  const proceedButtonStyle = {
    backgroundColor:
      uploadedFiles.aadhar &&
      uploadedFiles.pan &&
      uploadedFiles.balanceSheet &&
      uploadedFiles.returnFile
        ? "#007bff"
        : "#ccc",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px 20px",
    border: "none",
    cursor:
      uploadedFiles.aadhar &&
      uploadedFiles.pan &&
      uploadedFiles.balanceSheet &&
      uploadedFiles.returnFile
        ? "pointer"
        : "not-allowed",
    marginTop: "20px",
  };

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
          [selectedDoc]: file.name, // Store file name (or URL for database integration)
        }));
        setSelectedDoc(null); // Reset selection
      }
    };
    input.click();
  };

  return (
    <div>
      <Navbar
        links={[
          { href: "/chatbot", label: "ChatBot" },
        ]}
      />
      <div style={containerStyle}>
        <h1 style={headerStyle}>Verify your documents</h1>
        <p style={subHeaderStyle}>
          Please upload photos of your documents so we can verify your identity and income.
        </p>

        <div>
          <h2 style={sectionHeaderStyle}>ID Proof</h2>
          <div style={cardContainerStyle}>
            <div
              style={cardStyle(selectedDoc === "aadhar")}
              onClick={() => handleCardClick("aadhar")}
            >
              <p>Aadhar Card</p>
              {uploadedFiles.aadhar && <p style={{ color: "green" }}>Uploaded: {uploadedFiles.aadhar}</p>}
            </div>
            <div
              style={cardStyle(selectedDoc === "pan")}
              onClick={() => handleCardClick("pan")}
            >
              <p>Pan Card</p>
              {uploadedFiles.pan && <p style={{ color: "green" }}>Uploaded: {uploadedFiles.pan}</p>}
            </div>
          </div>
        </div>

        <div>
          <h2 style={sectionHeaderStyle}>Income Verification</h2>
          <div style={cardContainerStyle}>
            <div
              style={cardStyle(selectedDoc === "balanceSheet")}
              onClick={() => handleCardClick("balanceSheet")}
            >
              <p>Balance Sheet</p>
              {uploadedFiles.balanceSheet && (
                <p style={{ color: "green" }}>Uploaded: {uploadedFiles.balanceSheet}</p>
              )}
            </div>
            <div
              style={cardStyle(selectedDoc === "returnFile")}
              onClick={() => handleCardClick("returnFile")}
            >
              <p>Return File</p>
              {uploadedFiles.returnFile && (
                <p style={{ color: "green" }}>Uploaded: {uploadedFiles.returnFile}</p>
              )}
            </div>
          </div>
        </div>
<div>
        <button style={uploadButtonStyle} onClick={handleUpload}>
          Upload
        </button>
        </div>
        <button
          style={proceedButtonStyle}
          disabled={
            !uploadedFiles.aadhar ||
            !uploadedFiles.pan ||
            !uploadedFiles.balanceSheet ||
            !uploadedFiles.returnFile
          }
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default UploadDocuments;
