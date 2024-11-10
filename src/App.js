import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Reach from './components/Reach';
// import Schedule12 from './components/Schedule12';
// import Change from './components/Change';
function App() {
  return (
    <div className="App">
      {/* <Change/> */}
      <Hero />
      <About />
      <Schedule />
      <FAQ />
      <Reach/>
      {/* <Schedule12/> */}
      <Footer/>
    </div>
  );
}

export default App;

