import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import "./index.css"; // Assuming you have a global CSS file for styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About.jsx";
import MySkill from "./Component/Myskill.jsx";
import Experience from "./Component/Experience.jsx";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/skills",
    element: <MySkill />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
