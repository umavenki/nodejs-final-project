import React, { useState, useEffect } from "react";
// import Picture from "../assets/client/dried-flowers-books.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  // const handleGetStarted = () => {
  //   navigate("/signup");
  // };

  const { user, token } = useAuth();

  return (
    <>
      <div className="home-container">
        <div className="background-img"></div>

        {!token && (
          <div className="hero">
            <p className="hero-tagline">READ ANYWHERE. LEARN EVERYWHERE.</p>
            <h1 className="hero-title">INFINITE STORIES, ONECLICK AWAY</h1>
          </div>
        )}

        {token && (
          <div className="hero">
            <h1 className="hero-title">WELCOME TO BooksOn</h1>
            <h2 className="hero-tagline">
              BooksOn is a modern day online library.
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
