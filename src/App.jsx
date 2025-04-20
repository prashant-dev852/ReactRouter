import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Home/Dashboard";
import About from "./components/About";
import NavBar from "./components/Home/NavBar";
import Course from "./components/Home/Course";
import MockTest from "./components/Home/MockTest";
import Report from "./components/Home/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <NavBar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "course",
        element: (
          <div>
            <Course />
          </div>
        ),
      },
      {
        path: "mocktest",
        element: (
          <div>
            <MockTest />
          </div>
        ),
      },
      {
        path: "report",
        element: (
          <div>
            <Report />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
      <h1 className="bg-green-600 padding px-4">React Router</h1>
    </>
  );
}

export default App;
