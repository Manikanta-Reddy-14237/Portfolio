import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js

const Home = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".text", {
      strings: ["Web Designer", "Full Stack Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup function to destroy the typed instance
    return () => typed.destroy();
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Manikanta Reddy</h1>
        <h3>And I'm a <span className="text"></span></h3>
        <p>
          I'm a web designer<br />expertise is to create website design, frontend design, and many more ...
        </p>
        <div className="home-sci">
          <a href="#" style={{ "--i": 7 }}><i className='bx bxl-facebook-circle'></i></a>
          <a href="https://www.instagram.com/_manikanta___reddy_/" style={{ "--i": 8 }}><i className='bx bxl-instagram'></i></a>
          <a href="https://www.linkedin.com/in/manikanta-reddy-14a5b8296/" style={{ "--i": 10 }}><i className='bx bxl-linkedin-square'></i></a>
        </div>
        <a href="#" className="btn-box">More About Me</a>
      </div>
    </section>
  );
};

export default Home;
