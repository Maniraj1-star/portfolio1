import Header from "../Header";
import "../Pages/Project.css"; // Assuming you have a CSS file for styles
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Project = ({ limit }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProduct(json));

  }, []);

  const displayedProducts = limit ? product.slice(0, limit) : product;
  
  return (
    <>
      <Header />
        <div className="project">
        <h1 className="text-center ">Projects</h1>
        <p className="text-center text-secondary">
          Here are some of my recent projects:
        </p>
        <ul>
          <li>Project 1</li>
        </ul>
        <div className=" img-fluid text-center mb-4 ">
          <img
            src="src/images/silvana_queen_of_frost_8k_wallpaper_by_newjer53_df7n9nq-pre.jpg"
            alt=""
            className="img-thumbnail mb-3"
          />
        </div>
      

      <div className="row gy-4">
        {displayedProducts.map((items, index) => (
          <div key={index} className="col-md-3">
            <div className="card product-card p-2">
              <img
                src={items.image}
                className="card-img-top img-fluid"
                alt={items.title}
              />
              <div className="card-body">
                <span className="badge bg-primary">{items.category}</span>
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{items.description}</p>
              </div>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-primary">
                  Add to cart
                </a>
                <Link to={`/products/${items.id}`} className="btn btn-success">
                  View product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    
        <p className="text-secondary">
          I have worked on various projects that showcase my skills in Front-End
          development, including:
        </p>

        <p className="text-center">
          Feel free to explore my projects and reach out if you have any
          questions or collaboration ideas!
        </p>

        <div className="profile-card">
          <img
            src="src/images/images.jpeg"
            className="profile-picture"
            alt="Profile Picture"
          />
          <h2>Maniraj Rai</h2>
          <p>Front-Developer</p>
          {/* <div className="social-media">
            <a href="#" target="_blank"><i className="bi bi-facebook" style="font-size: 20px; color: #3b5998;"></i></a>
            <a href="#" target="_blank"><i className="bi bi-twitter" style="font-size: 20px; color: #1da1f2;"></i></a>
            <a href="#" target="_blank"><i className="bi bi-linkedin" style="font-size: 20px; color: #0a66c2;"></i></a>
        </div> */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#editProfileModal"
          >
            Edit Profile
          </button>
        </div>

        <div
          className="modal fade"
          id="editProfileModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Profile</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter your title"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="facebook" className="form-label">
                      Facebook
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="facebook"
                      placeholder="Enter your Facebook URL"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="twitter" className="form-label">
                      Twitter
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="twitter"
                      placeholder="Enter your Twitter URL"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="linkedin" className="form-label">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="linkedin"
                      placeholder="Enter your LinkedIn URL"
                    ></input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <p>Thank you for visiting my projects page!</p>
      </div>
    </>
  );
};

export default Project;
