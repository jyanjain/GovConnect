import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

function SchemeDetail() {
  const { title } = useParams();
  const navigate = useNavigate();

  const overviewRef = useRef(null);
  const benefitsRef = useRef(null);
  const eligibilityRef = useRef(null);
  const documentsRef = useRef(null);

  // Hardcoded schemes data
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

  const [searchTerm, setSearchTerm] = useState('');
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

  const contentStyle = {
    marginLeft: '300px', // Adjusted to leave space for the sidebar
    padding: '20px',
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '20px',
  };

  const schemeListStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const schemeItemStyle = (isActive) => ({
    padding: '8px 0',
    cursor: 'pointer',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#007bff' : 'inherit',
  });

  const navButtonStyle = {
    padding: '8px 16px',
    margin: '0 8px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
  };

  const filteredSchemes = Object.entries(schemes).filter(([key, scheme]) =>
    scheme.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Section */}
      <div style={sidebarStyle}>
        <div style={searchContainerStyle}>
          <Search size={20} />
          <input
            type="text"
            placeholder="Search schemes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              marginLeft: '8px',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              width: '100%',
            }}
          />
        </div>

        <ul style={schemeListStyle}>
          {filteredSchemes.map(([key, scheme]) => (
            <li
              key={key}
              style={schemeItemStyle(key === title)}
              onClick={() => handleSchemeClick(scheme.title)}
            >
              {scheme.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Section */}
      <div style={contentStyle}>
        <h1>{currentScheme.title}</h1>
        <div style={{ borderBottom: '1px solid #ddd', marginBottom: '20px' }}>
          <button onClick={() => scrollToSection(overviewRef)} style={navButtonStyle}>Overview</button>
          <button onClick={() => scrollToSection(benefitsRef)} style={navButtonStyle}>Benefits</button>
          <button onClick={() => scrollToSection(eligibilityRef)} style={navButtonStyle}>Eligibility</button>
          <button onClick={() => scrollToSection(documentsRef)} style={navButtonStyle}>Documents</button>
        </div>

        {/* Sections */}
        <div ref={overviewRef} style={{ marginBottom: '40px' }}>
          <h2>Overview</h2>
          <p>{currentScheme.overview}</p>
        </div>

        <div ref={benefitsRef} style={{ marginBottom: '40px' }}>
          <h2>Benefits</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            {currentScheme.benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  padding: '16px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                }}
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div ref={eligibilityRef} style={{ marginBottom: '40px' }}>
          <h2>Eligibility</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {currentScheme.eligibility.map((criterion, index) => (
              <label
                key={index}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <input type="checkbox" checked readOnly />
                {criterion}
              </label>
            ))}
          </div>
        </div>

        <div ref={documentsRef}>
          <h2>Required Documents</h2>
          <ul style={{ paddingLeft: '20px' }}>
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
