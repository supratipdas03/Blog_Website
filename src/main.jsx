import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import BlogPost1 from "./components/BlogPost1.jsx";
import BlogPost2 from "./components/BlogPost2.jsx";
import BlogPost3 from "./components/BlogPost3.jsx";
import BlogPost4 from "./components/BlogPost4.jsx";
import BlogPost5 from "./components/BlogPost5.jsx";
import BlogPost6 from "./components/BlogPost6.jsx";
import SportsBlog from "./components/SportsBlog.jsx";
import TechBlog from "./components/TechBlog.jsx";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/BlogPost1",
    element: (
      <>
        <BlogPost1 />
      </>
    ),
  },
  {
    path: "/BlogPost2",
    element: (
      <>
        <BlogPost2 />
      </>
    ),
  },
  {
    path: "/BlogPost3",
    element: (
      <>
        <BlogPost3 />
      </>
    ),
  },
  {
    path: "/BlogPost4",
    element: (
      <>
        <BlogPost4 />
      </>
    ),
  },
  {
    path: "/BlogPost5",
    element: (
      <>
        <BlogPost5 />
      </>
    ),
  },
  {
    path: "/BlogPost6",
    element: (
      <>
        <BlogPost6 />
      </>
    ),
  },
  {
    path: "/SportsBlog",
    element: (
      <>
        <SportsBlog/>
      </>
    ),
  },
  {
    path: "/TechBlog",
    element: (
      <>
        <TechBlog/>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
