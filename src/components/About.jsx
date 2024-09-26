import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="images/my-image-modified.png" alt="Manikanta" />
      </div>
      <div className="about-text">
        <h2>About <span>Me</span></h2>
        <h4>Full Stack Developer</h4>
        <p>
          Hello! I'm Manikanta, a passionate and dedicated full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). 
          As a recent graduate and fresher in the field, I am excited to embark on my professional journey and apply my skills to real-world projects.
        </p>
        <a href="#" className="btn-box">More About Me</a>
      </div>
    </section>
  );
};

export default About;
