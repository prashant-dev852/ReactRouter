import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); // to navigate from one poage to another without relaoding

  const handler = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <button className="text-blue-500" onClick={handler}>
        Move to About Page
      </button>
    </div>
  );
}
