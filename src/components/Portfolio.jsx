import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="project">
      <div className="main-text">
        <h2>Latest <span>Projects</span></h2>
      </div>
      <div className="portfolio-content">
        <div className="row">
          <img src="images/blog.avif" alt="Blog Website" />
          <div className="layer">
            <h5>Blog Website</h5>
            <p>This project is a blog website built using Node.js, Express, EJS templating, and MongoDB...</p>
            <a href="https://github.com/Manikanta-Reddy-14237/blogWebsite"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="row">
          <img src="images/e-learning.avif" alt="Blog Website" />
          <div className="layer">
            <h5>Elearning</h5>
            <p>This project is a blog website built using Node.js, Express, EJS templating, and MongoDB...</p>
            <a href="https://github.com/Manikanta-Reddy-14237/blogWebsite"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="row">
          <img src="images/vq.jpg" alt="Blog Website" />
          <div className="layer">
            <h5>FoodieGo</h5>
            <p> My food ordering website features an intuitive interface that enhances user experience 
            and making  online food ordering process easy for customers.</p>
            <a href="https://github.com/Manikanta-Reddy-14237/blogWebsite"><i className='bx bx-link-external'></i></a>
          </div>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Portfolio;
