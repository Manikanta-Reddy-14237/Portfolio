import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h1 className="sub-title">My <span>Services</span></h1>
        <div className="services-list">
          <div>
            <i className="bx bx-code" style={{ color: "#00eeff" }}></i>
            <h2>Web Designer</h2>
            <p>As a Web Designer, I specialize in creating visually appealing and user-friendly websites that enhance user experience.
             My expertise includes designing responsive layouts, optimizing site performance, and ensuring accessibility across all devices. 
             I am dedicated to transforming your ideas into stunning digital realities that effectively communicate your brand’s message.</p>
            {/* <a href="#" className="read">Learn More</a> */}
          </div>
          <div>
            <i className="bx bx-crop" style={{ color: "#00eeff" }}></i>
            <h2>Full Stack Developer</h2>
            <p>As a Full Stack Developer, I possess a comprehensive skill set that spans both front-end and back-end technologies.
             I build robust, scalable web applications using modern frameworks and databases, ensuring seamless functionality and an engaging user experience. </p>
            {/* <a href="#" className="read">Learn More</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
