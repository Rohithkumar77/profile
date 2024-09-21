import './we.css';

const workExperienceData = [
  {
    role: 'Quality Engineering Lead',
    company: 'Infosys Ltd.',
    date: 'Jan 2020 - Present',
    description: `Leading a team of QA engineers in a dynamic environment, focusing on enhancing 
    quality assurance processes, implementing automated testing frameworks, and ensuring timely 
    delivery of high-quality software products.`,
  },
  { 
    role: 'Associate',
    company: 'Cognizant',
    date: 'Mar 2016 - Dec 2019',
    description: `Worked as part of the QA team on various projects, involved in both manual and automated 
    testing phases, developed comprehensive test plans, and worked closely with stakeholders to ensure 
    alignment with project requirements and quality standards.`,
  },
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <section className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="work-experience-list">
        {workExperienceData.map((exp, index) => (
          <div className="work-experience-card" key={index}>
            <h3 className="work-experience-role">{exp.role}</h3>
            <p className="work-experience-company">{exp.company}</p>
            <p className="work-experience-date">{exp.date}</p>
            <p className="work-experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
