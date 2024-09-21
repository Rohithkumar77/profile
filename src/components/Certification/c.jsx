import './c.css';

const certificationsData = [
  { 
    name: 'Professional Scrum Master 1', 
    issuedBy: 'Scrum.org', 
    date: 'Jan 2021',
    description: 'Covers agile practices and Scrum framework for leading teams.' 
  },
  { 
    name: 'ITSQB Foundation Level', 
    issuedBy: 'ISTQB', 
    date: 'Mar 2020',
    description: 'Validates the tester’s knowledge in software testing fundamentals.' 
  },
  { 
    name: 'Microsoft Certified Azure Fundamentals - AZ-900', 
    issuedBy: 'Microsoft', 
    date: 'Jul 2021',
    description: 'Demonstrates foundational understanding of Azure services and cloud concepts.' 
  },
  { 
    name: 'Microsoft Certified Azure Data Fundamentals - DP-900', 
    issuedBy: 'Microsoft', 
    date: 'Sep 2021',
    description: 'Covers essential data concepts and services in Microsoft Azure.' 
  }
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div className="certification-card" key={index}>
            <h3 className="certification-name">{cert.name}</h3>
            <p className="certification-issued-by">{cert.issuedBy}</p>
            <p className="certification-date">{cert.date}</p>
            <p className="certification-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
