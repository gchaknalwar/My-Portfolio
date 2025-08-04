import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <><Navbar /><Hero /><Footer /></> },
    { path: '/About', element: <><Navbar /><About /><Footer /></> },
    { path: '/Projects', element: <><Navbar /><Projects /><Footer /></> },
    { path: '/Contact', element: <><Navbar /><Contact /><Footer /></> },
  ]);
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
