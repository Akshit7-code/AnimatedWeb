import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Technology from './components/Technology.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Gallery />
      <Technology />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
