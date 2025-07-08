//import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useAuth } from "../context/AuthContext";
import Toggle from "./Toggle";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, token, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { state: [] });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Toggle />
        <AutoStoriesIcon fontSize="medium" />
        {!token && (
          <NavLink to="/" className="logo">
            BooksOn
          </NavLink>
        )}
        {token && (
          <NavLink to="/" className="logo">
            BooksOn "Hi {user.name}!"
          </NavLink>
        )}
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger" aria-label="Menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </label>
      {!token && (
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-link login-btn">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="nav-link signup-btn">
              Signup
            </NavLink>
          </li>
        </ul>
      )}
      {token && (
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className="nav-link">
              Search Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/mybooks" className="nav-link">
              My Books
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="nav-link login-btn"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
