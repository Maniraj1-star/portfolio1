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
        
      <section className="about-section">      
          <p>
            &copy; {new Date().getFullYear()} Maniraj RAi. All rights reserved.
          </p>
      </section>
       <div className="card-text text-end">
        <button onClick={() => alert('Hello Developer ?')}>
          <i className="bi bi-hand-thumbs-up"></i>
          <span className="ms-2">Click Me</span>
        </button>
      </div>
    </section>
    <div className="image-profile">
      <img src="src/images/images.jpeg" alt="" />
    </div>

  </main>
    </>
  );

}
export default Body;
