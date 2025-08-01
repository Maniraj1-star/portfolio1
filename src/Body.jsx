import React from "react";
import "./Body.css"; // Assuming you have a CSS file for styling

function Body() {
 
  return (
    <>
    
    
      <main className="main-content  text-dark p-4 rounded shadow mb-4 container">
    
      <div className="hero-image">
        <img src="path/to/your/image.jpg" alt="Hero" />
      </div>

      <section className="section-row">
        
           <div className="projects-section row-lg-4">
        <h2>My Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
      <div className="contact-section">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <section className="about-section">
        <div className="about-section">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with experience in building web
            applications. I love creating user-friendly interfaces and solving
            complex problems.
          </p>
        </div>
       
        <div className="footer">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
        <div className="social-media">
          <h2>Connect with Me</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-info ">
          <p>Email: raimaniraj658@gmail.com</p>
          <p>Phone: 9821780446</p>
        </div>
        <div className="download-resume">

          <a href="/resume.pdf" download>

            <p>my resume</p>

            <p>Download Resume</p>
          </a>
        </div>
        <div className="footer">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </section>
       <div className="card-text">
        <button onClick={() => alert('Hello Developer?')}>
          Click me
        </button>
      </div> 
      <p>
        <a href="https://vitejs.dev/guide/features.html#hot-module-replacement" target="_blank">
          Vite Docs
        </a>
      </p>
    </section>
    <div className="social-media">

<ul>
  <li>
    <a href="https://www.facebook.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-facebook"></i>
    </a>
  </li>
</ul>
        </div>
 </main>
    
   
  </>
  );
}

export default Body;
