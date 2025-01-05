import React, { useRef } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

function SchemeDetail() {
  const { title } = useParams();
  const navigate = useNavigate();

  const overviewRef = useRef(null);
  const benefitsRef = useRef(null);
  const eligibilityRef = useRef(null);
  const documentsRef = useRef(null);

  const schemes = {
    'atal-pension-yojana': {
      title: 'Atal Pension Yojana',
      overview: 'APY is a voluntary, periodic contribution-based pension system...',
      benefits: ['Funding', 'Pension', 'Consultancy'],
      eligibility: [
        'Be an Indian citizen',
        'Be between the ages of 18 and 40',
        'Have a savings bank account...',
      ],
      documents: ['Aadhar Card', 'Bank Account', 'KYC documents'],
    },
    'sukanya-samriddhi-yojana': {
      title: 'Sukanya Samriddhi Yojana',
      overview: 'SSY is a government-backed savings scheme...',
      benefits: ['Tax Benefits', 'High Interest Rate', 'Government Backing'],
      eligibility: ['Girl child below 10 years of age', 'Indian Resident'],
      documents: ['Birth Certificate', 'Address Proof', 'Identity Proof'],
    },
  };

  const currentScheme = schemes[title] || Object.values(schemes)[0];

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSchemeClick = (schemeTitle) => {
    const formattedTitle = schemeTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/scheme/${formattedTitle}`);
  };

  const sidebarStyle = {
    width: '250px',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#f5f5f5',
    padding: '20px',
    overflowY: 'auto',
  };

  const discoverLinkStyle = {
    display: 'block',
    padding: '10px',
    marginBottom: '20px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    borderBottom: '2px solid #333',
    width: 'fit-content',
  };

  const activeDiscoverLinkStyle = {
    ...discoverLinkStyle,
    color: '#007bff',
    borderBottom: '2px solid #007bff',
  };

  const schemeItemStyle = (isActive) => ({
    padding: '10px',
    cursor: 'pointer',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#007bff' : '#333',
    borderRadius: '5px',
    marginBottom: '8px',
    backgroundColor: isActive ? '#dfe6e9' : 'transparent',
  });

  const contentStyle = {
    marginLeft: '300px',
    padding: '20px',
  };

  const sectionHeaderStyle = {
    fontSize: '1.25em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const sectionTextStyle = {
    fontSize: '1.10em',
    lineHeight: '1.5',
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Section */}
      <div style={sidebarStyle}>
        <NavLink
          to="/discover"
          style={({ isActive }) => (isActive ? activeDiscoverLinkStyle : discoverLinkStyle)}
        >
          Discover Schemes
        </NavLink>

        {Object.entries(schemes).map(([key, scheme]) => (
          <div
            key={key}
            style={schemeItemStyle(key === title)}
            onClick={() => handleSchemeClick(scheme.title)}
          >
            {scheme.title}
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div style={contentStyle}>
        <h1 style={sectionHeaderStyle}>{currentScheme.title}</h1>
        <div style={{ borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
          <button onClick={() => scrollToSection(overviewRef)} style={{ padding: '8px 16px', margin: '0 8px', border: 'none', background: 'none', cursor: 'pointer' }}>Overview</button>
          <button onClick={() => scrollToSection(benefitsRef)} style={{ padding: '8px 16px', margin: '0 8px', border: 'none', background: 'none', cursor: 'pointer' }}>Benefits</button>
          <button onClick={() => scrollToSection(eligibilityRef)} style={{ padding: '8px 16px', margin: '0 8px', border: 'none', background: 'none', cursor: 'pointer' }}>Eligibility</button>
          <button onClick={() => scrollToSection(documentsRef)} style={{ padding: '8px 16px', margin: '0 8px', border: 'none', background: 'none', cursor: 'pointer' }}>Documents</button>
        </div>

        <div ref={overviewRef} style={{ marginBottom: '10px' }}>
        <h3 style={{ ...sectionHeaderStyle, marginBottom: '8px' }}>Overview</h3>
        <p style={{ ...sectionTextStyle, marginTop: '0', marginBottom: '0' }}>
    {currentScheme.overview}
  </p>
        </div>

        <div ref={benefitsRef} style={{ marginBottom: '20px' }}>
          <h3 style={sectionHeaderStyle}>Benefits</h3>
          <div style={{ display: 'flex', gap: '20px' }}>
            {currentScheme.benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  padding: '16px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  fontSize: '1.10em',
                }}
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div ref={eligibilityRef} style={{ marginBottom: '20px' }}>
          <h3 style={sectionHeaderStyle}>Eligibility</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentScheme.eligibility.map((criterion, index) => (
              <label
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '1.10em',
                }}
              >
                <input type="checkbox" checked readOnly />
                {criterion}
              </label>
            ))}
          </div>
        </div>

        <div ref={documentsRef}>
          <h3 style={sectionHeaderStyle}>Required Documents</h3>
          <ul style={{marginTop:'0px', paddingLeft: '20px', fontSize: '1.10em' }}>
            {currentScheme.documents.map((document, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>{document}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SchemeDetail;
