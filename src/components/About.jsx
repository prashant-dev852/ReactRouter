import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>About Page</h1>

      <br />
      <button className="text bg-500 bg-black-500" onClick={handler}>
        Move to Dashboard
      </button>
    </div>
  );
}
