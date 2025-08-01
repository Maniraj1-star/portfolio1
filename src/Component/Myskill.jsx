import React from "react";
import Header from "../Header";

function MySkill() {
  return (
    <>
      <Header />
      <section className="my-skills text-center">
        <div className="skills-banner">
          <h1>My Skills</h1>
        </div>  
        <p>          Here are some of the skills I have acquired over my journey as a developer.
        </p>
        <img src="src/images/skills_image.jpg" alt="Skills" className="skills-image" />
        <p>          I am proficient in various programming languages and frameworks, including JavaScript, React, CSS, and HTML.
        </p>    
        <p>
          I continuously strive to improve my skills and stay updated with the latest technologies in the web development field.
        </p>
        <p>         I enjoy working on challenging projects that allow me to apply my skills and learn new ones.
        </p>
        <p>          If you have any questions or would like to collaborate, feel free to reach out!
        </p>
        <h2>My Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </section>
    </>
  );
}

export default MySkill;
