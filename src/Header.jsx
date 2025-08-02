import React from "react";
import "./Header.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";


function Header() {

  return (
    <header> 

      <div className="header-container">
            <h1>Welcome to My Portfolio</h1>
             <p>Explore my projects, skills, and experiences.</p>

        <div className="logo-container">
          <a href="/" className="logo-link">
            <img src="/logo.png" alt="Logo" className="logo" />
          </a>
          <div className="tagline"> 
           
          </div>
        </div>
        
      </div>
     
      <nav className="nav-links">
        <ul>
          <li>
           <Link to={"/about"} target="_blank" rel="noopener noreferrer">About</Link>
          </li>
          <li>
            <Link to={"/skills"} target="_blank" rel="noopener noreferrer">Skills</Link>
          </li>
          <li>
            <Link to={"/experience"} target="_blank" rel="noopener noreferrer">Experience</Link>
          </li>
          <li>
            <Link to={"/projects"} target="_blank" rel="noopener noreferrer">Projects</Link>
          </li>
          <li>
            <Link to={"/contact"} target="_blank" rel="noopener noreferrer">Contact</Link>
          </li>
        </ul>
      </nav>
   
      <div className="search-bar">
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
        
    </header>
  );
}

export default Header;
