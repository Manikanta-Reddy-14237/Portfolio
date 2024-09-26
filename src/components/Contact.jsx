import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="mainText">
      <h1 className="sub-title">Contact <span>Me</span></h1>
      </div>
      <div className="contact-content">
        <div className="contact-box">
          <i className="bx bx-phone" style={{ color: "#00eeff" }}></i>
          <div className="contact-info">
            <h3>Phone</h3>
            <p>7842560804</p>
          </div>
        </div>
        <div className="contact-box">
          <i className="bx bx-envelope" style={{ color: "#00eeff" }}></i>
          <div className="contact-info">
            <h3>Email</h3>
            <p>manikanta14237@gmail.com</p>
          </div>
        </div>
        <div className="contact-box">
          <i className="bx bx-map" style={{ color: "#00eeff" }}></i>
          <div className="contact-info">
            <h3>Address</h3>
            <p>Tanuku, Andhra Pradesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
