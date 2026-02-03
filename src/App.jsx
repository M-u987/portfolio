import React from "react-router-dom";
import './App.css';
import Header from './components/common/Header.jsx';
import Hero from './Pages/Hero.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Project.jsx';
import Skills from './Pages/Skills.jsx';
import Contact from './Pages/contact.jsx';
import Footer from './Pages/Footer.jsx';
import Edugation from './Pages/Edugation.jsx';
import HomeButton from './components/common/TopBtn.jsx';
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
        <Edugation/>
        <Projects />
        <Skills />
        <Contact/>
        <Footer />
     
    </div>
  );
}

export default App;
