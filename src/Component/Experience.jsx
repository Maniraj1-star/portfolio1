import React from "react";
import Header from "../Header";
import "../Pages/Experience.css"; // Assuming you have a CSS file for styling

function Experience() {

  return (
    <>

      <Header />
      

      <section className="experience text-center">


        <div className="experience-banner">
          <h1 className="text-secondary">My Experience</h1>
        </div>
        <div className="experience-section">
          <ul>
            <li>Company A - Frontend Developer (2020-2021)</li>
            <li>Company B - Full Stack Developer (2021-2022)</li>
          </ul>
        </div>
        <p>
          Welcome to my experience section! Here, I share my professional journey and the roles I've undertaken.
        </p>
        <img src="src/images/experience_image.jpg" alt="Experience" className="experience-image" />
        <p>
          I have worked in various capacities, honing my skills and contributing to diverse projects.
        </p>

        <ul>

          <li>

            <p>
              Here you can find details about my professional experience,
              including roles, responsibilities, and achievements.
            </p>
            <p>
              Feel free to explore my journey through various positions and
              projects that have shaped my career.
            </p>
          </li>

        </ul>
      </section>
    </>
  );
}

export default Experience;
