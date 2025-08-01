import React from "react";
import Header from "../Header";
import "../About.css"; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <>
      <Header/>
      <section>

        <div className="about-banner">
            <h1 className="text-secondary">About Me</h1>
            <p>Learn more about my journey and skills.</p>
        </div>
        <div className="hero-image">
                <p>I am a passionate developer with experience in building web applications.</p>
            <p>I love creating user-friendly interfaces and solving complex problems.</p>
            <p>I am constantly learning and adapting to new technologies to improve my skills.</p>
        
          <img src="src/images/silvana_queen_of_frost_8k_wallpaper_by_newjer53_df7n9nq-pre.jpg" alt="Hero" />
 
        

        </div>
        
       
  
    </section>
    </>
   
  );
};

export default About;
