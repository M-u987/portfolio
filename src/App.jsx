// import React from "react-router-dom";
import './App.css';
import Header from './components/common/header';
import Hero from './pages/body';
import About from './pages/about';
import Projects from './pages/project';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Edugation from './pages/edugation';
import HomeButton from './components/common/topbtn';
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
