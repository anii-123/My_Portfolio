import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Timeline from '../components/sections/Timeline';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';

const Home = ({ onSelectProject }) => {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Projects onSelectProject={onSelectProject} />
      <Skills />
      <Timeline />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;
