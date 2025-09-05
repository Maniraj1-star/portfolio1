// import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About.jsx";
import MySkill from "./Component/Myskill.jsx";
import Experience from "./Component/Experience.jsx";
import Project from "./Component/Project.jsx";
import Contact from "./Component/Contact.jsx";


function App() {

  
  return (
    <>
      <Header />    
      <Body />  
      {/* <div className="text-center">
        <li className="About" About>
          <a href="/about" target="_blank" rel="noopener noreferrer">
            <a href={About}>About </a>
          </a>
        </li>
        <li className="Skills" Skills>
          <a href="/skills" target="_blank" rel="noopener noreferrer">
            <a href={MySkill}>Skills </a>
          </a>
        </li>
        <li className="Projects" Projects>
          <a href="/projects" target="_blank" rel="noopener noreferrer">
            <a href={Project}>Projects </a>
          </a>
        </li>
        <li className="Contact" Contact>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <a href={Contact}>Contact </a>
          </a>
        </li>
        <li className="Home" Home>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <a href={Body}>Home </a>
          </a>
        </li>
        <li className="Experience" Experience>
          <a href="/experience" target="_blank" rel="noopener noreferrer">
            <a href={Experience}>Experience </a>
          </a>
        </li>

        <a href=""></a>
      </div> */}
   

      <div className="text-center">
        <p>This project is created by Maniraj RAi.</p>
      </div>
    </>
  );
}

export default App;
