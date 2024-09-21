import './About.css';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const strengths = [
    {
      title: 'ETL & Data Warehouse Testing Expertise',
      description:
        'Proven proficiency with ETL tools, SQL queries, and complex data transformations for ensuring data accuracy and quality.',
    },
    {
      title: 'Team Leadership & Stakeholder Management',
      description:
        'Extensive experience managing cross-functional teams and building strong stakeholder relationships to drive project success.',
    },
    {
      title: 'Cloud Data Migration & Testing',
      description:
        'Hands-on experience with cloud platforms (Azure, AWS) for database migration, testing, and ensuring seamless cloud integration.',
    },
    {
      title: 'Advanced Test Planning & Execution',
      description:
        'Strategic test planning, execution, and delivery across diverse project environments, ensuring high-quality output.',
    },
  ];

  return (
    <section id="about-me" className="about-me">
      <motion.div
  className="about-me__container"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  <h2 className="about-me__title">About Me</h2>
  <p className="about-me__description">
    I am <strong>Sana Soudagar</strong>, an accomplished <strong>ETL Test Lead/Manager</strong> with 
    <strong>over 14 years of professional experience</strong> in <strong>Quality Assurance</strong>, 
    <strong>Data Warehousing</strong>, and <strong>Database Testing</strong>. I specialize in ensuring 
    high-quality test management for complex data systems, with a focus on both 
    <strong>automation</strong> and <strong>manual testing</strong> techniques.
  </p>
  <p className="about-me__description">
    Throughout my career, I have led cross-functional teams and managed testing across a variety of platforms, 
    including <strong>cloud database migrations</strong> on <strong>Azure</strong> and <strong>AWS</strong>. 
    I have a deep understanding of test data management, ETL processes, and end-to-end testing strategies, 
    ensuring seamless integration and <strong>data quality</strong> throughout complex migration projects.
  </p>
  <p className="about-me__description">
    My expertise extends to collaborating with stakeholders, formulating strategic test plans, and delivering 
    data-driven solutions that align with business objectives. I pride myself on delivering 
    <strong>high-quality testing solutions</strong> that ensure accuracy, performance, and reliability.
  </p>

        <div className="about-me__strengths">
          <h3 className="about-me__subtitle">Key Strengths</h3>
          <div className="strengths__grid">
            {strengths.map((strength, index) => (
              <motion.div
                className="strength-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h4 className="strength-card__title">{strength.title}</h4>
                <p className="strength-card__description">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
