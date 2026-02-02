import React from 'react';
import './App.css';
import Header from './components/common/Header';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Project';
import Skills from './Pages/Skills';
import Contact from './Pages/contact';
import Footer from './Pages/Footer';
import Edugation from './Pages/Edugation';
import HomeButton from './components/common/TopBtn';


function App() {
  return (
    <div className="App">
        <HomeButton/>
        <Header />
        <Hero />
        <About />
        <Edugation/>
        <Projects />
        <Skills />
        <Contact/>
        <Footer />
     
    </div>
  );
}

export default App;
