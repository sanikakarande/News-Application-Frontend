import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">NewsApp</div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
      </label>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trending"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ai-insights"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            AI Insights
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
