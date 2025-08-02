import React from "react";
import Header from "../Header";
import "../Pages/Contact.css"; // Assuming you have a CSS file for styles

function Contact() {

  return (
    <>
      <Header />

      <div className="contact-us ">
        <h1 className="text-center">Contact Me</h1>
        <div className="contact-info ">
          <p>Email: raimaniraj658@gmail.com</p>
          <p>Phone: 9821780446</p>
        </div>
        <p className="text-center text-secondary">
          Feel free to reach out for any inquiries or collaboration
          opportunities!
        </p> <div className="container" id="contact">
        <h2 className="display-5">Get in touch</h2>
        <div className="contact-form">
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Maniraj"></input>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="raimaniraj658@gmail.com"></input>
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" placeholder="Your message here..."></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Send message</button>
            </form>
       
        <div className="social-media-links">
          <h2 className="text-center mt-4 text-Dark">Connect with Me</h2>
          <div className="social-media ">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <ul className="list-unstyled text-end">
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
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
