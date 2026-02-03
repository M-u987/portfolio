// import React from "react-router-dom";
import './App.css';
import Header from './components/common/header.jsx';
import Hero from './pages/temb.jsx';
import About from './pages/about.jsx';
import Projects from './pages/project.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';
import Footer from './pages/footer.jsx';
import Edugation from './pages/edugation.jsx';
import HomeButton from './components/common/topbtn.jsx';
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
