import './Skills.css';
import { motion } from 'framer-motion';
import qa from '../../assets/qa.jpg'
import dw from '../../assets/dw.png'
import elt from '../../assets/elt.jpg'
import dt from '../../assets/dt.jpg'
import cm from '../../assets/cm.jpg'
import at from '../../assets/at.jpg'
import mt from '../../assets/mt.jpg'

const skillsData = [
  { name: 'Quality Assurance', image: qa },
  { name: 'Data Warehousing', image: dw },
  { name: 'ETL Testing', image: elt },
  { name: 'Database Testing', image: dt },
  { name: 'Cloud Migration', image: cm },
  { name: 'Automation Testing', image: at },
  { name: 'Manual Testing', image: mt },
];

const Skills = () => {
  return (
    <>
      <section className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="technical-skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-table-wrapper">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Testing Management Tools</td>
                <td>HP ALM, JIRA, ADO</td>
              </tr>
              <tr>
                <td>Version Control</td>
                <td>Git, Bitbucket, ADO</td>
              </tr>
              <tr>
                <td>Reporting Tool</td>
                <td>BO Reports, SAS EG Reports, MSBI Reports, Cognos Reports, Power BI Dashboard</td>
              </tr>
              <tr>
                <td>Cloud Platform</td>
                <td>Amazon Web Services, Salesforce, Microsoft Azure</td>
              </tr>
              <tr>
                <td>Databases</td>
                <td>Oracle SQL Developer, Microsoft SQL Server, PostgreSQL, Druid, Neo4j, MongoDB, MySQL, Azure Data Bricks</td>
              </tr>
              <tr>
                <td>Programming Languages</td>
                <td>Java, Python, Groovy</td>
              </tr>
              <tr>
                <td>ETL Tool</td>
                <td>Informatica PowerCenter, Informatica</td>
              </tr>
              <tr>
                <td>Methodologies</td>
                <td>Agile using Scrum, Waterfall, SAFe Agile</td>
              </tr>
              <tr>
                <td>TDM Tools</td>
                <td>iTDMS, Broadcom CA TDM Tool</td>
              </tr>
              <tr>
                <td>OS</td>
                <td>Windows</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Skills;
