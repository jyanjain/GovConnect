// import React from "react";

// function Navbar(){
//     const navbarStyle = {
//         display: "flex",
//         justifyContent: "space-between",
//         padding: "10px 20px",
//         backgroundColor: "#f8f9fa",
//       };
    
//       const brandStyle = {
//         fontSize: "1.5rem",
//         fontWeight: "bold",
//       };
    
//       const linkStyle = {
//         marginLeft: "20px",
//         textDecoration: "none",
//         color: "#007bff",
//       };

//     return(
//         <nav style={navbarStyle}>
//       <div style={brandStyle}>GovConnect</div>
//       <div>
//         <a href="/schemes" style={linkStyle}>Schemes</a>
//         <a href="/profile" style={linkStyle}>Profile</a>
//       </div>
//     </nav>
//     );
// }

// export default Navbar;

import React from "react";

function Navbar({ links }) {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
  };

  const brandStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const linkStyle = {
    marginLeft: "20px",
    textDecoration: "none",
    color: "#007bff",
  };

  return (
    <nav style={navbarStyle}>
      <div style={brandStyle}>GovConnect</div>
      <div>
        {links.map((link, index) => (
          <a key={index} href={link.href} style={linkStyle}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
