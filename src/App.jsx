// src/App.jsx
import React from 'react';

import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader.jsx';

import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Background dekoratif */}
      <div className="app-particles" aria-hidden="true">
        <ParticleBackground />
      </div>

      {/* Konten utama */}
      <div className="app-content">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Loading screen */}
      <PageLoader />
    </div>
  );
};

export default App;