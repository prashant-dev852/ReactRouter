import React from "react";

export default function Card({ name, setName }) {
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Value of variable getting update from the child : {name}</p>
    </div>
  );
}
