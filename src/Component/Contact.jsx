import React from "react";
import Header from "../Header";
import "../Pages/Contact.css"; // Assuming you have a CSS file for styles
import { useState } from "react";


function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("✅ Email sent successfully!");
      } else {
        setStatus("❌ Failed to send email.");
        setFormData({ name: "", email: "", message: "" });
        console.error("Error sending email:", result.error);
      }
    } catch (err) {
      setStatus("⚠️ Error: " + err.message);
      console.error("Error sending email:", err);
      setFormData({ name: "", email: "", message: "" });

    }
  };

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
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto p-4 shadow rounded">
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">Send</button>
      <p>{status}</p>
    </form>
       
        <div className="social-media-links">
          <h2 className="text-center mt-4 text-Dark">Connect with Me</h2>
          <div className="social-media ">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Maniraj Rai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/Maniraj Rai"
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
                href="https://www.linkedin.com/in/Maniraj Rai"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Maniraj Rai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Maniraj Rai"
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
