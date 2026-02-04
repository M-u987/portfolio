// import React from "react-router-dom";
import './App.css';
import Header from './components/common/Header';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Project';
import Skills from './Pages/Skills';
import Contact from './Pages/contact';
import Footer from './Pages/Footer';
import Education from './Pages/Education';
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
