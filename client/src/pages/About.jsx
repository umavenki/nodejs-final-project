import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About BooksOn</h1>

      <div className="about-content">
        <section className="about-intro">
          <p>
            BooksOn is your digital gateway to a world of stories, knowledge,
            and imagination. Whether you're a lifelong learner, a curious
            reader, or a student on a deadline, Bookson brings a vast collection
            of eBooks, audiobooks, and academic resources right to your
            fingertips — anytime, anywhere.
          </p>
          <p>
            With a user-friendly interface and a growing library of genres,
            Bookson makes reading accessible, enjoyable, and flexible. No late
            fees, no waiting lines — just endless reading, your way.
          </p>
        </section>

        <section className="services-section">
          <h2>Why BooksOn</h2>
          <ul className="services-list">
            <li>✔ Thousands of books across genres</li>
            <li>✔ Smart search & personalized recommendations</li>
            <li>✔ Read online or download to any device</li>
            <li>✔ Join a community of passionate readers</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
