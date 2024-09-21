import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certification from './components/Certification/c';
import WorkExperience from './components/workexperience/we';

function App() {
  return (
    <>
      <Navbar />
      <section id="About-me"><About /></section>
      <section id="Skills"><Skills /></section>
      <section id="Certifications"><Certification /></section>
      <section id="Work-Experience"><WorkExperience /></section>
    </>
  );
}

export default App;
