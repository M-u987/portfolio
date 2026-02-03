// import React from "react-router-dom";
import './App.css';
import Header from './components/common/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Education from './pages/Education';
import HomeButton from './components/common/TopBtn';
import { useState } from "react";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className= {theme === "dark" ? "dark" : ""} >
        <HomeButton/>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Education/>
        <Projects />
        <Skills />
        <Contact/>
        <Footer />
     
    </div>
  );
}

export default App;
