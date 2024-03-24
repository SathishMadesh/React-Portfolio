
import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  
  useEffect(() => {
    Aos.init();
  },[])

  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
