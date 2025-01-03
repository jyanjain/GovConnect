import React from "react";

function Navbar({ links }) {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#000",
  };

  // const brandLogoStyle = {
  //   width: "20px",
  //   height: "20px",
  //   marginRight: "10px",
  // };

  const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#000",
    fontSize: "0.9rem",
  };

  const profileButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    cursor: "pointer",
  };

  return (
    <nav style={navbarStyle}>
      <div style={brandStyle}>
        {/* <img
          src="https://via.placeholder.com/20" // Replace with the actual logo URL
          alt="Logo"
          style={brandLogoStyle}
        /> */}
        GovConnect
      </div>
      <div style={linkContainerStyle}>
        {links.map((link, index) =>
          link.label === "Profile" ? (
            <button
              key={index}
              style={profileButtonStyle}
              onClick={() => (window.location.href = link.href)}
            >
              {link.label}
            </button>
          ) : (
            <a key={index} href={link.href} style={linkStyle}>
              {link.label}
            </a>
          )
        )}
      </div>
    </nav>
  );
}

export default Navbar;
