import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Simulator from './components/Simulator';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Terminal from './components/Terminal';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="ambient-bg">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Simulator />
        <Features />
        <Architecture />
        <Terminal />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default App;
