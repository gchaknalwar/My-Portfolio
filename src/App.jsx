import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

/* Layout wrapper */
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* pt-24 so navbar doesn't overlap content */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
