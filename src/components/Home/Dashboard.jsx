import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handler = () => {
    navigate("course");
  };
  return (
    <div>
      <h1>Dashboard Page</h1>

      <ul>
        <li>
          {/* <button onClick={handler}>courses</button> */}
          <NavLink
            to="course"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="mocktest"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Mock Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="report"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Reports
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
